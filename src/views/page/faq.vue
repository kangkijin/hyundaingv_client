<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <div class="flex flex-col">
        <breadcrumb-top :p_menu="'Apply'" :ch_menu="'FAQ'"></breadcrumb-top>
        <div
          class="header flex flex-row items-center justify-between mt-[100px] pb-[70px] border-solid border-b-2"
        >
          <p class="text-black font-bold font-['Notokr'] text-[50px]">FAQ</p>
          <div class="min-[1024px]:w-[528px] min-[767px]:w-[400px]">
            <input
              :id="'selectbox'"
              :name="'selectbox'"
              v-model="categorySearch"
              class="search-box selectcustom custome-border"
              placeholder="검색어를 입력하세요"
              @keypress.enter="search()"
            />
          </div>
        </div>
        <div class="list">
          <template v-for="(item, idx) of faqAdvertiseModel" :key="idx">
            <collapse-cardFaq :faqInfo="item" @click="show(idx)"></collapse-cardFaq>
          </template>
        </div>
        <!-- <div v-if="checkNotRlt == false">
                      <p style="position: absolute;  top: 50%;  width: 100%;  text-align: center;  font-size: 15px;">결과를 찾을 수 없습니다.</p>
                  </div>                     -->
      </div>

      <div
        v-if="pageSize != 0"
        class="flex justify-center gap-4 paging mt-[50px] pagination_wrap py-[30px]"
      >
        <!-- <a href="javascript:void(0);" class="func first" @click="firstPage()">First page</a>
        <a href="javascript:void(0);" class="func back" @click="backPage()">back page</a> -->
        <template v-for="p of pageArr">
          <div
            class="w-8 h-8 text-center text-[18px] text-[#767676] leading-8 cursor-pointer"
            :class="{ 'font-bold text-[#222222]': currPage == p }"
            @click="changePage(p)"
          >
            {{ p + 1 }}
          </div>
        </template>
        <!-- <a href="javascript:void(0);" class="func next" @click="nextPage()">Next page</a>
        <a href="javascript:void(0);" class="func last" @click="endPage()">Last page</a> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FaqAdvertiseModel from '../../stores/faqAdvertise/faqAdvertise.type'
import FaqAdvertiseModelSearch from '../../stores/faqAdvertise/faqAdvertise.type'
import {
  getFaqStdSearchList,
  getFaqStdList,
  updateViews
} from '../../stores/faqAdvertise/faqAdvertise.service'
import { commonStore } from '../../stores/common'

export default defineComponent({
  components: {},
  setup: () => {
    const cmmStore = commonStore()
    return { cmmStore }
  },
  data() {
    return {
      rowselected: [],
      faqAdvertiseModel: {} as FaqAdvertiseModel,
      faqStdModelSearch: {} as FaqAdvertiseModelSearch,
      checkEmptyAf: true,
      checkShow: 0,
      categorySearch: '',
      checkNotRlt: true,
      currPage: 0,
      pageSize: 0,
      pageSizeCustome: 0,
      pageArr: [],
      pageActive: '',
      sumPageSize: 0,
      pageArrEnd: []
    }
  },
  beforeMount() {
    this.getDataAll()
    this.getItemPage()
  },
  methods: {
    getDataAll() {
      this.cmmStore.setLoading(true)
      getFaqStdSearchList(this.faqAdvertiseModel).then((res) => {
        if (res.status == 200) {
          if (res.data.length == 0) {
            this.checkNotRlt = false
          } else {
            this.checkNotRlt = true
          }
          this.faqAdvertiseModel = res.data
          this.faqAdvertiseModel.forEach((element) => {
            element.showFlag = false
          })
        }
      })
      this.cmmStore.setLoading(false)
    },
    search() {
      this.cmmStore.setLoading(true)
      this.faqStdModelSearch.category = this.categorySearch
      this.faqStdModelSearch.currPage = 0
      this.faqAdvertiseModel = this.faqStdModelSearch
      getFaqStdSearchList(this.faqAdvertiseModel).then((res) => {
        if (res.status == 200) {
          if (res.data.length == 0) {
            this.checkNotRlt = false
          } else {
            this.checkNotRlt = true
          }
          this.faqAdvertiseModel = res.data
          this.faqAdvertiseModel.forEach((element) => {
            element.showFlag = false
          })
        }
      })
      this.currPage = 0
      this.pageArr = []
      this.getItemPage()
      this.cmmStore.setLoading(false)
    },
    show(index) {
      this.faqAdvertiseModel[index].showFlag = !this.faqAdvertiseModel[index].showFlag
      if (this.faqAdvertiseModel[index].showFlag == true) {
        updateViews(this.faqAdvertiseModel[index])
      }
    },
    getItemPage() {
      getFaqStdList(this.faqAdvertiseModel).then((res) => {
        if (res.status == 200) {
          let lengthPage = res.data.length
          this.pageSize = Math.ceil(lengthPage / 10)
          if (Math.ceil(lengthPage / 10) > 5) {
            this.pageSizeCustome = 5
          } else {
            this.pageSizeCustome = Math.ceil(lengthPage / 10)
          }
          this.sumPageSize = Math.ceil(lengthPage / 10)
          for (var i = 0; i < this.pageSizeCustome; i++) {
            this.pageArr.push(i)
          }
        }
      })
    },
    changePage(indexPage) {
      this.cmmStore.setLoading(true)
      this.faqStdModelSearch.category = this.categorySearch
      this.faqStdModelSearch.currPage = indexPage
      this.currPage = indexPage
      this.faqAdvertiseModel = this.faqStdModelSearch
      getFaqStdSearchList(this.faqAdvertiseModel).then((res) => {
        if (res.status == 200) {
          if (res.data.length == 0) {
            this.checkNotRlt = false
          } else {
            this.checkNotRlt = true
          }
          this.faqAdvertiseModel = res.data
          this.faqAdvertiseModel.forEach((element) => {
            element.showFlag = false
          })
        }
      })
      this.cmmStore.setLoading(false)
    },
    firstPage() {
      if (this.currPage > 0) {
        this.changePage(0)
        this.pageArr = []
        for (var i = 0; i < this.pageSizeCustome; i++) {
          this.pageArr.push(i)
        }
        this.pageArrEnd = []
      }
    },
    endPage() {
      if (this.currPage < this.sumPageSize - 1 && this.pageArrEnd == 0) {
        this.changePage(this.sumPageSize - 1)
        for (var i = this.sumPageSize - this.pageSizeCustome; i < this.sumPageSize; i++) {
          this.pageArrEnd.push(i)
          this.pageArr = this.pageArrEnd
        }
      }
    },
    backPage() {
      if (this.currPage > 0 && this.pageArr[0] >= 1) {
        this.pageArr = this.pageArr.map((number) => number - 1)
      }
      if (this.currPage > 0) {
        this.pageArrEnd = []
        this.changePage(this.currPage - 1)
      }
    },
    nextPage() {
      this.pageArrEnd = []
      if (this.pageArr[this.pageArr.length - 1] < this.sumPageSize - 1) {
        this.changePage(this.currPage + 1)
        this.pageArr = this.pageArr.map((number) => number + 1)
      } else if (this.currPage < this.sumPageSize - 1) {
        this.changePage(this.currPage + 1)
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.full-width-input {
  width: 97%;
}

.selectcustom {
  background-image: url(../../assets/images/icon_search.svg);
  background-position: right;
}

.custome-border {
  border: 0px;
  width: 100%;
  border-bottom: 2px solid #ccc;
}

.header {
  .search-box {
    :deep(.selectcustom) {
      width: 100%;
    }
  }
}
</style>
