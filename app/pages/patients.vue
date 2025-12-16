<script lang="ts" setup>
let { data } = await useFetch("/api/records");
console.log(data.value);
</script>

<template>
  <main class="bg-[#f8fafc]">
    <h1 class="text-3xl font-bold">Patients</h1>
    <table class="table-auto w-[50vw] border rounded-md m-auto">
      <thead>
        <tr class="bg-[#e3e5e6]">
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody v-for="patient in data">
        <tr class="border"></tr>
      </tbody>
    </table>
  </main>
</template>
