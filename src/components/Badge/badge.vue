<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps({
  backgroundColor: String,
});
</script>
<template>
  <div class="badge" :style="{ backgroundColor: backgroundColor }">
    <slot></slot>
  </div>
</template>

<style scoped>
.badge {
  width: fit-content;
  padding: 0px 20px;
  border-radius: 5px;
  font-size: 0.8rem;
}
</style>
