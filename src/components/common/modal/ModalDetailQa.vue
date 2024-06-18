<template>
  <TModal
    :is-open="isOpen"
    :is-show-header="false"
    :is-show-footer="false"
    :size="'xl'"
    @close-modal="$emit('close-modal')"
    id="popup-add-qa"
  >
    <template #default>
      <div
        class="action flex justify-end btn_icon close_gray h-4 cursor-pointer"
        @click="() => $emit('close-modal')"
      ></div>
      <div class="pb-6 border-solid border-b-2">
        <p class="text-[#333333] font-bold font-['Notokr'] text-2xl">문의하기</p>
      </div>
      <div class="rows max-h-[80vh] overflow-y-auto pb-6 border-solid border-b-2 border-[#D6DBE2]">
        <div class="mt-8 flex flex-row gap-4">
          <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl">접수일</p>
          <div class="w-full">
            <InputTextBase
              v-model="firstQuestDate"
              :mode="'detail'"
              :isDisable="false"
              :className="'w-full'"
              placeholder="제목을 입력하세요"
            ></InputTextBase>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <p class="font-medium font-['Notokr'] text-xl w-48 required">제도 구분</p>
          <div v-if="isListRadioReady">
            <RadiobuttonBase
              v-for="item in listRadio2"
              v-model="studentType"
              :value="item.cdId"
              :id="item.cdId"
              :name="item.cdId"
              :key="item.cdId"
              :label="item.cdNm"
              :checked="item.cdId == studentType"
              :isDisable="isDisableRadio"
            >
              Checkbox 1
            </RadiobuttonBase>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl required">제목</p>
          <div class="w-full">
            <InputTextBase
              v-model="firstQuestionModel.category"
              :mode="modeFirst"
              :isDisable="false"
              :className="'w-full'"
              placeholder="제목을 입력하세요"
            ></InputTextBase>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl required">내용</p>
          <div class="w-full">
            <TextAreaBase
              :id="'textArea'"
              :className="'w-full'"
              :name="'textArea'"
              :placeholder="'내용을 입력하세요'"
              v-model="firstQuestionModel.content"
              :mode="modeTextArea"
            >
            </TextAreaBase>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <p class="w-48 font-medium font-['Notokr'] text-xl required">비밀번호</p>
          <div class="flex flex-col gap-2">
            <InputTextBase
              v-model="aleftPassword"
              :isDisable="false"
              :type="'password'"
              :mode="'details'"
            ></InputTextBase>
            <p style="color: red">비밀번호는 변경할 수 없습니다.</p>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <p class="w-48 font-medium font-['Notokr'] text-xl">첨부파일(선택)</p>
          <div>
            <InputFileBase
              :referKey="firstQuestionModel.id"
              :mode="modeFileFirst"
              :id="'id' + firstQuestionModel.id"
              :name="'id' + firstQuestionModel.id"
              :type="fileTypeOffice"
              :maxFile="1"
              ref="childRef"
              :orgName="'question'"
              :category="'question'"
              :sectionName="questionName"
              :key="firstQuestionModel.id"
            ></InputFileBase>
            <p>* 첨부파일은 각각 2MB 이하, 1개 등록 가능합니다.</p>
          </div>
        </div>
      </div>
      <div
        v-if="firstQuestionModel.answerDTO"
        class="rows max-h-[80vh] overflow-y-auto pb-6 border-solid border-b-2 border-[#D6DBE2]"
      >
        <div class="mt-8 flex flex-row gap-4">
          <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl">답변 내용</p>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <div class="w-full">
            <InputTextBase
              :id="'contentAnswerFirst'"
              :name="'contentAnswerFirst'"
              :mode="'detail'"
              v-if="firstQuestionModel.answerDTO"
              v-model="firstQuestionModel.answerDTO.content"
            ></InputTextBase>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <div class="w-full">
            <InputFileBase
              :referKey="firstQuestionModel.answerDTO.id"
              :mode="'detail'"
              :id="'id' + firstQuestionModel.answerDTO.id"
              :name="'id' + firstQuestionModel.answerDTO.id"
              :type="fileTypeOffice"
              :maxFile="1"
              :orgName="'answer'"
              :category="'answer'"
              :sectionName="sectionName"
            ></InputFileBase>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <div class="w-full">
            <InputTextBase
              :id="'regDateAnswerFirst'"
              :name="'regDateAnswerFirst'"
              :mode="'detail'"
              v-if="firstQuestionModel.answerDTO"
              v-model="firstAnsDate"
              :placeholder="''"
            ></InputTextBase>
          </div>
        </div>
      </div>
      <div v-if="rowData.length != 0">
        <div class="pb-6 border-solid border-b-2">
          <p class="text-[#333333] font-bold font-['Notokr'] text-2xl">추가문의</p>
        </div>
        <div v-for="item in rowData" :key="item.rowNum">
          <div
            class="rows max-h-[80vh] overflow-y-auto pb-6 border-solid border-b-2 border-[#D6DBE2]"
          >
            <div class="mt-8 flex flex-row gap-4">
              <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl">접수일</p>
              <div class="w-full">
                <InputTextBase
                  :id="'createdDateQues' + item.rowNum"
                  :name="'createdDateQues' + item.rowNum"
                  :mode="'detail'"
                  v-model="item.lastModifiedDate"
                ></InputTextBase>
              </div>
            </div>
            <div class="mt-8 flex flex-row gap-4">
              <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl">내용</p>
              <div class="w-full">
                <InputTextBase
                  :id="'contentQues' + item.rowNum"
                  :name="'contentQues' + item.rowNum"
                  :mode="'detail'"
                  v-model="item.content"
                  :placeholder="''"
                ></InputTextBase>
              </div>
            </div>
          </div>
          <div
            class="rows max-h-[80vh] overflow-y-auto pb-6 border-solid border-b-2 border-[#D6DBE2]"
          >
            <div class="mt-8 flex flex-row gap-4">
              <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl">답변 내용</p>
            </div>
            <div class="mt-8 flex flex-row gap-4">
              <div class="w-full">
                <InputTextBase
                  :id="'contentAnswer' + item.rowNum"
                  :name="'contentAnswer' + item.rowNum"
                  :mode="'detail'"
                  v-if="item.answerDTO"
                  v-model="item.answerDTO.content"
                  :placeholder="''"
                ></InputTextBase>
              </div>
            </div>
            <div class="mt-8 flex flex-row gap-4">
              <div class="w-full">
                <InputFileBase
                  :referKey="item.answerDTO.id"
                  :mode="'detail'"
                  :id="'id' + item.id"
                  :name="'id' + item.id"
                  :type="fileTypeOffice"
                  :maxFile="1"
                  :orgName="'answer'"
                  :category="'answer'"
                  :sectionName="sectionName"
                  :key="item.answerDTO.id"
                ></InputFileBase>
              </div>
            </div>
            <div class="mt-8 flex flex-row gap-4">
              <div class="w-full">
                <InputTextBase
                  :id="'createdDateAnswer' + item.rowNum"
                  :name="'createdDateAnswer' + item.rowNum"
                  :mode="'detail'"
                  v-if="item.answerDTO"
                  v-model="item.answerDTO.lastModifiedDate"
                ></InputTextBase>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="lastQuestionModel != null">
        <div
          class="rows max-h-[80vh] overflow-y-auto pb-6 border-solid border-b-2 border-[#D6DBE2]"
        >
          <div class="mt-8 flex flex-row gap-4">
            <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl">접수일</p>
            <div class="w-full">
              <InputTextBase
                :id="'createdDate'"
                :name="'createdDateAnswer'"
                :mode="'detail'"
                v-model="lastQuestDate"
                :placeholder="''"
              ></InputTextBase>
            </div>
          </div>
          <div class="mt-8 flex flex-row gap-4">
            <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl">내용</p>
            <div class="w-full">
              <InputTextBase
                :id="'contentAnswer'"
                :name="'contentAnswer'"
                :mode="modeLast"
                v-model="lastQuestionModel.content"
                :placeholder="''"
              ></InputTextBase>
            </div>
          </div>
        </div>
      </div>
      <div v-if="modeScreen == 'create'">
        <div class="mt-8 flex flex-row gap-4">
          <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl required">내용</p>
          <div class="w-full">
            <InputTextBase
              :id="'contentLastQuest'"
              :name="'contentLastQuest'"
              :mode="'show'"
              :isRequire="true"
              v-model="questionModel.content"
              :placeholder="'제목을 입력하세요'"
              className="full-width-input"
            ></InputTextBase>
          </div>
        </div>
      </div>
      <div v-if="modeScreen == 'detail'" class="action flex gap-4 items-center justify-center mt-6">
        <button
          v-if="firstQuestionModel.answerDTO == null"
          @click="goEditFirst()"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-[#916CFF]"
        >
          수정하기
        </button>
        <button
          v-if="lastQuestionModel && lastQuestionModel.answerDTO == null"
          @click="goEditLast()"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-[#916CFF]"
        >
          수정하기
        </button>

        <button
          v-if="firstQuestionModel.answerDTO != null && lastQuestionModel == null"
          @click="goCreateData()"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-[#916CFF]"
        >
          수정하기
        </button>
        <button
          @click="() => $emit('close-modal')"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-black"
        >
          목록
        </button>
      </div>
      <div v-if="modeScreen == 'edit'" class="action flex gap-4 items-center justify-center mt-6">
        <button
          @click="openModalEdit"
          :disabled="!isCheck"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-[#916CFF]"
        >
          수정
        </button>
        <button
          @click="openModalDelete"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-[#916CFF]"
        >
          삭제
        </button>
        <button
          @click="() => $emit('close-modal')"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-black"
        >
          목록
        </button>
      </div>
      <div v-if="modeScreen == 'create'" class="action flex gap-4 items-center justify-center mt-6">
        <button
          @click="openModalCreate"
          :disabled="!isCheckQuest"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-[#916CFF]"
        >
          저장
        </button>
        <button
          @click="() => $emit('close-modal')"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-black"
        >
          목록
        </button>
      </div>
      <TModalModify
        :is-open="modalOpenModify"
        :is-show-header="true"
        :is-show-footer="false"
        :modal-id="modalIdModify"
        :size="'xs'"
        @modifyAction="handleModifyAction"
        @close-modal="closeModalModify"
        :title="'알림'"
        :message="messageInfo"
      ></TModalModify>
    </template>
  </TModal>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import QAModel_ from '../../../model/qa/QAModel_'
import { QuestionModel } from '../../../stores/questionAdvertise/questionAdvertise.type'
import {
  MODE_DETAIL,
  MODE_SHOW,
  SUCCSESS_STATUS,
  MODE_READONLY,
  FILE_TYPE_OFFICE,
  MODE_EDIT,
  MODE_CREATE
} from '../../../constants/screen.const'
import { questionAdvertiseStore } from '../../../stores/questionAdvertise'
import { format } from 'date-fns'
import { getListCodeMng } from '../../../stores/common/codeMng/codeMng.service'
import { CodeMngModel } from '../../../stores/common/codeMng/codeMng.type'

const props = defineProps({
  dataInit: { type: QAModel_ }
})
const listRadio2: CodeMngModel[] = []
const store = questionAdvertiseStore()
const fileTypeOffice = ref(FILE_TYPE_OFFICE)
const questionName = ref('QUESTION')
const sectionName = ref('ANSWER')
const childRef = ref(null)
let studentType = ref()
let firstQuestionModel = ref({} as QuestionModel)
let lastQuestionModel = ref(null as unknown as QuestionModel)
let questionModel = ref({} as QuestionModel)
let aleftPassword = ref('비밀번호는 변경할 수 없습니다.')
let modeFirst = ref(MODE_DETAIL)
let modeLast = ref(MODE_DETAIL)
let modeTextArea = ref(MODE_READONLY)
let modeScreen = ref(MODE_DETAIL)
let id = ref<number | undefined>(undefined)
let data = ref([] as Array<QuestionModel>)
let rowData = ref([] as Array<QuestionModel>)
let isDisableRadio = ref(true)
let modeFileFirst = ref(MODE_DETAIL)
let firstQuestDate = ref('')
let firstAnsDate = ref('')
let lastQuestDate = ref('')
let questEdit = ref({} as QuestionModel)
let isCheck = false
let isCheckQuest = false
let messageInfo = ref('')
const modalIdModify = 'modalIdModify'
const modalOpenModify = ref(false)
let checkModal = ref(1)
const closeModalModify = () => {
  modalOpenModify.value = false
}
const openModalCreate = () => {
  modalOpenModify.value = true
  messageInfo.value = '저장하시겠습니까?'
}
const openModalDelete = () => {
  modalOpenModify.value = true
  messageInfo.value = '삭제하시겠습니까?'
  checkModal.value = 2
}
const openModalEdit = () => {
  modalOpenModify.value = true
  messageInfo.value = '수정하시겠습니까?'
  checkModal.value = 3
}
// computedx
const isCreate = computed(() => {
  id.value = props.dataInit?.id
  return props.dataInit?.id == 0
})
const isListRadioReady = ref(false)

const emit = defineEmits()

const submit = () => {
  emit('submit-data')
}

onMounted(async () => {
  if (!isCreate.value) {
    await store.getQuestionById(id.value)
    if (store.status && store.status == SUCCSESS_STATUS) {
      data.value = store.questionModelDetail
      const questionWithNullUpId = data.value.find((item) => item.upId === null)
      if (questionWithNullUpId) {
        firstQuestionModel.value = questionWithNullUpId
      }
      rowData.value = data.value.filter((item) => item.answerDTO !== null && item.upId !== null)
      rowData.value.forEach((item, index) => {
        item.lastModifiedDate = format(new Date(item.lastModifiedDate), 'yyyy-MM-dd')
        item.answerDTO.lastModifiedDate = format(
          new Date(item.answerDTO.lastModifiedDate),
          'yyyy-MM-dd'
        )
        item.rowNum = index + 1
      })
      const lastQuestion = data.value.find((item) => item.answerDTO === null && item.upId !== null)
      if (lastQuestion) {
        lastQuestionModel.value = lastQuestion
        lastQuestionModel.value.rowNum = rowData.value.length + 1
      }
      if (data.value.length === 1 && (rowData.value.length === 1 || rowData.value.length === 0)) {
        firstQuestionModel.value = data.value[0]
        rowData.value = []
        lastQuestionModel.value = null
      }

      studentType.value = firstQuestionModel.value.studentType

      firstQuestDate.value = format(
        new Date(firstQuestionModel.value.lastModifiedDate),
        'yyyy-MM-dd'
      )
      if (firstQuestionModel.value.answerDTO != null) {
        firstAnsDate.value = format(
          new Date(firstQuestionModel.value.answerDTO.lastModifiedDate),
          'yyyy-MM-dd'
        )
      }
      if (lastQuestionModel.value != null) {
        lastQuestDate.value = format(
          new Date(lastQuestionModel.value.lastModifiedDate),
          'yyyy-MM-dd'
        )
      }
    }

    const res = await getListCodeMng('EDU_SCHO')
    if (res.status === SUCCSESS_STATUS) {
      const codeMngList = res.data
      codeMngList.forEach((item: any) => {
        if (item.upCdId === 'EDU_SCHO' && item.cdId !== 'EDU_SCHO_03') {
          listRadio2.push(item)
        }
      })
      isListRadioReady.value = true
    }
  }
})

const callCheckData = async (qaId: any) => {
  if (childRef.value) {
    await childRef.value.upLoadFile(qaId)
  }
}

const goEditFirst = () => {
  modeFirst.value = MODE_SHOW
  modeTextArea.value = MODE_SHOW
  modeScreen.value = MODE_EDIT
  isDisableRadio.value = false
  modeFileFirst.value = MODE_EDIT
}
const goEditLast = () => {
  modeLast.value = MODE_SHOW
  modeScreen.value = MODE_EDIT
}
const goCreateData = () => {
  modeScreen.value = MODE_CREATE
}

const editData = async () => {
  firstQuestionModel.value.studentType = studentType.value
  if (lastQuestionModel.value != null) {
    questEdit.value = lastQuestionModel.value
  } else {
    questEdit.value = firstQuestionModel.value
  }
  await store.editQuest(questEdit.value)
  if (store.status && store.status == SUCCSESS_STATUS) {
    callCheckData(firstQuestionModel.value.id)
  }
  submit()
}
const deleteData = async () => {
  if (lastQuestionModel.value != null) {
    questEdit.value.id = lastQuestionModel.value.id
  } else {
    questEdit.value.id = firstQuestionModel.value.id
  }
  await store.deleteQuest(questEdit.value.id)
  submit()
}

const saveData = async () => {
  questionModel.value.upId = firstQuestionModel.value.id
  await store.insertQues(questionModel.value)
  if (store.status) {
    callCheckData(store.status)
  }
  submit()
}
const handleModifyAction = () => {
  if (checkModal.value === 1) {
    saveData()
  } else if (checkModal.value === 2) {
    deleteData()
  } else if (checkModal.value === 3) {
    editData()
  }
}
const checkValid = () => {
  isCheck =
    firstQuestionModel.value.category &&
    firstQuestionModel.value.content &&
    (lastQuestionModel.value ? lastQuestionModel.value.content : true)
}
const checkValidQuestAdd = () => {
  isCheckQuest = questionModel.value.content
}
watch(
  [firstQuestionModel, lastQuestionModel],
  () => {
    checkValid()
  },
  { deep: true }
)

watch(
  () => questionModel,
  () => {
    checkValidQuestAdd()
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
.popup-add-qa {
  :deep(.popup_content) {
    max-height: unset !important;
  }
  :deep(.attach_filebox) {
    display: flex;
  }
}
</style>
