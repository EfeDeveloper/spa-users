<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <default-layout>
    <template #main-view>
      <router-view />
    </template>
  </default-layout>
</template>
