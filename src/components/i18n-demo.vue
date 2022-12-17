<template>
  <div>{{ $t("message.hello") }}</div>
  <a-button type="primary" @click="handleLocation($i18n)">切换语言</a-button>
</template>

<script setup lang="ts">
import type { VueI18n, ExportedGlobalComposer } from "vue-i18n";
const handleLocation = (i18n: VueI18n | ExportedGlobalComposer) => {
  i18n.locale = i18n.locale === "en" ? "cn" : "en";
};
</script>
