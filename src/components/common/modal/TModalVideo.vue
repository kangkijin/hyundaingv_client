<template>
  <TModal
    :is-open="isOpen"
    :is-show-header="false"
    :is-show-footer="false"
    :size="'lg'"
    @close-modal="$emit('close-modal')"
    class="popup-video"
  >
    <template #default>
      <div class="action flex justify-end btn_icon close_gray h-12 cursor-pointer" @click="()=> $emit('close-modal')">

      </div>
      <div class="flex justify-center" v-if="infoVideo && infoVideo.url">
        <video class="w-[960px] rounded-lg" controls :src="infoVideo.url"></video>
      </div>
      <p
        v-if="infoVideo && infoVideo.title"
        class="text-[#333333] font-bold font-['Notokr'] text-2xl mt-10"
      >
        {{ infoVideo.title }} {{ infoVideo.title_2 }}
      </p>
      <p class="font_gray font-medium text-base font-['Notokr'] mt-4" v-if="infoVideo && infoVideo.desc">{{ infoVideo.desc }}</p>
      <p class="text-base mt-4 font-['Notokr']" v-if="infoVideo && infoVideo.content">{{ infoVideo.content }}</p>
      
      <InputFileBase v-if="infoVideo.id && infoVideo.checkFile == 'benefit'" :referKey="infoVideo.id" :mode="'show'" :id="'id1'" :name="'id1'" :type="'office'" :maxFile="1"
        ref="fileAttachmentRef" :orgName="'attachments'" :category="'benefit'" :sectionName="'BENEFIT'"></InputFileBase>
    </template>
  </TModal>
</template>

<script lang="ts">
interface InfoVideo {
  id: number
  title: string
  title2: string
  content: string
  desc: string
  url: string
  checkFile: string
}
export default defineComponent({
  props: {
    isOpen: Boolean,
    modalId: String,
    infoVideo: {
      type: Object as PropType<InfoVideo>,
      required: true
    }
  }
  , mounted() {
    this.getFileUploaded()
  }
  , data() {
    return {}
  },
  methods: {
    modifyAction() { }
    , getFileUploaded() {
    const childComponent = this.$refs.childRef;
}
  }
  });
</script>

<style lang="scss" scoped>
.popup-video {
  :deep(.popup_content) {
    max-height: unset !important;
    height: 856px;
  }
}
</style>
