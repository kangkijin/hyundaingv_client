<template>
  <TModal
    :is-open="isOpen"
    :is-show-header="false"
    :is-show-footer="false"
    :size="'xs'"
    @close-modal="$emit('close-modal')"
    id="popup-confirm-pw"
  >
    <template #default>
      <div
        class="action flex justify-end btn_icon close_gray h-4 cursor-pointer"
        @click="() => $emit('close-modal')"
      ></div>
      <div class="pb-6 border-solid border-b-2">
        <p class="text-[#333333] font-bold font-['Notokr'] text-2xl">비밀번호 확인</p>
      </div>
      <div class="rows max-h-[80vh] overflow-y-auto">
        <p class="flex-[1_0_auto] mt-8 font-medium font-['Notokr'] text-[18px]">
          문의사항 등록시 설정한 비밀번호를 확인해주세요.
        </p>
        <div class="mt-8 flex flex-row gap-4">
          <div class="flex flex-row gap-4 w-full">
            <InputTextBase
              v-model="password"
              :isDisable="false"
              :type="'password'"
              :mode="'password'"
              placeholder="비밀번호를 입력하세요"
              :className="'w-full'"
            ></InputTextBase>
            <button
              type="button"
              class="w-24 h-10 text-lg cursor-pointer text-black bg-white !border-solid !border-slate-400 !border-2"
              @click="verify"
            >
              확인
            </button>
          </div>
        </div>
        <p
          v-if="hasErr"
          class="flex-[1_0_auto] mt-8 font-normal font-['Notokr'] text-[18px] text-[#FC526E]"
        >
          *비밀번호가 일치하지 않습니다. 다시 확인해주세요..
        </p>
      </div>
      <div class="action flex gap-4 items-center justify-center mt-6">
        <button
          @click="() => $emit('close-modal')"
          type="button"
          class="w-24 h-14 text-lg cursor-pointer text-white bg-black"
        >
          목록
        </button>
      </div>
    </template>
  </TModal>
</template>

<script lang="ts" setup>
import QAModel_ from '../../../model/qa/QAModel_'

const props = defineProps({
  dataInit: { type: QAModel_ }
})
const emit = defineEmits()

const passwordConfirm = ref(props.dataInit?.password)
let password = ref('')
let hasErr = ref(false)

const submitModal = () => {
  emit('submit-modal', props.dataInit)
}

function verify() {
  if (password.value !== passwordConfirm.value) {
    hasErr.value = true
  } else if (password.value === passwordConfirm.value) {
    submitModal()
  }
}
</script>

<style lang="scss" scoped>
.popup-confirm-pw {
}
</style>
