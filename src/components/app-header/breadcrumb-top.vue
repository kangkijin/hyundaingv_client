<template>
  <div class="breadcrumb max-w-[1320px] mt-10 w-full flex justify-end">
    <div class="flex items-center">
      <div class="btn_icon home"></div>

      <div class="dot bg-[#898D9C] rounded-full w-[6px] h-[6px] mx-[10px]"></div>
      <p>{{ p_menu }}</p>
      <div v-if="middle" class="dot bg-[#898D9C] rounded-full w-[6px] h-[6px] mx-[10px]"></div>
      <p>{{ middle }}</p>
      <div class="dot bg-[#898D9C] rounded-full w-[6px] h-[6px] mx-[10px]"></div>
      <p class="font-bold mr-[10px]">{{ ch_menu }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  p_menu: string
  ch_menu: string
  middle?: string
}>()
</script>

<style scoped>
.btn_icon::before {
  margin-right: 0px;
}

@media screen and (max-width: 1024px) {
  .breadcrumb {
    display: none;
  }
}
</style>
