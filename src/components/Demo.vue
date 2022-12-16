<template>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <hello-world msg="nihao"></hello-world>
  </template>

<script setup lang="ts">

defineProps<{ msg: string }>()

const count = ref(0)
</script>