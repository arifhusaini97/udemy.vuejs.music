<template>
  <!-- Header -->
  <app-header />

  <router-view v-slot="{ Component }"  :key="$route.fullPath">
    <transition name="fade" mode="out-in">
      <component :is="Component" > </component
    ></transition>
  </router-view>
  <!-- Player -->
  <app-player />

  <!-- Auth Modal -->
  <auth-modal />
</template>
<script>
import AppHeader from '@/components/Header.vue';
import AuthModal from '@/components/Auth.vue';
import AppPlayer from '@/components/Player.vue';

export default {
  name: 'App',
  components: {
    AppPlayer,
    AppHeader,
    AuthModal,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>
<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
