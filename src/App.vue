<template>
  <!-- Header -->
  <app-header />

  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
    <component :is="Component">

    </component></transition>
  </router-view>
  <!-- Player -->
  <app-player />

  <!-- Auth Modal -->
  <auth-model />
</template>
<script>
import AppHeader from './components/Header.vue';
import AuthModel from './components/Auth.vue';
import AppPlayer from './components/Player.vue';

export default {
  name: 'App',
  components: {
    AppPlayer,
    AppHeader,
    AuthModel,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>
<style scoped>
.fade-enter-from{
  opacity:0;
}
.fade-enter-active{
  transition:all 0.5s linear;
}
.fade-leave-to{
  transition:all 0.5s linear;
  opacity: 0;
}
</style>
