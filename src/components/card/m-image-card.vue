<template>
  <div>
    <router-link :to="link || ''" class="cursor-pointer">
      <div class="image rounded-xl" :style="styleImage"></div>
      <slot name="content"></slot>
    </router-link>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  link: string
  url: string
  width: string
  height: string
  backgroundSize: string
  backgroundPos: string
}>()
let styleImage = computed(() => {
  return {
    width: props.width,
    height: props.height,
    backgroundImage: 'url(' + props.url + ')',
    backgroundSize: props.backgroundSize,
    backgroundPosition: props.backgroundPos
  }
})
</script>
