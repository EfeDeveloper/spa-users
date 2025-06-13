import { onMounted, ref } from 'vue'

import type { User, UserStats } from '@/domain/users/models/User'
import { UserApiRepository } from '@/domain/users/services/user.service'
import { withLoading } from '@/shared/utils/withLoading'

export const useUserController = () => {
  const userRepository = new UserApiRepository()
  const userList = ref<User[]>([])
  const userStats = ref<UserStats[]>([])
  const isLoading = ref({ userList: false, userStats: false })

  const showUserDialog = ref(false)
  const userSelected = ref<User | null>(null)

  const handleUserInformation = (user: User) => {
    showUserDialog.value = true
    userSelected.value = user
  }

  const getUsersStats = async () => {
    try {
      const stats = await withLoading(isLoading.value, 'userStats', () =>
        userRepository.getUserStats(),
      )
      userStats.value = stats
    } catch (error) {
      console.log('🚀  -- error:', error)
    }
  }

  // TODO: Pending implement Pagination feature, based on the call to the API
  const getUsersList = async () => {
    try {
      const users = await withLoading(isLoading.value, 'userList', () =>
        userRepository.getUserList(),
      )
      userList.value = users
    } catch (error) {
      console.log('🚀  -- error:', error)
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
    userList,
    userStats,
    isLoading,
  }
}
