<template>
  <main class="bg-[#f8fafc]">
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
          class="flex justify-evenly items-center cursor-pointer hover:bg-[#1d4ed8] transition-colors bg-[#2563eb] text-white h-10 px-4 rounded-md"
        >
          <Icon name="uil:plus" />

          New Patient
        </div></span
      >
    </div>
  </main>
</template>
