<template>
    <TModal :is-open="isOpen" :is-show-header="true" :is-show-footer="true" :modal-id="modalId" @close-modal="closeModal">
        <!-- Modal content goes here -->
        <template #title>
            <strong>{{ t('06.certification.form.titlePopup') }}</strong>
        </template>
        <template #default>
            <!-- Component input draw -->
            <InputDrawBase ref="componentInputDraw" :width="650" :height="300"></InputDrawBase>
        </template>
        <template #footer>
            <!-- Footer content goes here -->
            <!-- Button close modal -->
            <button type="button" @click="closeModal" class="btn_md btn_white popup_close">{{ t('common.close') }}</button>
            <!-- Button Clear Draw -->
            <button type="button" @click="clearSignature" class="btn_md text-white bg-red-500">
                {{ t('06.certification.button.reset') }}
            </button>
            <!-- Button Save Draw  -->
            <button type="button" @click="saveSignature" class="btn_md btn_black">{{ t('common.save') }}</button>
        </template>
    </TModal>
    <!-- Confirm successful save -->
    <TModalComfirm :is-open="modalOpenConfirm" :is-show-header="true" :is-show-footer="true" :modal-id="'modalId'"
        :title="t('06.certification.form.confirmPopup')" :message="t('06.certification.form.alertSuccess')" :size="'xs'" @close-modal="closeModalConfirm"></TModalComfirm>
    <TModalModify :is-open="modalOpenModify" :is-show-header="true" :is-show-footer="false" :modal-id="'modalIdModify'"
        :size="'xs'" @modifyAction="modifyAction" @close-modal="closeModalModify" :title="t('06.certification.form.confirmPopup')" :message="t('06.certification.form.alertSave')">
    </TModalModify>
    <!-- Confirm not saved -->
    <TModalModify :is-open="modalOpenModifyDontSave" :is-show-header="true" :is-show-footer="false"
        :modal-id="'modalIdModifyDontSave'" :size="'xs'" @modifyAction="modifyActionDontSave"
        @close-modal="closeModalModifyDontSave" :title="t('06.certification.form.closePopup')" :message="t('06.certification.form.alertClose')"></TModalModify>
</template>
<script>
import TModal from '@/components/common/modal/TModal.vue'
import RadiobuttonBase from '@/components/common/input/RadiobuttonBase.vue'
import InputDrawBase from '@/components/common/input/InputDrawBase.vue'
import { useI18n } from 'vue-i18n';

export default {
    name: "TModalDignConfirmation",
    setup: () => {
        const { t } = useI18n();
        return { t }
    },
    props: {
        isOpen: Boolean,
    },
    data() {
        return {
            modalId: 'demo',
            isDrawing: this.t('06.certification.button.sign'),
            canvas: null,
            context: null,
            drawing: false,
            listRadio1: [
                { id: this.t('06.certification.button.sign'), name: this.t('06.certification.button.sign') },
                { id: this.t('06.certification.button.chooseFile'), name: this.t('06.certification.button.chooseFile') }
            ],
            fileName: this.t('06.certification.form.fileName'),
            modalOpenConfirm: false,
            modalOpenModify: false,
            modalOpenModifyDontSave: false
        }
    },
    components: {
        TModal,
        RadiobuttonBase,
        InputDrawBase
    },
    methods: {
        saveSignature() {
            this.modalOpenModify = true
        },
        modifyAction() {
            // use dataInput ==> data in input
            const blob = this.$refs.componentInputDraw.dataInput
            // Handle logic other
            this.$emit('sendImageFromChilds', blob);
            this.modalOpenModify = false
            this.modalOpenConfirm = true
            this.clearSignature();
            this.clearFileInput();
        },
        clearSignature() {
            // use function in input
            this.$refs.componentInputDraw.clearSignature()
        },
        closeModal() {
            this.modalOpenModifyDontSave = true
        },
        clearFileInput() {
            // use function in input
            this.$refs.componentInputDraw.clearFileInput()
        },
        closeModalConfirm() {
            // Thêm loading page nếu cần
            this.modalOpenConfirm = false
            this.$emit('close-modal')
            // Thưc hiện chuyển hướng đến route mong muốn
        },
        openModalModify() {
            this.modalOpenModify = true
        },
        closeModalModify() {
            this.modalOpenModify = false
        },
        modifyActionDontSave() {
            this.$emit('close-modal')
            this.clearSignature();
            this.clearFileInput();
            this.modalOpenModifyDontSave = false;
        },
        closeModalModifyDontSave() {
            this.modalOpenModifyDontSave = false
        }
    }
}
</script>
<style scoped></style>
  