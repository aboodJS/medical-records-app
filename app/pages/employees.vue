<script lang="ts" setup>
const { data: employees, error, status } = await useFetch("/api/employees");
</script>

<template>
  <h1>employees</h1>
  <table>
    <tbody>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>job</th>
        <th>id</th>
      </tr>
      <tr v-for="employee in employees">
        <td>{{ employee.name }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.job }}</td>
        <td>{{ employee.id }}</td>
      </tr>
    </tbody>
  </table>
</template>
