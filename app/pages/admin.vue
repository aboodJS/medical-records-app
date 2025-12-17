<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <main class="bg-[#f8fafc]">
    <div class="flex justify-between m-auto items-center w-[95vw]">
      <span
        ><h1 class="text-3xl font-bold">Authorized Users</h1>
        <p>
          Manage access permissions and user roles for the medical records
          system.
        </p></span
      ><span>
        <div
          class="flex justify-evenly items-center cursor-pointer hover:bg-[#1d4ed8] transition-colors bg-[#2563eb] text-white h-10 px-4 rounded-md"
        >
          <Icon name="uil:plus" />

          New User
        </div></span
      >
    </div>
    <div class="flex w-[95vw] m-auto justify-evenly gap-6">
      <DataBox data-name="Total Users" status-number="5"></DataBox
      ><DataBox data-name="Active Now" status-number="1"></DataBox
      ><DataBox data-name="Pending Invites" status-number="1"></DataBox>
    </div>
  </main>
</template>
