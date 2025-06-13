<script setup lang="ts">
import { ref, watch } from 'vue'

import { debounce } from '@/shared/utils/debounce'

defineProps<{ placeholder?: string }>()
const emit = defineEmits<{
  (e: 'search', value: string): void
  (e: 'reset'): void
}>()

const searchValue = ref('')

const emitDebouncedSearch = debounce((...args: unknown[]) => {
  const val = args[0] as string
  emit('search', val)
}, 400)

watch(searchValue, (val) => {
  if (val === '') {
    emit('reset')
  } else {
    emitDebouncedSearch(val)
  }
})
function handleSearch() {
  emit('search', searchValue.value.trim())
}
function handleReset() {
  searchValue.value = ''
  emit('reset')
}
</script>

<template>
  <v-text-field
    v-model="searchValue"
    :placeholder="placeholder || 'Search...'"
    prepend-inner-icon="$magnify"
    append-inner-icon="$close"
    @keydown.enter.prevent="handleSearch"
    @click:prepend-inner="handleSearch"
    @click:append-inner="handleReset"
    variant="solo"
    hide-details="auto"
  />
</template>
