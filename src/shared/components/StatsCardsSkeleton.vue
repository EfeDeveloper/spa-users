<script setup lang="ts">
defineProps<{
  numberOfCards: number
}>()
</script>

<template>
  <v-row class="ga-4" no-gutters>
    <v-col v-for="n in numberOfCards" :key="n">
      <v-card class="py-4 px-5" rounded="lg" elevation="4" style="min-width: 200px">
        <v-skeleton-loader width="200px" class="mb-2" style="height: 18px" />

        <div class="d-flex align-center ga-2">
          <v-skeleton-loader width="50px" style="height: 32px" class="me-2" />
          <v-skeleton-loader width="80px" height="28px" style="border-radius: 20px" />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
