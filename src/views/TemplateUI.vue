<template>
  <section id="content" class="content_wrapper grid_content" tabindex="0">
    <div class="box dp_block">
      <div class="box_section">
        <p class="box_title_sm">SELECT BOX</p>
        <div class="search_box col_3">
          <ul>
            <li>
              <p>Select box with checkbox</p>
              <SelectBoxBaseCheckBox v-model="selectSearch" :data="listSelectBox"></SelectBoxBaseCheckBox>
            </li>
            <li>
              <p>Select box with search</p>
              <SelectBoxBaseSearch v-model="selectSearch" :data="listSelectBox"></SelectBoxBaseSearch>
            </li>
            <li>
              <p>Select box</p>
              <SelectBoxBase :id="'selectbox'" :name="'selectbox'" v-model="selectBoxValue" :data="listSelectBox"
                :mode="modeSelectBox">
              </SelectBoxBase>
            </li>
          </ul>
        </div>
      </div>
      <div class="box_section">
        <p class="box_title_sm">INPUT</p>
        <div class="search_box col_3">
          <ul>
            <li>
              <p>Input</p>
              <InputTextBase v-model="inputValue" :isDisable="false" mode="show"></InputTextBase>
            </li>
            <li>
              <p>Input Disabled</p>
              <InputTextBase v-model="inputValue" :isDisable="true" mode="show"></InputTextBase>
            </li>
          </ul>
        </div>
      </div>
      <div class="box_section">
        <p class="box_title_sm">TEXTAREA</p>
        <div class="search_box col_3">
          <ul>
            <li>
              <p>textArea</p>
              <div style="position: relative">
                <TextAreaBase :id="'textArea'" :name="'textArea'" v-model="valueTextArea" :mode="'show'">
                </TextAreaBase>
              </div>
            </li>
            <li>
              <p>textArea disabled</p>
              <div style="position: relative">
                <TextAreaBase :id="'textArea'" :name="'textArea'" v-model="valueTextArea" :mode="'show'"
                  :isDisable="true">
                </TextAreaBase>
              </div>
            </li>
            <li>
              <p>textArea readonly</p>
              <div style="position: relative">
                <TextAreaBase :id="'textArea'" :name="'textArea'" v-model="valueTextArea" :mode="'readonly'"
                  :isDisable="false">
                </TextAreaBase>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="box_section">
        <p class="box_title_sm">DATEPICKER</p>
        <div class="search_box col_3">
          <ul>
            <li>
              <p>datepicker</p>
              <DatePickerComponent v-model="date"></DatePickerComponent>
            </li>
          </ul>
        </div>
      </div>
      <div class="box_section">
        <p class="box_title_sm">CHECKBOX GROUP</p>
        <div class="search_box col_3">
          <ul>
            <li>
              <p>checkbox</p>

              <CheckboxBase v-for="item in listCheckBox" :mode="'show'" :value="item.name" v-model="checkboxGroup"
                :id="item.id" :name="item.id" :key="item.id" :label="item.name">
              </CheckboxBase>
            </li>
            <li>
              <p>checkbox has selected value</p>
              <CheckboxBase v-for="item in listCheckBox2" :mode="'show'" :value="item.name" v-model="checkboxGroup2"
                :id="item.id" :name="item.id" :key="item.id" :label="item.name">
              </CheckboxBase>
            </li>
            <li>
              <p>checkbox disabled</p>
              <CheckboxBase v-for="item in listCheckBox2" :mode="'show'" :value="item.name" :isDisable="true"
                v-model="checkboxGroup2" :id="item.id" :name="item.id" :key="item.id" :label="item.name">
              </CheckboxBase>
            </li>
          </ul>
        </div>
      </div>
      <div class="box_section">
        <p class="box_title_sm">MODAL</p>
        <div class="search_box col_3">
          <ul>
            <li>
              <p>radio</p>
              <RadiobuttonBase v-for="item in listRadio1" :mode="'show'" :value="item.name" v-model="radiovalue1"
                :id="item.id" :name="item.id" :key="item.id" :checked="item.name == radiovalue1" :label="item.name">
                Checkbox 1
              </RadiobuttonBase>
            </li>
            <li>
              <p>radio disable</p>
              <RadiobuttonBase v-for="item in listRadio2" :mode="'show'" :value="item.name" v-model="radiovalue2"
                :id="item.id" :name="item.id" :key="item.id" :checked="item.name == radiovalue2" :label="item.name"
                :isDisable="item.name == radiovalue2">
                Checkbox 1
              </RadiobuttonBase>
            </li>
          </ul>
        </div>
      </div>
      <div class="box_section">
        <p class="box_title_sm">File Upload</p>
        <InputFileBase :id="'id1'" :name="'id1'" :type="fileTypeImage" :referKey="1" :mode="'create'" v-model="fileInfo"
          :multiple="true" :maxFile="2" ref="childRef" :orgName="'orgName'" :category="'category'"
          :sectionName="'sectionName'"></InputFileBase>
        <!-- <InputFileBase :id="'id1'" :name="'id1'" :type="fileTypeImage" :previewFlag="true" v-model="fileTest"
            :multiple="true" :maxFile="2" ref="childRef" :orgName="'orgName'" :category="'category'"
            :sectionName="'sectionName'"></InputFileBase>
        {{ fileTest }}
        <InputFileBase :id="'id2'" :name="'id2'"></InputFileBase> -->
      </div>
      <div class="box_section">
        <p class="box_title_sm">RADIO BUTTON</p>
        <div class="search_box col_3">
          <button @click="openModal">Show modal</button>
          <button @click="openModalModify">Show modal Modify</button>
          <TModalModify :is-open="modalOpenModify" :is-show-header="true" :is-show-footer="false"
            :modal-id="modalIdModify" :size="'xs'" @modifyAction="modifyAction" @close-modal="closeModalModify"
            :title="'Xác nhận có xoá hay không'" :message="`bạn có chắc chắn muốn xoá không`"></TModalModify>
          <TModalComfirm :is-open="modalOpenConfirm" :is-show-header="true" :is-show-footer="true" :modal-id="modalId"
            :title="'Xác nhận có xoá hay không'" :message="`Xoá thành công`" :size="'lg'"
            @close-modal="closeModalConfirm"></TModalComfirm>
        </div>
        <br />
        <TModal :is-open="modalOpen" :is-show-header="true" :is-show-footer="true" :modal-id="modalId"
          @close-modal="closeModal">
          <!-- Modal content goes here -->
          <template #title>
            <strong>popup_wrap + 클래스별로 크기 조절 : xl, lg, md, sm, xs</strong>
          </template>
          <template #default>
            <h4>기본정보</h4>
            <table class="tbl_row">
              <caption>
                기본정보
              </caption>
              <colgroup>
                <col style="width: 25%" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">평가구분</th>
                  <td>1차</td>
                </tr>
                <tr>
                  <th scope="row">시험구분</th>
                  <td class="td_input">
                    <div class="select_form wd_p100">
                      <select class="select_custom">
                        <option value="" selected>전체</option>
                        <option value="">select</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">취득점수/등급</th>
                  <td class="td_input">
                    <div class="select_form wd_p100">
                      <select class="select_custom">
                        <option value="" selected>전체</option>
                        <option value="">select</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">취득일정</th>
                  <td class="td_input">
                    <input type="text" class="datepick wd_p100" placeholder="" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">인증기관</th>
                  <td>
                    <p class="font_gray">시험구분 선택 시 자동입력됩니다.</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">증빙자료</th>
                  <td class="td_input">
                    <div class="attach_filebox">
                      <div class="top">
                        <button type="button">
                          <input type="file" id="file" name="file" hidden />
                          <label for="file" class="btn_white">첨부파일</label>
                        </button>
                        <p class="font_point">※첨부파일은 각각 2MB 이하, 3개 등록 가능합니다.</p>
                      </div>
                      <div class="bottom">
                        <a href="javascript:void(0);">첨부파일명.png</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">등록일</th>
                  <td>2023.12.31</td>
                </tr>
              </tbody>
            </table>
          </template>
          <template #footer>
            <!-- Footer content goes here -->
            <button type="button" class="btn_md btn_white popup_close" @click="confirmAction">
              닫기
            </button>
            <button type="button" class="btn_md btn_black" @click="cancelAction">확인</button>
          </template>
        </TModal>
        <TModalSignConfirmation :is-open="modalOpenSignConfirmation" @close-modal="closeModalSignConfirmation"
          @sendImageFromChilds="handleDataFromChild"></TModalSignConfirmation>
      </div>

      <div class="box_section">
        <p class="box_title_sm">PAGINATION CLIENT</p>
        <div class="search_box col_3">
          <GridComponent :rowData="rowData" :columnDefs="columnDefs" :pagination="true" v-model="rowselected"
            :checkSize="true" @rowClick="rowClick">
            <template #button>
              <button type="button" class="btn_md btn_white">엑셀 다운로드</button>
              <button type="button" class="btn_md btn_white">육상리포트다운로드</button>
              <button type="button" class="btn_md btn_white">선발지원서 다운로드</button>
              <button type="button" class="btn_md btn_white">삭제</button>
              <button type="button" class="btn_md btn_black">등록</button>
            </template>
          </GridComponent>
        </div>
      </div>
      <div class="box_section">
        <p class="box_title_sm">PAGINATION SERVICE</p>
        <div class="search_box col_3">
          <GridComponent :rowData="rowDataService" :columnDefs="columnDefs" :pagination="true"
            :paginationPageSize="paginationPageSize" :paginationPageSizeSelector="paginationPageSizeSelector"
            v-model="rowselectedService" :checkSize="true" :paginationClientFlag="false" :totalRecord="23"
            :customPagination="fnPagination">

            <template #button>
              <button type="button" class="btn_md btn_white">엑셀 다운로드</button>
              <button type="button" class="btn_md btn_white">육상리포트다운로드</button>
              <button type="button" class="btn_md btn_white">선발지원서 다운로드</button>
              <button type="button" class="btn_md btn_white">삭제</button>
              <button type="button" class="btn_md btn_black">등록</button>
            </template>
          </GridComponent>
        </div>
      </div>
    </div>


  </section>
</template>
<script lang="ts">
import {
  MarketingSelectionSearchModel,
  SearchParamInitDto,
  MarketingSelectionModel
} from '../stores/marketingSelection/marketingSelection.type'
import { PAGINATION_PAGE_SIZE, TYPE_GO_TO_PAGE, TYPE_EVENT } from '../constants/screen.const'
import { PAGINATION_PAGE_SIZE_SELECTOR, TYPE_FORMAT_DATE } from '../constants/screen.const'
import DatePickerComponent from '../components/common/input/DatePickerComponent.vue'
import { ref } from 'vue'
import { defineComponent } from 'vue'
import TemplateService from '../service/templateService'
import TemplateModel from '../model/TemplateModel'
import InputTextBase from '../components/common/input/InputTextBase.vue'
import CheckboxBase from '../components/common/input/CheckboxBase.vue'
import RadiobuttonBase from '../components/common/input/RadiobuttonBase.vue'
import SelectBoxBase from '../components/common/input/SelectBoxBase.vue'
import TextAreaBase from '../components/common/input/TextAreaBase.vue'
import GridComponent from '../components/common/grid/GridComponent.vue'
import InputFileBase from '@/components/common/input/InputFileBase.vue'
import { FILE_TYPE_IMAGE } from '@/constants/screen.const'
import { FILE_TYPE_OFFICE } from '@/constants/screen.const'
import { FILE_TYPE_VIDEO } from '@/constants/screen.const'
import InputGridComponent from '../components/common/grid/InputGridCoponent.vue'
import { fileMngStore } from '../stores/common/fileMng'
import { marketingSelectionStore } from '../stores/marketingSelection'
import { storeToRefs } from 'pinia'
import SelectBoxBaseSearch from '../components/common/input/SelectBoxBaseSearch.vue'
import SelectBoxBaseCheckBox from '../components/common/input/SelectBoxBaseCheckBox.vue'
import CodeMngModel from '../stores/common/codeMng/codeMng.type'
import TModal from '@/components/common/modal/TModal.vue'
import LinkGridComponent from '../components/common/grid/LinkGridComponent.vue'
import TModalComfirm from '@/components/common/modal/TModalComfirm.vue'
import TModalModify from '@/components/common/modal/TModalModify.vue'
import TModalSignConfirmation from '@/components/common/modal/TModalSignConfirmation.vue'

export default defineComponent({
  name: 'template',
  //
  data() {
    return {
      checkboxGroup2: ref(['name9', 'name08']),
      checkboxGroup: ref([]),
      radiovalue1: ref('name03'),
      radiovalue2: ref('name06'),
      listRadio1: [
        { id: '3', name: 'name03' },
        { id: '4', name: 'name04' }
      ],
      listRadio2: [
        { id: '5', name: 'name05' },
        { id: '6', name: 'name06' }
      ],
      listCheckBox2: [
        { id: '8', name: 'name08', checked: true },
        { id: '9', name: 'name9', checked: false },
        { id: '10', name: 'name10', checked: false }
      ],
      listCheckBox: [
        { id: '1', name: 'name01' },
        { id: '2', name: 'name02' }
      ],
      date: new Date(),
      inputValue: '',
      paginationPageSize: PAGINATION_PAGE_SIZE,
      paginationPageSizeSelector: PAGINATION_PAGE_SIZE_SELECTOR,
      rowselected: [],
      rowselectedService: [],
      selectSearch: '',
      listSelectBox: [
        { cdId: '1', cdNm: '비게', upCdId: '1' },
        { cdId: '2', cdNm: '비게시', upCdId: '1' },
        { cdId: '3', cdNm: '비게시1', upCdId: '1' },
        { cdId: '4', cdNm: '비게시2', upCdId: '1' },
        { cdId: '5', cdNm: '비게시비게시비게시2', upCdId: '1' }
      ] as Array<CodeMngModel>,
      rowData: [] as Array<MarketingSelectionModel>,
      rowDataService: [] as Array<MarketingSelectionModel>,
      gridOptions: {
        defaultColDef: {
          flex: 1,
          minWidth: 50,
          resizable: true
        },
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
        domLayout: 'autoHeight'
      },
      columnDefs: ref([
        {
          headerCheckboxSelection: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          width: 10
        },
        { headerName: '번호', field: 'rowNum' },

        { headerName: '장학제도 유형', field: 'selectionType' },
        {
          headerName: '접수기간',
          field: 'receiveEndDate',
          cellRenderer: 'InputGridComponent',
          cellRendererParams: {
            type: TYPE_FORMAT_DATE
          }
        },
        {
          headerName: '공고명',
          field: 'educationName',
          cellRenderer: 'LinkGridComponent',
          cellRendererParams: {
            // namePath: 'crudMarketingSelection',
            // sendParam: 'rowNum',
            // mode: 'detail'
            type: TYPE_EVENT,
            onCustomEvent: this.handleCustomClick
          }
        }
      ]),
      mode: 'show',
      modeSelectBox: 'show',
      selectBoxValue: '',
      valueTextArea: '',
      modalOpen: false,
      modalId: 'demo',
      modalIdModify: 'modify',
      modalIdConfirm: 'confirm',
      modalOpenModify: false,
      modalOpenConfirm: false,
      modalOpenSignConfirmation: false,
      fileTypeImage: FILE_TYPE_IMAGE,
      fileInfo: []
    }
  },
  components: {
    TModalModify,
    TModalComfirm,
    InputTextBase,
    CheckboxBase,
    RadiobuttonBase,
    SelectBoxBase,
    TextAreaBase,
    GridComponent,
    DatePickerComponent,
    InputFileBase,
    InputGridComponent,
    SelectBoxBaseSearch,
    SelectBoxBaseCheckBox,
    LinkGridComponent,
    TModalSignConfirmation
  },
  beforeMount() {
    for (let i = 0; i < 23; i++) {
      let data = {} as MarketingSelectionModel
      data.rowNum = i + 1
      data.selectionType = 'selectionType0' + i + 1
      data.receiveEndDate = new Date()
      data.educationName = 'name' + i
      this.rowData.push(data);
      this.rowDataService.push(data);
    }
  },
  methods: {
    closeModalConfirm() {
      // Thêm loading page nếu cần
      this.modalOpenConfirm = false
      // Thưc hiện chuyển hướng đến route mong muốn
    },
    modifyAction() {
      // Thêm loading page nếu cần
      // Thực hiện api nếu api trả 200 thì mới đóng modify và mở popup thành công
      this.modalOpenModify = false
      this.modalOpenConfirm = true
    },
    openModalModify() {
      this.modalOpenModify = true
    },
    closeModalModify() {
      this.modalOpenModify = false
    },
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    },
    confirmAction() {
      // Handle confirm action
      this.closeModal()
    },
    cancelAction() {
      // Handle cancel action
      this.closeModal()
    },
    click() {
      this.openModal()
    },
    rowClick(data) {
      console.log(data)
    },
    handleCustomClick() {
      // Handle the custom click event in the parent component
      console.log('Custom Cell Clicked in Parent Component!')
      this.openModal()
    },
    openModalSignConfirmation() {
      this.modalOpenSignConfirmation = true
    },
    closeModalSignConfirmation() {
      this.modalOpenSignConfirmation = false
    },
    handleDataFromChild(data: any) {
      // Handle file png from modal return
      console.log(data);
    },
    fnPagination(pageNumber: any, pagesSize: any) {
      let startIndex = pageNumber * pagesSize - pagesSize + 1;
      // this.modalOpenSignConfirmation = true
      const newRow = [];
      for (let i = startIndex; i < 23; i++) {
        let data = {} as MarketingSelectionModel
        data.rowNum = i
        data.selectionType = 'selectionType0' + i + 1
        data.receiveEndDate = new Date()
        data.educationName = 'name' + i
        newRow.push(data)
      }
      this.rowDataService = newRow;
    }
  }
})
</script>
