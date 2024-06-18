<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Apply'" :ch_menu="'선발공고'"></breadcrumb-top>
      <div class="w-[1320px] mx-auto">
        <div class="title mt-[100px]">
          <p class="text-black font-bold font-['Notokr'] text-[50px]">선발공고</p>
          <p class="text-[#585D72] font-medium font-['Notokr'] text-[18px] mt-[30px]">
            현대자동차그룹의 미래를 이끌어갈 R&D 인재를 모집합니다.
          </p>
        </div>
        <div class="filter grid grid-cols-[1fr_1fr_2fr] gap-4 justify-between mt-[70px]">
          <div class="group-form-filter">
            <SelectBoxBase
              :id="'selectbox'"
              :name="'selectbox'"
              :data="listSelectBox"
              :mode="'show'"
              :valueDefault="''"
              :nameDefault="'장학제도유형'"
              v-model="marketingSearch.selectionType"
              @change="changeData()"
            >
            </SelectBoxBase>
          </div>
          <!-- <div class="w-60"> -->
          <!-- <SelectBoxBase
          :id="'selectbox'"
          :name="'selectbox'"
          v-model="selectBoxValue2"
          :data="listSelectBox2"
          :mode="modeSelectBox2"
        >
        </SelectBoxBase> -->
          <!-- </div> -->
          <div class="group-form-filter">
            <SelectBoxBase
              :id="'selectbox'"
              :name="'selectbox'"
              :data="listSelectBox2"
              :mode="'show'"
              :valueDefault="''"
              :nameDefault="'자격'"
              v-model="marketingSearch.educationType"
              @focusout="changeData()"
            >
            </SelectBoxBase>
          </div>
          <div class="group-form-filter">
            <div class="search-box input-search">
              <InputTextBase
                :id="'id'"
                type="text"
                :name="'name'"
                :mode="'show'"
                :placeholder="'공고명 검색'"
                v-model="marketingSearch.keyword"
                @focusout="changeData()"
              />
              <button type="button" class="btn_icon icon_only icon-search">document</button>
            </div>
          </div>
        </div>
        <!-- <input type="checkbox" v-model="ischeckCurrent" @click="changeData()" /> -->
        <div class="flex justify-end mt-[70px]">
          <toggle-input v-model="ischeckCurrent" @click="changeDataToggle()">
            <template #label
              ><p class="text-black font-medium font-['Notokr'] text-lg">
                진행 중인 공고만 노출
              </p></template
            >
          </toggle-input>
        </div>
        <div class="list-card flex flex-wrap gap-[30px] mt-10">
          <template v-for="(notice, idx) of paginatedMarketingList" :key="idx">
            <apply-card :cardData="notice" @click="openDialog(notice)"></apply-card>
          </template>
        </div>
        <div>
          <div class="flex justify-center gap-4 paging mt-[60px] p-[30px]">
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
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <ModalDetailApply
      @close-modal="() => (openModal = false)"
      :is-open="openModal"
      :modal-id="modalId"
      :apply_info="noticeSelected"
    ></ModalDetailApply>
  </Teleport>
  <LoaddingComponent v-if="isLoad"></LoaddingComponent>
</template>

<script lang="ts">
import { CodeMngModel } from '../../stores/common/codeMng/codeMng.type'
import {
  getCodeMng,
  getMarketingSelectionList
} from '../../stores/marketingSelectionAd/marketingSelectionAd.service'
import { SUCCSESS_STATUS } from '../../constants/screen.const'
import type {
  MarketingSelectionSearch,
  MarketingSelectionModel,
  CodeEducation
} from '../../stores/marketingSelectionAd/marketingSelectionAd.type'
import { format } from 'date-fns'
import { getAllByIdStudent } from '@/stores/docRoom/docRoom.service'

export default {
  beforeMount() {
    this.getAll()
  },
  mounted() {
    getCodeMng(['EDU_SCHO', 'EDU_TYPE']).then((res) => {
      if (res && res.status == SUCCSESS_STATUS) {
        res.data.forEach((item) => {
          if (item.upCdId == 'EDU_SCHO' && item.cdId != 'EDU_SCHO_03') {
            this.listSelectBox.push(item)
          }
          if (item.upCdId == 'EDU_TYPE' && item.cdId != 'EDU_TYPE_04') {
            this.listSelectBox2.push(item)
          }
        })
      }
    })
    this.ischeckCurrent = false
  },
  data() {
    return {
      strQuery: '',
      selectBoxValue: '1',
      selectBoxValue2: '1',
      selectBoxValue3: '1',
      listSelectBox: [] as Array<CodeMngModel>,
      listSelectBox2: [] as Array<CodeMngModel>,
      listSelectBox3: [] as Array<CodeMngModel>,
      openModal: false,
      modalId: 'detailAplly',
      noticeSelected: null as any,
      marketingList: [] as Array<MarketingSelectionModel>,
      marketingSearch: {} as MarketingSelectionSearch,
      degrees: {} as CodeEducation,
      edu: [],
      eduList: [] as Array<CodeEducation>,
      isLoad: false,
      currentPage: 1,
      pageSize: 9,
      filteredOptions: [],
      ischeckCurrent: true
    }
  },
  methods: {
    openDialog(notice: any) {
      this.openModal = true
      this.noticeSelected = notice
    },
    changePage(data) {
      this.currentPage = data
    },
    getAll() {
      // this.isLoad = true;

      getMarketingSelectionList(this.marketingSearch).then((res) => {
        if (res && res.status == SUCCSESS_STATUS) {
          this.marketingList = res.data
          if (this.marketingList.length == 0) {
            this.isLoad = false
          }
          this.marketingList.forEach((item) => {
            const endDate = new Date(item.receiveEndDate)
            const currentDate = new Date()

            const timeDiff = endDate.getTime() - currentDate.getTime()
            const diffDays = timeDiff / (1000 * 3600 * 24)

            this.edu = item.educationName.split(', ')
            this.eduList = []
            if (diffDays > 0) {
              this.eduList.push({ type: 1, conntent: 'D-' + Math.ceil(diffDays) })
            }
            if (diffDays == 0) {
              this.eduList.push({ type: 3, conntent: '오늘마감' })
            }
            if (diffDays < 0) {
              this.eduList.push({ type: 2, conntent: '완료' })
            }

            this.edu.forEach((item1) => {
              this.eduList.push({ type: 0, conntent: item1 })
            })
            item.tags = this.eduList

            item.receiveStartDate = format(item.receiveStartDate, 'yyyy-MM-dd hh:MM')
            item.receiveEndDate = format(item.receiveEndDate, 'yyyy-MM-dd hh:MM')
            this.isLoad = false
          })
        }
      })
    },
    changeData() {
      this.getAll()
    },
    changeDataToggle() {
      this.marketingSearch.checkCurrent = !this.ischeckCurrent
      this.getAll()
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(
        this.filteredOptions.length > 0
          ? this.filteredOptions.length / this.pageSize
          : this.marketingList.length / this.pageSize
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
        : this.marketingList.slice(startIndex, endIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  .search-box {
    :deep(input) {
      width: 100%;
    }
  }
}
</style>
