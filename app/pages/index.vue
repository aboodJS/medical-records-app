<script lang="ts" setup>
const { data: patients, error, status } = await useFetch("/api/patients");
</script>

<template>
  <h1>patients</h1>
  <ul>
    <li v-for="patient in patients">
      {{ patient.name }}
    </li>
  </ul>
</template>
