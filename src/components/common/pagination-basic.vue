<template>
  <div class="flex justify-center gap-4 paging mt-14">
    <template v-for="p of allPage">
      <div
        class="w-8 h-8 text-center text-[18px] text-[#767676] leading-8 cursor-pointer"
        :class="{ 'font-bold text-[#222222]': currentPage == p + 1 }"
        @click="changePage(p + 1)"
      >
        {{ p + 1 }}
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let props = defineProps<{
  total: number
  current: number
}>()
let allPage = ref([...Array(4).keys()])
let currentPage = ref(1)
function changePage(data: number) {
  currentPage.value = data
}
</script>

<style></style>
