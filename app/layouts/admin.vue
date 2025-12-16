<template>
  <main>
    <nav class="flex justify-between w-[95vw] m-auto h-16 items-center">
      <div class="flex items-center gap-7">
        <h2 class="font-bold text-xl">MediRecord Admin</h2>
      </div>
      <div class="flex items-center gap-7">
        <input
          class="border h-9 w-3xs text-[#64748b] border-[#64748b] indent-5 rounded-lg outline-blue-600"
          type="search"
          name=""
          placeholder="search"
          id=""
        />
        <Icon
          class="cursor-pointer"
          size="26px"
          name="uil:bell"
          style="color: #64748b"
        ></Icon>
      </div>
    </nav>
    <slot></slot>
  </main>
</template>
