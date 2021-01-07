<template>
  <app-header />
  <section class="min-h-fixed">
    <router-view />
  </section>
  <app-footer />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppFooter from './components/app-footer.vue';
import AppHeader from './components/app-header.vue';

export default defineComponent({
  components: {AppHeader, AppFooter},
  name: 'Main',
});
</script>
