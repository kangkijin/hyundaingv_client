import { defineStore } from "pinia";
import { CodeMngModel } from "./codeMng.type";
import { getCodeMngByUpCdId } from "./codeMng.service";
import { ref } from "vue";
export const codeMngStore = defineStore('codemng', () => {
    const codeInfo = ref<CodeMngModel>();
    const status = ref<number>();
    const getCodeInfo = async (params: string) => {
        const response = await getCodeMngByUpCdId(params);
        codeInfo.value = response.data;
        status.value = response.status;
    }
    return {
        codeInfo,
        status,
        getCodeInfo,
    }
})