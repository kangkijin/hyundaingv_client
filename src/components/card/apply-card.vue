<template>
  <div
    class="flex flex-col justify-between item w-[420px] h-80 rounded-3xl px-8 py-[37px] bg-white shadow-custom_1 cursor-pointer hover:bg-[#edeff280]"
  >
    <div>
      <div class="tag_list flex flex-row gap-[6px] mb-[30px]">
        <template v-for="tag of tags">
          <div class="rounded-md m-h-[30px] w-fit bg-[#6EC5FF]" :class="'type_' + tag.type">
            <p
              class="text-white px-3 py-1 text-base font-semibold"
              :class="{ '!text-black': tag.type == 0 }"
            >
              {{ tag.conntent }}
            </p>
          </div>
        </template>
      </div>
      <div class="mb-3 text-2xl font-bold font-['Notokr']">{{ title }}</div>
      <div class="text-base text-[#898D9C]">{{ note }}</div>
    </div>
    <div>{{ startDate }} ~ {{ endDate }}</div>
  </div>
</template>

<script setup lang="ts">
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
  timeTo: Date,
  target: string,
  requireApply: string,
  benefit: string,
  ways_register: string,
  plan: string,
  choice_benefits: string
}
const props = defineProps<{
  cardData: MarketingSelectionModel
}>()
let title = computed(() => {
  return props.cardData.name
})
let note = computed(() => {
  return props.cardData.selectionName
})
let tags = computed(() => {
  return props.cardData.tags
})
let startDate = computed(() => {
  return props.cardData.receiveStartDate
})
let endDate = computed(() => {
  return props.cardData.receiveEndDate
})
</script>

<style lang="scss" scope>
.tag_list {
  .type {
    &_0 {
      background: white;
      border: solid black 1px;
    }
    &_1 {
      background: #6ec5ff;
    }
    &_2 {
      background: #a7adb6;
    }
    &_3 {
      background: #000000;
    }
  }
}
</style>
