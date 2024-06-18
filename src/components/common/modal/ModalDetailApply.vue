<template>
  <TModal
    :is-open="isOpen"
    :is-show-header="false"
    :is-show-footer="false"
    :size="'lg'"
    @close-modal="$emit('close-modal')"
    class="popup-apply"
  >
    <template #default>
      <div
        class="action flex justify-end btn_icon close_gray h-4 cursor-pointer"
        @click="() => $emit('close-modal')"
      ></div>
      <div class="pb-6 border-solid border-b-2">
        <p class="text-[#333333] font-bold font-['Notokr'] text-2xl">
          {{ title }}
        </p>
        <p class="font_gray font-medium font-['Notokr'] text-base mt-2">{{ note }}</p>
      </div>
      <p class="mt-10 text-black font-bold text-xl font-['Notokr'] required">필수 확인 정보</p>
      <div class="rows max-h-[560px] overflow-y-auto">
        <div class="mt-8 flex flex-col gap-4">
          <p class="font-medium font-['Notokr'] text-xl">선발대상</p>
          <p class="text-[18px] font-['Notokr']">{{ target }}</p>
        </div>
        <div class="mt-8 flex flex-col gap-4">
          <p class="font-medium font-['Notokr'] text-xl">접수기간</p>
          <p class="text-[18px] font-['Notokr']">{{ timeFrom }} ~ {{ timeTo }}</p>
        </div>
        <div class="mt-8 flex flex-col gap-4">
          <p class="font-medium font-['Notokr'] text-xl">전형 계획</p>
          <p class="text-[18px] font-['Notokr']">{{ plan }}</p>
        </div>
      </div>
      <div class="btn-apply h-24 bg-no-repeat bg-center cursor-pointer" @click="openLink"></div>
    </template>
  </TModal>
</template>

<script lang="ts" setup>
import { MarketingSelectionModel } from '@/stores/marketingSelectionAd/marketingSelectionAd.type';

interface ApplyInfo {
  tags: [
    {
      conntent: any
      type: any
    }
  ]
  title: string
  note: string
  timeFrom: Date
  timeTo: Date
  target: string
  requireApply: string
  benefit: string
  ways_register: string
  plan: string
  choice_benefits: string
}

const props = defineProps<{
  apply_info: MarketingSelectionModel
  isOpen: Boolean
  modalId: String
}>()

let title = computed(() => {
  return props?.apply_info?.name || ''
})
let note = computed(() => {
  return props?.apply_info?.selectionName || ''
})
let target = computed(() => {
  return props?.apply_info?.educationName || ''
})
let timeFrom = computed(() => {
  return props?.apply_info?.receiveStartDate || ''
})
let timeTo = computed(() => {
  return props?.apply_info?.receiveEndDate || ''
})
let plan = computed(() => {
  return props?.apply_info?.content || ''
})
let applyUrl = computed(() => {
  return props?.apply_info?.applyUrl || ''
})

function openLink(){
  window.open(props?.apply_info?.applyUrl, '_blank');
}
</script>

<style lang="scss" scoped>
.popup-apply {
  :deep(.popup_content) {
    max-height: unset !important;
  }
  .btn-apply {
    background-size: 100% 100%;
    background-image: url('../../../assets/images/apply_now.svg');
  }
}
</style>
