<script lang="ts" setup>
import Form from "~/components/app/form.vue";

const un = useTemplateRef("user-name"); // the value of the username field
const pw = useTemplateRef("pass-word"); // the value of the password field

async function login() {
  try {
    console.log(un.value?.value);
    console.log(pw.value?.value);

    const loginRes = await $fetch("/api/signup", {
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
  <Form :method="login" title="signup"></Form>
</template>
