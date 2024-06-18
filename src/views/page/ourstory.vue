<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <div
        class="breadcrumb flex flex-row items-center justify-end gap-5 w-[1320px] mx-auto mt-[40px]"
      >
        <div class="btn_icon home"></div>
        <div class="dot bg-[#898D9C] rounded-full w-[6px] h-[6px]"></div>
        <p>People</p>
        <div class="dot bg-[#898D9C] rounded-full w-[6px] h-[6px]"></div>
        <p class="font-bold">Our Story</p>
      </div>
      <div class="title w-[1320px] mt-[100px]">
        <p class="text-black font-bold font-['Notokr'] text-[50px]">Our Story</p>
        <p class="text-[#585D72] font-medium font-['Notokr'] text-[18px] mt-[30px]">
          연구장학생 및 계약학과 출신 현업 연구원들의 스토리를 들려 드릴께요.
        </p>
      </div>
      <div class="tabs flex gap-8 mt-[100px] h-[46px]">
        <template v-for="(tab, idx) of listCompany">
          <div
            class="font-medium font-['Notokr'] text-[18px] cursor-pointer"
            :class="{ tabActive: tabActive == idx }"
            @click="changeTab(idx, tab)"
          >
            {{ tab }}
          </div>
        </template>
      </div>
      <div class="flex justify-between mt-[70px]">
        <div class="total flex font-bold font-['Notokr'] text-[18px]">
          전체 <span class="text-[#A384FF] font-bold font-['Notokr']">&nbsp;{{ totalRecord }}</span
          >건
        </div>
        <div class="filter flex gap-4">
          <div class="w-60">
            <div class="group-form-filter">
              <SelectBoxBase
                :id="'selectbox'"
                :name="'selectbox'"
                v-model="selectBoxValue"
                :data="listSelectBox"
                :mode="modeSelectBox"
                @change="changeData()"
              >
              </SelectBoxBase>
            </div>
          </div>
          <div class="group-form-filter">
            <div class="search-box input-search">
              <InputTextBase
                :id="'id'"
                type="text"
                :name="'name'"
                :mode="'show'"
                :placeholder="'검색어를 입력하세요'"
                v-model="searchValue"
                className="selectcustom"
                @focusout="changeData()"
              />
            </div>
          </div>
          <div class="w-60 group-form-filter">
            <SelectBoxBase
              :id="'selectbox'"
              :name="'selectbox'"
              v-model="selectBoxValue"
              :data="listSelectBox"
              :mode="modeSelectBox"
              @change="changeData()"
            >
            </SelectBoxBase>
          </div>
          <div class=" group-form-filter">
            <div class="search-box input-search">
              <InputTextBase
                :id="'id'"
                type="text"
                :name="'name'"
                :mode="'show'"
                :placeholder="'검색어를 입력하세요'"
                v-model="searchValue"
                className="selectcustom"
                @focusout="changeData()"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="image-list flex flex-wrap gap-x-[40px] gap-y-[120px] mt-[70px]">
        <template v-for="info in paginatedOurStoryModel">
          <people-card :cardData="info" @click="openModalDetail(info)"></people-card>
        </template>
      </div>
      <div class="flex justify-center gap-4 paging mt-[50px] py-[30px]">
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
      <LoaddingComponent v-if="isLoad"></LoaddingComponent>
    </div>
  </div>
  <TModalVideo
    v-if="isModalVisible"
    @close-modal="closeModalDetail"
    :is-open="openModal"
    :modal-id="modalId"
    :info-video="personSelect"
  ></TModalVideo>
</template>

<script lang="ts">
import { ourStoryStore } from '../../stores/page/ourstory'
import { SearchOurStoryModel } from '../../stores/page/ourstory/ourstory.type'
import { SUCCSESS_STATUS } from '../../constants/screen.const'

export default defineComponent({
  setup: () => {
    const store = ourStoryStore()
    return { store }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 12,
      tabActive: 0,
      totalRecord: '',
      selectBoxValue: '1',
      modeSelectBox: 'show',
      listSelectBox: [
        { cdId: '1', cdNm: '전체', upCdId: '1' },
        { cdId: '2', cdNm: '성명 ', upCdId: '2' },
        { cdId: '3', cdNm: '회사', upCdId: '3' },
        { cdId: '4', cdNm: '직책', upCdId: '4' }
      ],
      openModal: false,
      modalId: 'video',
      personSelect: null,
      ourStoryModel: [] as Array<SearchOurStoryModel>,
      dataSearchOurStoryModel: {
        typeSearch: 'ALL',
        nameSearch: ''
      },
      dataOurStory: [],
      isLoad: false,
      searchValue: '',
      filteredOptions: [],
      listCompany: [],
      isModalVisible: false
    }
  },
  beforeMount() {
    this.getAll()
  },
  computed: {
    startIndex() {
      return (this.currentPage - 1) * this.pageSize
    },
    endIndex() {
      return this.currentPage * this.pageSize
    },
    paginatedOurStoryModel() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = this.currentPage * this.pageSize
      return this.filteredOptions.length > 0
        ? this.filteredOptions.slice(startIndex, endIndex)
        : this.ourStoryModel.slice(startIndex, endIndex)
    },
    totalPage() {
      return Math.ceil(
        this.filteredOptions.length > 0
          ? this.filteredOptions.length / this.pageSize
          : this.ourStoryModel.length / this.pageSize
      )
    }
  },
  methods: {
    changeTab(idx, data) {
      this.tabActive = idx
      let value = this.searchValue.toLowerCase()
      this.filteredOptions = this.ourStoryModel.filter((option) => {
        if (data == option.desc) {
          return option.desc.toLowerCase().includes(value)
        }
      })
    },
    changePage(data) {
      this.currentPage = data
    },
    async openModalDetail(data) {
      // after  integration api  => set correct data to object
      await this.store.getByIdStory(data.id)
      if (this.store && this.store.status == SUCCSESS_STATUS) {
        let obj = {
          title: this.store.ourStoryModel.name,
          desc: this.store.ourStoryModel.departmentName,
          content: this.store.ourStoryModel.content,
          url: this.store.ourStoryModel.videoUrl
        }
        this.personSelect = obj
        this.openModal = true
        this.isModalVisible = true
      }
    },
    closeModalDetail() {
      this.openModal = false
      this.isModalVisible = false
    },
    async getAll() {
      this.isLoad = true
      await this.store.searchOurStory(this.dataSearchOurStoryModel)
      if (this.store && this.store.status == SUCCSESS_STATUS) {
        this.dataOurStory = this.store.ourStoryInitModel
        const uniqueDepartmentNames = new Set()
        this.listCompany.push('전체')
        this.dataOurStory.forEach((item) => {
          const ourStory = {
            id: item.id,
            title: item.name,
            title_2: item.title,
            imgUrl: item.urlFile,
            desc: item.departmentName,
            content: item.content
          }
          this.ourStoryModel.push(ourStory)
          if (!uniqueDepartmentNames.has(item.departmentName)) {
            const company = item.departmentName
            this.listCompany.push(company)
            uniqueDepartmentNames.add(item.departmentName)
          }
        })
        this.totalRecord = this.ourStoryModel.length
        this.isLoad = false
      }
    },
    changeData() {
      let latinValue = this.searchValue.toLowerCase()
      let hangeulValue = this.searchValue

      this.filteredOptions = this.ourStoryModel.filter((option) => {
        if (this.selectBoxValue == '1') {
          return this.ourStoryModel
        } else if (this.selectBoxValue == '2') {
          return (
            option.title.toLowerCase().includes(latinValue) || option.title.includes(hangeulValue)
          )
        } else if (this.selectBoxValue == '3') {
          return (
            option.desc.toLowerCase().includes(latinValue) || option.desc.includes(hangeulValue)
          )
        } else {
          return (
            option.title_2.toLowerCase().includes(latinValue) ||
            option.title_2.includes(hangeulValue)
          )
        }
      })
    }
  }
})
</script>

<style lang="scss">
.tabs {
  .tabActive {
    border-bottom: solid #a384ff 3px;
    color: #916cff;
  }
}
.selectcustom {
  background-image: url(../../assets/images/icon_search.svg);
  background-position: right;
}
</style>
