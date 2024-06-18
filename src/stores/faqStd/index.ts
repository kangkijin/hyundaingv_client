import type {FaqStdModel, FaqListModel} from "./faqStd.type";
import { getFaqStdSearchList} from '@/stores/faqStd/faqStd.service';
import { CodeMngModel } from "@/common/CodeMng.type";
import { defineStore } from "pinia";
import { ref } from "vue";

export const faqStdStore = defineStore('faq', () => {
    const faqModel = ref<FaqStdModel>();
    const status = ref<number>();
    const codeMngList = ref<CodeMngModel[]>([])
    const faqListModel = ref<FaqListModel>();

    const getFaqInitModel = async (params: FaqStdModel) => {
        try {
            const response = await getFaqStdSearchList(params)
            faqListModel.value = response.data
            status.value = response.status
        } catch (error) {
            alert('API 호출 시 오류가 있습니다')
        }
    }    
    
    return {
        getFaqInitModel,
        faqListModel,
        faqModel,
        status,
        codeMngList
    }
})