<script setup lang="ts">
const icons = ['$facebook', '$twitter', '$linkedin', '$instagram']
</script>

<template>
  <v-footer
    app
    name="footer"
    class="text-center d-flex flex-column ga-2 pt-4 pb-5 align-center justify-center"
    color="footer"
    elevation-10
  >
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60 pa-4">
      Desarrollado con pasión y dedicación.<br />
      &copy; {{ new Date().getFullYear() }} Todos los derechos reservados.
    </div>
  </v-footer>
</template>
