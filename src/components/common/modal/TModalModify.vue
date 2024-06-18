<template>
  <TModal
    :is-open="isOpen"
    :is-show-header="isShowHeader"
    :is-show-footer="isShowFooter"
    :modal-id="modalId"
    :size="size"
    @close-modal="$emit('close-modal')"
  >
    <template #title>
      <strong>{{ title }}</strong>
    </template>
    <template #default>
      <h4 class="text-center">{{ message }}</h4>
      <div class="btn_area">
        <button type="button" class="btn_md btn_white popup_close" @click="$emit('close-modal')">
          닫기
        </button>
        <button type="button" class="btn_md btn_black" @click="modifyAction">확인</button>
      </div>
    </template>
  </TModal>
</template>

<script lang="ts">
import TModal from '@/components/common/modal/TModal.vue'

export default {
  components: { TModal },
  props: {
    title: String,
    message: String,
    isOpen: Boolean,
    size: String,
    isShowHeader: {
      type: Boolean,
      default: false
    },
    isShowFooter: {
      type: Boolean,
      default: false
    },
    modalId: String
  },
  methods: {
    click() {
      this.openModal()
    },
    modifyAction() {
      this.$emit('modifyAction')
    }
  }
}
</script>

<style lang="scss">
.popup_wrap .btn_area {
  border-top: none;
}
</style>
