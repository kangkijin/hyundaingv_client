<template>
  <div class="flex flex-col relative">
    <div class="w-[560px] h-[358px] bg-cover bg-center rounded-3xl" :style="stypebg"></div>
    <img
      class="w-[290px] absolute bottom-40 self-center"
      src="https://png2.cleanpng.com/sh/6d27300de9c0c5339bec5d49df7c7116/L0KzQYm3VsE1N5tBfZH0aYP2gLBuTfh6fZ9peds2bXB3f8O0gB9ueJJzkZ9sYYKwfLFuj710aZ9pfeR4LUXlQoPpVvY4O2Npe6oDLka1R4W6VcYyOWY3UaI5MUe0SYO3WMMveJ9s/kisspng-hyundai-motor-company-car-logo-sandero-5b22b6f732dc88.6274356115290017192083.png"
    />
    <p class="mt-8 font-['Notokr'] text-[28px] text-center font-bold text-7">
      {{ name }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface GroupCardInfo {
  name: string
  logoUrl: string
  imgUrl: string
}

const props = defineProps<{
  cardData: GroupCardInfo
}>()

let imgUrl = computed(() => {
  //   return new URL(`../../assets/images/${fileName}`, import.meta.url).href
  return props.cardData.imgUrl
})
let logoUrl = computed(() => {
  return props.cardData.imgUrl
})
let name = computed(() => {
  return props.cardData.name
})

let stypebg = computed(() => {
  let img = props.cardData.imgUrl
  if (img) {
    return {
      backgroundImage: 'url(' + img + ')',
      filter: `brightness(90%)`
    }
  } else {
    return {
      backgroundColor: 'rgba(237, 239, 242, 0.5)'
    }
  }
})
</script>

<style scoped></style>
