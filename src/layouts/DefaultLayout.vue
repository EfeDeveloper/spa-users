<script setup lang="ts">
import AppFooter from '@/shared/components/AppFooter.vue'
import AppHeader from '@/shared/components/AppHeader.vue'
</script>

<template>
  <v-app>
    <app-header />

    <v-main>
      <v-container class="main-container">
        <slot name="main-view">Content</slot>
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<style lang="scss" scoped>
.main-container {
  padding-top: 3rem;
}
</style>
