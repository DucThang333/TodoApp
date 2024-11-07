<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  background-color: rgba(127, 255, 212, 0.753);
  color: white;
  border: none;
}
</style>
