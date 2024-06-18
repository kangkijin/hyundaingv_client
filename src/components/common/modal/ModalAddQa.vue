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
          <p class="font-medium font-['Notokr'] text-xl w-48 required">제도 구분</p>
          <div v-if="isListRadioReady">
            <RadiobuttonBase
              v-for="item in listRadio2"
              :mode="mode"
              v-model="studentType"
              :value="item.cdId"
              :id="item.cdId"
              :name="item.cdId"
              :key="item.cdId"
              :label="item.cdNm"
              :checked="item.cdId == studentType"
            >
              Checkbox 1
            </RadiobuttonBase>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <p class="flex-[1_0_auto] w-48 font-medium font-['Notokr'] text-xl required">제목</p>
          <div class="w-full">
            <InputTextBase
              v-model="questionModel.category"
              :mode="mode"
              :className="'w-full'"
              placeholder="제목을 입력하세요"
              :isRequire="true"
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
              v-model="questionModel.content"
              :placeholder="'내용을 입력하세요'"
              :mode="mode"
            >
            </TextAreaBase>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <p class="w-48 font-medium font-['Notokr'] text-xl required">비밀번호</p>
          <div class="flex flex-col gap-2">
            <InputTextBase
              v-model="questionModel.password"
              :type="'password'"
              :mode="'password'"
              placeholder="비밀번호를 입력하세요"
              :isRequire="true"
            ></InputTextBase>
            <p>
              *Q&A는 익명 게시판으로, 본인이 작성한 글을 확인하기 위해 임시 비밀번호를 설정합니다.
              <br />
              본인이 문의한 글의 제목과 비밀번호를 꼭 기억해주세요.
            </p>
          </div>
        </div>
        <div class="mt-8 flex flex-row gap-4">
          <p class="w-48 font-medium font-['Notokr'] text-xl">첨부파일(선택)</p>
          <div>
            <InputFileBase
              :id="'id'"
              :name="'id'"
              :type="fileTypeDocx"
              :mode="modeCreate"
              v-model="file"
              ref="childRef"
              :orgName="'question'"
              :category="'question'"
              :sectionName="questionName"
              :multiple="true"
              :maxFile="2"
            ></InputFileBase>
            <p>* 첨부파일은 각각 2MB 이하, 1개 등록 가능합니다.</p>
          </div>
        </div>
      </div>
      <div class="action flex gap-4 items-center justify-center mt-6">
        <button
          :disabled="!isCheck"
          @click="openModalCreate"
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
        @modifyAction="saveData"
        @close-modal="closeModalModify"
        :title="'알림'"
        :message="'저장하시겠습니까?'"
      ></TModalModify>
    </template>
  </TModal>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { QuestionModel } from '../../../stores/questionAdvertise/questionAdvertise.type'
import {
  MODE_SHOW,
  FILE_TYPE_OFFICE,
  MODE_CREATE,
  SUCCSESS_STATUS
} from '../../../constants/screen.const'
import { questionAdvertiseStore } from '../../../stores/questionAdvertise'
import InputFileBase from '../input/InputFileBase.vue'
import { getListCodeMng } from '../../../stores/common/codeMng/codeMng.service'
import { CodeMngModel } from '../../../stores/common/codeMng/codeMng.type'

const emit = defineEmits()

const listRadio2: CodeMngModel[] = []
const store = questionAdvertiseStore()
const studentType = ref('EDU_SCHO_01')
const questionName = ref('QUESTION')
let questionModel = ref({} as QuestionModel)
const childRef = ref(null)
let mode = ref(MODE_SHOW)
let modeCreate = MODE_CREATE
let file = ref(null)
const fileTypeDocx = ref(FILE_TYPE_OFFICE)
let isCheck = false
const modalOpenModify = ref(false)
const modalIdModify = 'modalIdModify'
const isListRadioReady = ref(false)

onBeforeMount(async () => {
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
})

const callCheckData = async (qaId: any) => {
  if (childRef.value) {
    await childRef.value.upLoadFile(qaId)
  }
}
const submit = () => {
  emit('submit-data')
}

const saveData = async () => {
  questionModel.value.studentType = studentType.value
  await store.insertQues(questionModel.value)
  if (store.status) {
    callCheckData(store.status)
    submit()
  }
}
const checkValid = () => {
  isCheck =
    questionModel.value.category && questionModel.value.content && questionModel.value.password
}
const openModalCreate = () => {
  modalOpenModify.value = true
}
const closeModalModify = () => {
  modalOpenModify.value = false
}
watch(
  () => questionModel,
  () => {
    checkValid()
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
