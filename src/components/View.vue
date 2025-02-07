<script lang="ts" setup>
  defineProps<{
    element: string;
    ariaLabel?: string
    isDisabled?: boolean
  }>()
</script>
<template>
  <div>
    <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
      <slot name="content"></slot>
    </component>
  </div>
</template>
