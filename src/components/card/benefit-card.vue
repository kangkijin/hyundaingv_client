<template>
    <div class="flex flex-col">
      <div
        class="w-[410px] h-[260px] bg-cover bg-center rounded-3xl"
        :style="{ backgroundImage: 'url(' + imgUrl + ')' }"
      ></div>
      <div class="mt-8 font-['Notokr'] text-[28px]">
        <span class="font-bold">{{ title }}</span
        >&nbsp;
        <!-- <span>{{ title_2 }}</span> -->
      </div>
      <p class="mt-8 text-[#585D72] font-['Notokr'] text-[17px]">{{ content }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
import { BenefitModel } from '@/stores/benefit/benefit.type';
  
  const props = defineProps<{
    cardData: BenefitModel
  }>()
  
  let imgUrl = computed(() => {
    return props.cardData.fimFileName
    // return new URL(`../../assets/images/${fileName}`, import.meta.url).href
  })
  let title = computed(() => {
    return props.cardData.title
  })
  let title_2 = computed(() => {
    return props.cardData.subTitle
  })
  let content = computed(() => {
    return props.cardData.content
  })
  </script>
  
  <style scoped></style>