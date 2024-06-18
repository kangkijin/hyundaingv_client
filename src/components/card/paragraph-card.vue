<template>
  <div
    class="container flex flex-col justify-center gap-[30px] rounded-lg bg-[#EDEFF2] p-[50px]"
    :style="style_"
    :class="{ 'hover:bg-white': canhover == true }"
  >
    <slot name="icon"></slot>
    <div class="flex flex-col gap-[40px]">
      <template v-for="(p, idx) of list_paragaph" :key="idx">
        <div class="flex flex-col gap-[20px]">
          <p
            :class="{ 'text-center': text_align == 'center' }"
            class="text-black font-bold font-['Notokr'] text-3xl whitespace-pre-line"
          >
            {{ p.title }}
          </p>
          <p
            :class="{ 'text-center': text_align == 'center' }"
            class="conntent_ text-[#585D72] font-normal font-['Notokr'] text-lg whitespace-pre-line"
          >
            {{ p.content }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  list_paragaph: any
  width: string
  height: string
  text_align: string
  align_item: string
  canhover: boolean
}>()

let style_ = computed(() => {
  return {
    maxWidth: props.width,
    height: props.height,
    justifyCenter: props.text_align,
    alignItems: props.align_item
  }
})
</script>
