<template>
  <div
    :class="{
      'w-full': fullWidth === true
    }"
  >
    <label class="block mb-1 text-sm font-medium text-gray-700">
      {{ topLabel }}
    </label>
    <input
      :value="modelValue"
      :type="type"
      :disabled="disabled === true"
      :class="{
        'border border-gray-200 hover:border-gray-300 focus:border-gray-700 transition-all': disabled === false,
        'px-2 py-1 text-gray-700 rounded-sm outline-none': true,
        'w-full': fullWidth === true,
        'border border-gray-200 bg-gray-100 cursor-default': disabled === true
      }"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <label class="block text-sm font-light tracking-wide text-gray-400">
      {{ bottomLabel }}
    </label>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'UiInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    topLabel: {
      type: String,
      required: true,
    },
    bottomLabel: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
});
</script>
