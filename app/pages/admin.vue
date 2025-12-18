<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

let users = [{user: "Dr. John", role: "Doctor", status: "Active", lastActive: `2min`, actions: ""}]
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

    <table class="w-full text-left text-sm">
      <thead class="bg-slate-50 border-b border-slate-200">
        <tr>
          <th class="px-6 py-4 font-medium text-slate-500">User</th>
          <th class="px-6 py-4 font-medium text-slate-500">Role</th>
          <th class="px-6 py-4 font-medium text-slate-500">Status</th>
          <th class="px-6 py-4 font-medium text-slate-500">Last Active</th>
          <th class="px-6 py-4 font-medium text-slate-500">Action</th>
        </tr>
        <tbody v-for="user in users" class="divide-y divide-slate-100">
          <tr class="group hover:bg-slate-50/50 transition-colors">
            <td class="px-6 py-4"><div class="flex items-center gap-2 text-slate-700">{{ user.user }}</div></td>
            <td class="px-6 py-4"><div class="flex items-center gap-2 text-slate-700">{{ user.role }}</div></td>
            <td class="px-6 py-4"><div class="flex items-center gap-2 text-slate-700">{{ user.status }}</div></td>
            <td class="px-6 py-4"><div class="flex items-center gap-2 text-slate-700">{{ user.lastActive }}</div></td>
            <td class="px-6 py-4"><div class="flex items-center gap-2 text-slate-700">{{ user.actions }}</div></td>
          </tr>
        </tbody>
      </thead>
    </table>
  </main>
</template>
