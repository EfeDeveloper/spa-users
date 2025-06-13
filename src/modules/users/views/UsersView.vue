<script setup lang="ts">
import { ref } from 'vue'

import type { User } from '@/domain/users/models/User'
import UserDescription from '@/modules/users/components/UserDescription.vue'
import UsersList from '@/modules/users/components/UsersTable.vue'
import DefaultModal from '@/shared/components/DefaultModal.vue'
import SectionHeader from '@/shared/components/SectionHeader.vue'
import StatsCards from '@/shared/components/StatsCards.vue'

const stats = [
  {
    title: 'General',
    value: 11450,
    chip: '+2.15%',
    chipColor: 'success',
    description: 'General customers',
  },
  {
    title: 'Admins',
    value: 812,
    chip: '-0.34%',
    chipColor: 'error',
    description: 'Admins',
  },
  {
    title: 'Creators',
    value: 83,
    chip: '+1.38%',
    chipColor: 'success',
    description: 'Creators',
  },
]

// TODO: Use this api to get users https://randomuser.me/api/?page=3&results=10&seed=abc

const users = ref<User[]>([
  {
    id: '1',
    name: 'Arlene McCoy',
    email: '@arlenem',
    avatarUrl: '',
    address: '456 Elm St, Metropolis',
    phone: '(555) 987-6543',
    company: 'Innovatech',
    webSite: 'https://innovatech.com',
  },
  {
    id: '2',
    name: 'Juan Pérez',
    email: '@juanp',
    avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    address: '123 Main St, Springfield',
    phone: '(555) 123-4567',
    company: 'Tech Solutions',
    webSite: 'https://techsolutions.com',
  },
])

const showUserDialog = ref(false)
const userSelected = ref<User | null>(null)

const handleUserInformation = (user: User) => {
  showUserDialog.value = true
  userSelected.value = user
}
</script>

<template>
  <section class="section-main">
    <section-header title="Users" subtitle="List of users registered in the system" />

    <stats-cards :stats="stats" />
    <users-list :users="users" @user-information="handleUserInformation" />

    <default-modal
      title="User profile"
      :subtitle="`Detailed information about ${userSelected?.name} profile`"
      :maxWidth="450"
      v-model:visible="showUserDialog"
    >
      <template #body>
        <user-description :user="userSelected!" />
      </template>
    </default-modal>
  </section>
</template>

<style lang="scss" scoped>
.section-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
