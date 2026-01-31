<script lang="ts" setup>
import type { tryUseNuxt } from "nuxt/kit";

const un = useTemplateRef("user-name"); // the value of the username field
const pw = useTemplateRef("pass-word"); // the value of the password field

async function login() {
  try {
    console.log(un.value?.value);
    console.log(pw.value?.value);

    const loginRes = await $fetch("/api/log-in", {
      method: "POST",
      body: {
        message: "hello",
      },
    });

    return loginRes;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <main class="container">
    <h1>login</h1>
    <div>
      <label for="username">username</label>
      <input ref="user-name" name="username" type="text" />
    </div>
    <div>
      <label for="password">password</label>
      <input ref="pass-word" name="password" type="password" />
    </div>
    <button @click="login">login</button>
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
