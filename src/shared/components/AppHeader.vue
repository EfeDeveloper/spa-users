<template>
  <v-app-bar
    name="bar-header"
    scroll-behavior="elevate collapse"
    scroll-threshold="200"
    density="comfortable"
    color="header"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon size="large" />
    </template>

    <v-app-bar-title>SPA Users</v-app-bar-title>
  </v-app-bar>
</template>
