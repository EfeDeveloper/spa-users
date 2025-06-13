<script setup lang="ts">
import type { User } from '@/domain/users/models/User'
import { formatWebsiteUrl, getInitials } from '@/shared/utils/textsFormat'

defineProps<{
  user: User
  showActions?: boolean
}>()
</script>

<template>
  <v-card rounded="lg" elevation="4">
    <v-card-item class="user-card__header">
      <div class="user-card__header-content">
        <v-avatar size="96" class="user-card__avatar">
          <v-img v-if="user.avatarUrl" :src="user.avatarUrl" alt="Avatar" />
          <span v-else class="avatar-fallback text-h4 font-weight-bold">{{
            getInitials(user.name)
          }}</span>
        </v-avatar>
        <h2 class="text-white">{{ user.name }}</h2>
        <p class="text-white" v-if="user.company">{{ user.company }}</p>
      </div>
    </v-card-item>

    <v-card-text class="user-card__body">
      <v-list>
        <v-list-item>
          <template #prepend>
            <v-icon color="grey-darken-1">$email</v-icon>
          </template>
          <v-list-item-title class="user-card__email">{{ user.email }}</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="user.phone">
          <template #prepend>
            <v-icon color="grey-darken-1">$phone</v-icon>
          </template>
          <v-list-item-title class="user-card__phone">{{ user.phone }}</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="user.address">
          <template #prepend>
            <v-icon color="grey-darken-1">$mapMarker</v-icon>
          </template>
          <v-list-item-title class="user-card__address">{{ user.address }}</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="user.webSite">
          <template #prepend>
            <v-icon color="grey-darken-1">$web</v-icon>
          </template>
          <v-list-item-title class="user-card__website">
            <a
              :href="formatWebsiteUrl(user.webSite)"
              target="_blank"
              rel="noopener noreferrer"
              class="user-card__website-link"
            >
              {{ user.webSite }}
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.user-card {
  &__header {
    background: linear-gradient(to right, var(--gray-900), var(--gray-500), var(--gray-400));
    padding-bottom: 0;
  }

  &__header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 0.5rem 0;
    gap: 0.2rem;
  }

  &__avatar {
    border: 4px solid #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.11);
    margin-bottom: 0.7rem;
    background: transparent;
  }

  &__body {
    padding: 1.4rem 0.7rem 1rem 0.7rem;
    background: transparent;
  }

  &__email,
  &__phone,
  &__address,
  &__website {
    word-break: break-all;
  }

  &__website-link {
    color: var(--info);
    text-decoration: none;
    transition: text-decoration 0.2s;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
