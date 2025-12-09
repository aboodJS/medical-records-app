<script setup lang="ts">
import { NuxtIconSvg } from "@nuxt/icon/runtime/components/svg.js";
</script>

<template>
  <main>
    <nav class="flex justify-evenly w-screen m-auto h-16 items-center">
      <div class="flex items-center gap-7">
        <h2 class="font-bold text-xl">MediRecord Admin</h2>

        <span
          class="hover:border-b-2 hover:border-[#64748b] hover:text-[#64748b] transition-colors"
        >
          <NuxtLink to="/">dashboard</NuxtLink>
        </span>
      </div>
      <div class="flex items-center gap-7">
        <input
          class="border h-9 w-3xs text-[#64748b] border-[#64748b] indent-5 rounded-lg outline-blue-600"
          type="search"
          name=""
          value="search"
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
