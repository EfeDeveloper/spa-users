<script setup lang="ts">
defineProps<{
  visible: boolean
  title?: string
  subtitle?: string
  maxWidth?: string | number
}>()
defineEmits(['update:visible'])
</script>

<template>
  <v-dialog
    :model-value="visible"
    @update:model-value="$emit('update:visible', $event)"
    :max-width="maxWidth || 800"
    transition="dialog-top-transition"
  >
    <v-card elevation="4" rounded="lg">
      <v-card-title class="d-flex justify-space-between">
        <div class="d-flex flex-column my-4">
          <p class="text-h5 ps-2 font-weight-bold">
            {{ title }}
          </p>
          <p class="text-caption font-weight-regular opacity-60 ps-2">{{ subtitle }}</p>
        </div>
        <v-btn
          icon="$close"
          size="small"
          variant="text"
          @click="$emit('update:visible', false)"
        ></v-btn>
      </v-card-title>
      <section class="ma-5">
        <slot name="body" />
      </section>
    </v-card>
  </v-dialog>
</template>
