<template>
  <div class="flex flex-col py-[35px] px-[24px] border-solid border-b-2 border-[#D6DBE2]">
    <div
      class="flex flex-row justify-between items-center cursor-pointer"
      @click="
        () => {
          isCollapse = !isCollapse
        }
      "
    >
      <p class="text-black font-bold font-['Notokr'] text-xl">
        <span class="text-black font-bold font-['Notokr'] text-xl mr-[10px]">Q.</span>{{ question }}
      </p>
      <div class="action w-5 h-5">
        <div class="icon-arrow" :class="{ down: !isCollapse }"></div>
      </div>
    </div>
    <Transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-100 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <p class="mt-5 ml-5 font-normal font-['Notokr'] text-lg" v-if="isCollapse">
        {{ answer }}
      </p>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
interface FaqInfo {
  question: string
  answer: string
  isCollapse: boolean
}
const props = defineProps<{
  faqInfo: FaqInfo
}>()
let question = computed(() => {
  return props.faqInfo.category
})
let answer = computed(() => {
  return props.faqInfo.content
})
let isCollapse = ref(false)
</script>
