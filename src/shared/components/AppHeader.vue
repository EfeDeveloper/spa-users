<template>
  <v-app-bar
    name="bar-header"
    scroll-behavior="elevate collapse"
    scroll-threshold="200"
    density="comfortable"
    color="header"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>SPA Users</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="$magnify"></v-btn>
    </template>
  </v-app-bar>
</template>
