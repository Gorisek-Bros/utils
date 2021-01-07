<template>
  <section class="flex justify-center py-8">
    <div class="w-11/12 md:w-5/12 lg:w-5/12 xl:w-5/12">
      <ui-input
        v-model="hn.k"
        type="number"
        full-width
        top-label="Construction point"
        bottom-label="hill > dhill > profile > k"
        class="mb-4"
      />
      <div class="flex w-full mb-4 space-x-4">
        <ui-input
          v-model="hn.minAlpha"
          disabled
          full-width
          top-label="Minimum optimal alpha"
          bottom-label="hill > dhill > profile > alpha"
        />
        <ui-input
          v-model="hn.maxAlpha"
          disabled
          full-width
          top-label="Maximum optimal alpha"
          bottom-label="hill > dhill > profile > alpha"
        />
      </div>
      <div class="flex w-full space-x-4">
        <ui-input
          v-model="hn.minHN"
          disabled
          full-width
          top-label="Minimum optimal H/N"
        />
        <ui-input
          v-model="hn.maxHN"
          disabled
          full-width
          top-label="Maximum optimal H/N"
        />
      </div>
    </div>
  </section>
  <section class="flex justify-center py-8">
    <div class="w-11/12 md:w-5/12 lg:w-5/12 xl:w-5/12">
      <ui-input
        v-model="n.h"
        full-width
        type="number"
        top-label="Height between inrun and K point"
        bottom-label="hill > dhill > profile > h"
        class="mb-4"
      />
      <div class="flex w-full space-x-4">
        <ui-input
          v-model="n.minN"
          full-width
          top-label="Minimum optimal n"
          disabled
          bottom-label="hill > dhill > profile > n"
        />
        <ui-input
          v-model="n.maxN"
          full-width
          top-label="Maximum optimal n"
          disabled
          bottom-label="hill > dhill > profile > n"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import UiInput from '../components/ui-input.vue';

interface IAlpha {
  k: number;
  minAlpha: string;
  maxAlpha: string;
  minHN: string;
  maxHN: string;
}

interface IN {
  h: number;
  minN: string;
  maxN: string;
}

export default defineComponent({
  name: 'HN',
  components: {UiInput},
  setup() {
    const hn = reactive<IAlpha>({
      k: 140,
      get minAlpha() {
        return (this.k / 30 + 6.9).toFixed(2);
      },
      get maxAlpha() {
        return (this.k / 30 + 7.9).toFixed(2);
      },
      get minHN() {
        return (this.k / 800 + 0.4).toFixed(2);
      },
      get maxHN() {
        return (this.k / 1000 + 0.48).toFixed(2);
      },
    });

    const n = reactive<IN>({
      h: 70,
      get minN() {
        return (this.h / (hn.k / 1000 + 0.48)).toFixed(2);
      },
      get maxN() {
        return (this.h / (hn.k / 800 + 0.4)).toFixed(2);
      },
    });

    return {
      hn,
      n,
    };
  },
});
</script>
