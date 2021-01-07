<template>
  <footer class="p-4 border-t border-gray-200">
    <p class="text-center">Made with ❤️ by Gorišek Bros. © {{ new Date().getFullYear() }}</p>
  </footer>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppFooter',
});
</script>
