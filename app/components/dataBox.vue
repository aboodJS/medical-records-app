<script setup lang="ts">
defineProps(["dataName", "statusNumber"]);
</script>

<template>
  <div class="rounded-lg border border-slate-200 bg-white p-4 shadow-sm w-1/3">
    <div class="text-sm font-medium text-slate-500">
      {{ dataName }}
    </div>
    <div
      class="mt-1 text-2xl font-semibold text-slate-900"
      data-id="element-94"
    >
      {{ statusNumber }}
    </div>
  </div>
</template>
