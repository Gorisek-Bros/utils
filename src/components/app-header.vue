<template>
  <header class="flex items-center px-4 py-4 sm:px-4 md:px-4 lg:px-8 xl:px-8">
    <router-link
      to="/"
      class="text-xl font-semibold text-gray-600 cursor-pointer"
    >
      DSJ4 Utilities
    </router-link>
    <div class="flex-grow" />
    <router-link
      to="/wind"
      class="block mr-6 tracking-wide text-gray-400 cursor-pointer hover:text-black"
    >
      Wind Chart
    </router-link>
    <router-link
      to="/hn"
      class="block tracking-wide text-gray-400 cursor-pointer hover:text-black"
    >
      H/N Calculator
    </router-link>
  </header>
  <section class="p-2 bg-blue-400">
    <p class="font-medium text-center">
      This site is associated with dsj24.pl website.
    </p>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppHeader',
});
</script>
