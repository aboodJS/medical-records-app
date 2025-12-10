<script lang="ts" setup>
let { data } = await useFetch("/api/records");
console.log(data.value);
</script>

<template>
  <main class="bg-[#f8fafc]">
    <h1 class="text-3xl font-bold">Patients</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Stay</th>
        </tr>
      </thead>
      <tbody v-for="patient in data">
        <tr>
          <td>{{ patient.name }}</td>
          <td>{{ patient.age }}</td>
          <td>{{ patient.stay }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
