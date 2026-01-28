<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">patients</NuxtLink></li>
      <li><NuxtLink to="/employees">employees</NuxtLink></li>
    </ul>
  </nav>
</template>

<style>
nav ul {
  display: flex;
  list-style: none;
  width: 20vh;
  justify-content: space-evenly;
}
</style>
