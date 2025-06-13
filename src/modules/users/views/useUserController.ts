import { computed, onMounted, ref } from 'vue'

import type { User, UserStats } from '@/domain/users/models/User'
import { UserApiRepository } from '@/domain/users/services/user.service'
import { getErrorMessage } from '@/shared/utils/getErrorMessage'
import { withLoading } from '@/shared/utils/withLoading'

export const useUserController = () => {
  const userRepository = new UserApiRepository()
  const userList = ref<User[]>([])
  const userStats = ref<UserStats[]>([])
  const isLoading = ref({ userList: false, userStats: false })

  const showUserDialog = ref(false)
  const userSelected = ref<User | null>(null)
  const searchValue = ref('')

  // 👇 Nuevo: Estado para error snackbar
  const errorMessage = ref('')
  const showError = ref(false)

  const filteredUsers = computed(() =>
    searchValue.value.trim()
      ? userList.value.filter((user) =>
          user.name.toLowerCase().includes(searchValue.value.trim().toLowerCase()),
        )
      : userList.value,
  )

  const handleUserInformation = (user: User) => {
    showUserDialog.value = true
    userSelected.value = user
  }

  function handleSearch(query: string) {
    if (!query.trim() || /\s{3,}/.test(query)) {
      showApiError('The search cannot be empty. Please enter a valid term.')
    }
    searchValue.value = query
  }

  function handleReset() {
    searchValue.value = ''
  }

  // 👇 Manejo centralizado de errores
  function showApiError(message: string) {
    errorMessage.value = message
    showError.value = true
  }

  const getUsersStats = async () => {
    try {
      const stats = await withLoading(isLoading.value, 'userStats', () =>
        userRepository.getUserStats(),
      )
      userStats.value = stats
    } catch (error) {
      showApiError(getErrorMessage(error) || 'Error al cargar las estadísticas de usuarios.')
    }
  }

  const getUsersList = async () => {
    try {
      const users = await withLoading(isLoading.value, 'userList', () =>
        userRepository.getUserList(),
      )
      userList.value = users
    } catch (error) {
      showApiError(getErrorMessage(error) || 'Error al cargar la lista de usuarios.')
    }
  }

  onMounted(() => {
    getUsersStats()
    getUsersList()
  })

  return {
    showUserDialog,
    userSelected,
    handleUserInformation,
    userStats,
    isLoading,
    filteredUsers,
    handleSearch,
    handleReset,
    errorMessage,
    showError,
  }
}
