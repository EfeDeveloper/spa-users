<script setup lang="ts">
const icons = ['$facebook', '$twitter', '$linkedin', '$instagram']
</script>

<template>
  <v-footer name="footer" class="footer" color="footer" elevation="10">
    <div>
      <v-btn v-for="icon in icons" :key="icon" :icon="icon" density="comfortable" variant="text" />
    </div>

    <v-divider thickness="2" width="50"></v-divider>

    <div>
      Developed with passion and dedication.<br />
      &copy; {{ new Date().getFullYear() }} All rights reserved.
    </div>
  </v-footer>
</template>

<style lang="scss" scoped>
.footer {
  height: 200px;
  min-height: 200px;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10px;
}
</style>
