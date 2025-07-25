<script setup lang="ts">
import type { User } from '@/domain/users/models/User'
import { headers } from '@/modules/users/constants/table'
import { getInitials } from '@/shared/utils/textsFormat'
defineProps<{
  users: User[]
  isLoading: boolean
}>()

const emit = defineEmits<{
  (e: 'userInformation', user: User): void
}>()

function openUser(user: User) {
  emit('userInformation', user)
}
</script>

<template>
  <section>
    <v-card rounded="lg" elevation="4" :class="{ 'table-empty': users.length === 0 && !isLoading }">
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="10"
        show-current-page
        :loading="isLoading"
      >
        <template v-slot:loading>
          <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
        </template>
        <template #item="{ item }">
          <tr>
            <td>
              <v-avatar size="32">
                <img v-if="item.avatarUrl" :src="item.avatarUrl" :alt="item.name" />
                <span v-else class="avatar-fallback">{{ getInitials(item.name) }}</span>
              </v-avatar>
            </td>
            <td>{{ item.name }}</td>
            <td>
              {{ item.email }}
            </td>
            <td>
              <v-btn icon="$eyePlus" variant="flat" @click="openUser(item)"></v-btn>
            </td>
          </tr>
        </template>
        <!-- Slot para el mensaje de tabla vacía (opcional, personalizable) -->
        <template #no-data>
          <div class="no-data-message">No data available</div>
        </template>
      </v-data-table>
    </v-card>
  </section>
</template>
