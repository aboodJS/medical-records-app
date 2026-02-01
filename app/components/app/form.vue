<script lang="ts" setup>
defineProps(["method", "title"]);
</script>

<template>
  <main class="container">
    <h1>{{ title }}</h1>
    <div>
      <label for="username">username</label>
      <input ref="user-name" name="username" type="text" />
    </div>
    <div>
      <label for="password">password</label>
      <input ref="pass-word" name="password" type="password" />
    </div>
    <button @click="method">login</button>
  </main>
</template>

<style>
h1 {
  text-align: center;
}

main {
  display: grid;
}

button {
  justify-self: center;
}
</style>
