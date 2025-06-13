<script setup lang="ts">
import UserDescription from '@/modules/users/components/UserDescription.vue'
import UsersTable from '@/modules/users/components/UsersTable.vue'
import { useUserController } from '@/modules/users/views/useUserController'
import DefaultModal from '@/shared/components/DefaultModal.vue'
import SectionHeader from '@/shared/components/SectionHeader.vue'
import StatsCards from '@/shared/components/StatsCards.vue'

const { showUserDialog, userSelected, handleUserInformation, userList, userStats, isLoading } =
  useUserController()
</script>

<template>
  <section class="section-main">
    <section-header title="Users" subtitle="List of users registered in the system" />

    <stats-cards :stats="userStats" :isLoading="isLoading.userStats" />

    <!-- TODO: Pending implement Pagination feature, based on the call to the API -->

    <users-table
      :users="userList"
      :isLoading="isLoading.userList"
      @user-information="handleUserInformation"
    />

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
