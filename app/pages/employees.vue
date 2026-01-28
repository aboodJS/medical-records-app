<script lang="ts" setup>
const { data: employees, error, status } = await useFetch("/api/employees");
</script>

<template>
  <h1>employees</h1>
  <ul>
    <li v-for="employee in employees">{{ employee.name }}</li>
  </ul>
</template>
