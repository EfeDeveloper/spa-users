<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <v-card rounded="lg" elevation="4">
    <v-card-title>
      <v-container class="pa-0">
        <v-row class="align-center">
          <v-col>
            <p class="text-h5 ps-2 font-weight-bold">
              {{ title }}
            </p>
            <p
              class="text-caption w-75 font-weight-regular text-no-wrap text-truncate opacity-60 ps-2"
            >
              {{ subtitle }}
            </p>
          </v-col>
          <v-col>
            <div class="d-flex justify-sm-end">
              <v-btn color="primary" prepend-icon="$exportVariant"> Export CSV </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
  </v-card>
</template>
