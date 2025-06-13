<script setup lang="ts">
import type { UserStats } from '@/domain/users/models/User'

import StatsCardsSkeleton from './StatsCardsSkeleton.vue'

defineProps<{
  stats: UserStats[]
  isLoading: boolean
}>()
</script>

<template>
  <v-container class="pa-0">
    <StatsCardsSkeleton v-if="isLoading" :numberOfCards="3" />
    <v-row v-else class="ga-4" no-gutters>
      <v-col v-for="stat in stats" :key="stat.title">
        <v-card class="py-4 px-5" rounded="lg" elevation="4">
          <div class="text-body-2 opacity-80">{{ stat.description }}</div>
          <div class="d-flex align-center ga-3">
            <div class="text-h4 font-weight-bold">{{ stat.value.toLocaleString() }}</div>
            <v-chip
              :color="stat.chipColor"
              size="small"
              variant="elevated"
              class="font-weight-bold"
            >
              {{ stat.chip }}
            </v-chip>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
