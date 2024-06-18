<template>
  <div class="flex flex-col mt-10 max-w-[1920px]">
    <breadcrumb-top :p_menu="'Program'" :middle="'연구장학생'" :ch_menu="'주요혜택'"></breadcrumb-top>
    <div class="w-[1320px] mx-auto">
      <div class="title w-full mt-[100px]">
        <p>
          <span class="text-black font-bold font-Notokr text-5xl">주요혜택</span>
          <span class="text-black font-normal font-Notokr text-3xl"
            >&nbsp;&nbsp;/&nbsp;&nbsp; 계약학과</span
          >
        </p>
      </div>
      <div class="images flex flex-row w-full justify-between flex-wrap gap-y-8 mt-8">
        <m-image-card
          v-for="(item, key) in paginatedMarketingList"
          :key="key"
          :url="item.url"
          width="410px"
          height="260px"
          backgroundSize="cover"
        >
          <template v-slot:content>
            <p class="text-black font-medium font-Notokr text-2xl mt-6" @click="openDialog(item)">
              {{ item.title }}
            </p>
            <p class="text-[#585D72] font-normal font-Notokr text-lg mt-4">{{ item.content }}</p>
          </template>
        </m-image-card>
        <div></div>
      </div>
    </div>
  </div>
  <div class="flex justify-center gap-4 paging mt-14">
    <template v-for="p of totalPage">
      <div
        class="w-8 h-8 text-center text-[18px] text-[#767676] leading-8 cursor-pointer"
        :class="{ 'font-bold text-[#222222]': currentPage == p }"
        @click="changePage(p)"
      >
        {{ p }}
      </div>
    </template>
  </div>
  <Teleport to="body">
    <TModalVideo
      @close-modal="() => (openModal = false)"
      :is-open="openModal"
      :modal-id="modalId"
      :infoVideo="noticeSelected"
    ></TModalVideo>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getBenefitList } from '../../../stores/benefit/benefit.service'
import { BenefitModel, InfoVideo } from '../../../stores/benefit/benefit.type'

export default defineComponent({
  data() {
    return {
      benefitList: [] as Array<BenefitModel>,
      test: {} as BenefitModel,
      type: 'EDU_SCHO_02',
      modalId: 'video',
      noticeSelected: {} as InfoVideo,
      openModal: false,
      currentPage: 1,
      pageSize: 9,
      filteredOptions: []
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    getAll() {
      this.isLoad = true
      getBenefitList(this.type).then((res) => {
        this.benefitList = res.data
      })
    },
    openDialog(notice: BenefitModel) {
      this.openModal = true
      this.noticeSelected.id = notice.id
      this.noticeSelected.title = notice.title
      this.noticeSelected.desc = notice.subTitle
      this.noticeSelected.url = notice.videoUrl
      this.noticeSelected.content = notice.content
      this.noticeSelected.checkFile = 'benefit'
    },
    changePage(data) {
      this.currentPage = data
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(
        this.filteredOptions.length > 0
          ? this.filteredOptions.length / this.pageSize
          : this.benefitList.length / this.pageSize
      )
    },
    startIndex() {
      return (this.currentPage - 1) * this.pageSize
    },
    endIndex() {
      return this.currentPage * this.pageSize
    },
    paginatedMarketingList() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = this.currentPage * this.pageSize
      return this.filteredOptions.length > 0
        ? this.filteredOptions.slice(startIndex, endIndex)
        : this.benefitList.slice(startIndex, endIndex)
    }
  }
})
</script>

<style scoped>
/* Add your scoped styles here */
</style>
