<script lang="ts" setup>
const { data: patients, error, status } = await useFetch("/api/patients");
</script>

<template>
  <h1>patients</h1>
  <table>
    <tbody>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>condition</th>
        <th>id</th>
      </tr>
      <tr v-for="patient in patients">
        <td>{{ patient.name }}</td>
        <td>{{ patient.age }}</td>
        <td>{{ patient.condition }}</td>
        <td>{{ patient.id }}</td>
      </tr>
    </tbody>
  </table>
</template>
