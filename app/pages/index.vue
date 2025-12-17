<script lang="ts" setup>
const pName = useTemplateRef("p-name");
const pAge = useTemplateRef("p-age");
async function addPatient() {
  let data = {
    name: pName.value?.value,
    age: pAge.value?.value,
    stay: "3 days",
  };
  const req = await $fetch("/api/records", {
    method: "post",
    body: data,
  });
  console.log(req.res);
}

const dialog = useTemplateRef("dialog");
function openForum() {
  dialog.value?.showModal();
}

function closeModal() {
  dialog.value?.close();
}
</script>

<template>
  <main class="bg-[#f8fafc]">
    <dialog ref="dialog" class="m-auto">
      <button class="h-7 w-7" @click="closeModal">
        <Icon name="ri:close-large-line" width="30" height="30" />
      </button>
      <p>enter patient's data</p>
      <div class="grid">
        <input type="text" placeholder="patient's name" ref="p-name" /><input
          type="number"
          ref="p-age"
          placeholder="patient's age"
        />
        <button
          @click="
            () => {
              addPatient();
              closeModal();
            }
          "
        >
          send Data
        </button>
      </div>
    </dialog>
    <div class="flex justify-between m-auto items-center w-[95vw]">
      <span
        ><h1 class="text-3xl font-bold">Dashboard Overview</h1>
        <p>Welcome back, Dr. Here's what's happening today.</p></span
      >
      <span class="flex gap-x-3"
        ><div
          class="flex justify-evenly items-center cursor-pointer hover:bg-[#f8fafc] transition-colors bg-white h-10 px-4 rounded-md border border-[#e2e8f0]"
        >
          <Icon name="uil:document-info" />
          Generate Report
        </div>
        <div
          @click="openForum"
          class="flex justify-evenly items-center cursor-pointer hover:bg-[#1d4ed8] transition-colors bg-[#2563eb] text-white h-10 px-4 rounded-md"
        >
          <Icon name="uil:plus" />

          New Patient
        </div></span
      >
    </div>
    <div class="flex w-[95vw] m-auto justify-evenly gap-6">
      <DataBox data-name="Total patients" status-number="5"></DataBox
      ><DataBox data-name="Appointments" status-number="1"></DataBox
      ><DataBox data-name="Operations" status-number="1"></DataBox>
    </div>
  </main>
</template>
