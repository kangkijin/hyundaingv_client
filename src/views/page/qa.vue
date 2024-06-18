<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Apply'" :ch_menu="'Q&A'"></breadcrumb-top>
      <div class="w-[1320px] mx-auto">
        <div class="flex flex-col mt-[100px] pb-10">
          <div class="header flex flex-row items-center justify-between">
            <p class="text-black font-bold font-['Notokr'] text-[50px]">Q&A</p>
            <div class="w-[528px]">
              <input
                :id="'category'"
                :name="'category'"
                v-model="searchCategory"
                class="search-box selectcustom custome-border"
                placeholder="제목을 입력하세요"
                @keypress.enter="search()"
              />
            </div>
          </div>
          <div class="flex flex-row mt-[50px]" style="justify-content: flex-end">
            <button
              type="button"
              class="btn_md text-white p-2 w-28 items-center self-end bg-[#916CFF]"
              @click="openModalCreate()"
            >
              질문하기
            </button>
          </div>
        </div>
        <!-- table data -->
        <div class="search_box">
          <GridComponent
            :rowData="rowData"
            :columnDefs="columnDefs"
            :pagination="true"
            :paginationPageSize="paginationPageSize"
            :paginationPageSizeSelector="paginationPageSizeSelector"
            v-model="rowselected"
            @rowClick="onRowClicked"
            :customPagination="fnPagination"
          >
          </GridComponent>
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <modal-add-qa
      v-if="openModalAddQa"
      @closeModal="onClose"
      :modal-id="modalIdQa"
      :is-open="openModalAddQa"
      @submitData="onSubmit"
    />
    <modal-confirm-pwd
      v-if="openModalPwd"
      @closeModal="onClose"
      @submitModal="onSubmitPass"
      :modal-id="modalIdPwd"
      :is-open="openModalPwd"
      :dataInit="qaSelected"
      :emit="$emit"
    ></modal-confirm-pwd>
    <modal-detail-qa
      v-if="openModalDetail"
      @closeModal="onClose"
      :modal-id="modalIdDetail"
      :is-open="openModalDetail"
      :dataInit="qaSelected"
      @submitData="onSubmit"
    />
  </Teleport>
</template>
<script lang="ts">
import InputTextBase from '../../components/common/input/InputTextBase.vue'
import GridComponent from '../../components/common/grid/GridComponent.vue'
import { defineComponent, ref } from 'vue'
import {
  PAGINATION_PAGE_SIZE,
  SUCCSESS_STATUS,
  PAGINATION_PAGE_SIZE_SELECTOR,
  MODE_DETAIL,
  MODE_CREATE
} from '../../constants/screen.const'
import LinkGridComponent from '../../components/common/grid/LinkGridComponent.vue'
import Breadcrumb from '../../components/common/Breadcrumb.vue'
import { questionAdvertiseStore } from '../../stores/questionAdvertise'
import { list } from '../../stores/questionAdvertise/questionAdvertise.service'
import { QuestionModel, SearchModel } from '../../stores/questionAdvertise/questionAdvertise.type'
import { commonStore } from '../../stores/common'
import QAModel_ from '../../model/qa/QAModel_'
import IQaModel_ from '../../model/qa/QAModel_'
import { format } from 'date-fns'

export default defineComponent({
  components: {
    InputTextBase,
    GridComponent,
    Breadcrumb,
    LinkGridComponent
  },

  data() {
    return {
      rowselected: [],
      pageTitle: 'Q&A',
      breadcrumbItems: [
        { label: 'HOME', link: '/' },
        { label: '홍보 사이트', link: '#' },
        { label: 'Q&A', link: '/questionAdvertise' }
      ],
      store: questionAdvertiseStore(),
      cmmStore: commonStore(),
      searchParam: {} as SearchModel,
      searchCategory: ref(''),
      rowData: [] as Array<QuestionModel>,
      columnDefs: ref([
        { headerName: '번호', field: 'rowNum', flex: 1 },
        {
          headerName: '문의 접수일',
          field: 'lastModifiedDate',
          flex: 6
        },
        {
          headerName: '제도구분',
          cellRenderer: (params) => {
            const statusStudent = params.data.studentType
            if (statusStudent === 'EDU_SCHO_01') {
              return '연구장학생'
            } else if (statusStudent === 'EDU_SCHO_02') {
              return '계약학과'
            }
          },
          flex: 6
        },
        {
          headerName: '제목',
          field: 'category',
          flex: 6
        },
        {
          headerName: '답변 현황',
          cellRenderer: (params) => {
            const status = params.data.status
            if (status === 'STATUS_QA_00' || status === 'STATUS_QA_02') {
              return '답변 중'
            } else if (status === 'STATUS_QA_01') {
              return '답변 완료'
            }
          },
          flex: 6
        }
      ]),
      paginationPageSize: PAGINATION_PAGE_SIZE,
      paginationPageSizeSelector: PAGINATION_PAGE_SIZE_SELECTOR,
      modalIdQa: 'modal-add',
      modalIdPwd: 'modal-pwd',
      modalIdDetail: 'modal-detail',
      openModalAddQa: false,
      openModalPwd: false,
      openModalDetail: false,
      modedetail: MODE_DETAIL,
      modeCreate: MODE_CREATE,
      qaSelected: {} as QAModel_,
      filteredOptions: ref([])
    }
  },
  beforeMount() {},
  mounted() {
    this.getDataAll()
  },
  methods: {
    fnPagination() {},
    async getDataAll() {
      this.cmmStore.setLoading(true)
      await this.store.fetchQuestionModel(this.searchParam)
      if (this.store && this.store.status == SUCCSESS_STATUS) {
        this.rowData = this.store.questionInitModel
        this.rowData.forEach((item, index) => {
          item.rowNum = index + 1
          item.lastModifiedDate = format(new Date(item.lastModifiedDate), 'yyyy-MM-dd')
        })
      }
      this.cmmStore.setLoading(false)
    },
    search() {
      this.cmmStore.setLoading(true)
      this.searchParam.category = this.searchCategory
      list(this.searchParam).then((res) => {
        if (res.status == 200) {
          this.rowData = res.data
          this.rowData.forEach((item, index) => {
            item.rowNum = index + 1
            item.lastModifiedDate = format(new Date(item.lastModifiedDate), 'yyyy-MM-dd')
          })
        }
      })
      this.cmmStore.setLoading(false)
    },
    openModalCreate() {
      this.openModalAddQa = true
    },
    openModalPassword(data: any) {
      this.openModalPwd = true
      this.qaSelected = new QAModel_(data)
    },
    onSubmitPass(data: any) {
      this.openModalPwd = false
      this.openModalDetailOrEdit(data)
    },
    onSubmit() {
      this.getDataAll()
      this.openModalAddQa = false
      this.openModalPwd = false
      this.openModalDetail = false
      this.qaSelected = new QAModel_({} as IQaModel_)
    },
    onClose() {
      this.openModalAddQa = false
      this.openModalPwd = false
      this.openModalDetail = false
      this.qaSelected = new QAModel_({} as IQaModel_)
    },
    openModalDetailOrEdit(data: any) {
      this.openModalDetail = true
      this.qaSelected = new QAModel_(data)
    },
    onRowClicked(data: any) {
      this.openModalPassword(data)
    }
  }
})
</script>

<style lang="scss">
.full-width-input {
  width: 97%;
}

.selectcustom {
  background-image: url(../../assets/images/icon_search.svg);
  background-position: right;
}

.custome-border {
  border: 0px;
  width: 560px;
  border-bottom: 2px solid #ccc;
}

.header {
  .search-box {
    :deep(.selectcustom) {
      width: 100%;
    }
  }
}
.ag-cell-value,
.ag-cell-value * {
  text-align: center;
}
.ag-head,
.pagination_wrap .first,
.pagination_wrap .back,
.pagination_wrap .next,
.pagination_wrap .last {
  display: none !important;
}

.ag-header-cell {
  border-bottom: 0.5px #dddddd solid !important;
  border-top: 2px #000000 solid;
  border-left: none !important;
  border-right: none !important;
}
.ag-ltr .ag-cell {
  border-left: none !important;
  border-right: none !important;
}
.ag-header-cell,
.ag-header-cell * {
  color: #000000;
  font-size: 17px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
}
</style>
