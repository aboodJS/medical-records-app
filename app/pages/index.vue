<script setup>
const data = await useFetch("/api/patients");
console.log(data.data.value);
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
    </tbody>
  </table>
</template>
