<template>
  <div class="flex flex-col relative">
    <!-- <div
      class="w-[300px] h-[300px] bg-cover bg-center rounded-3xl"
      :style="{ backgroundImage: 'url(' + imgUrl + ')' }"
    ></div> -->
    <div
      class="w-[300px] h-[300px] bg-cover bg-center rounded-3xl"
      style="background-image: url('/images/image_test_ourstory.png')"
    ></div>
    <div class="mt-6 font-['Notokr'] text-[28px]">
      <span class="font-bold">{{ title }}</span
      >&nbsp;
      <span>{{ title_2 }}</span>
    </div>
    <p class="mt-4 font_gray">{{ desc }}</p>
    <p class="mt-6 w-52">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
interface PeopleCardInfo {
  title: string
  title_2: string
  imgUrl: string
  desc: string
  content: string
}

const props = defineProps<{
  cardData: PeopleCardInfo
}>()

let imgUrl = computed(() => {
  return props.cardData.imgUrl
})
let title = computed(() => {
  return props.cardData.title
})
let title_2 = computed(() => {
  return props.cardData.title_2
})
let desc = computed(() => {
  return props.cardData.desc
})
let content = computed(() => {
  return props.cardData.content
})
</script>

<style scoped></style>
