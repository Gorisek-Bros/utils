<template>
  <section
    class="flex flex-col justify-center px-4 py-4 min-h-fixed sm:px-4 md:px-4 lg:px-8 xl:px-8"
  >
    <slot />
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppContainer',
});
</script>
