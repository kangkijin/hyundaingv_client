import {SelectionProcessModel, SelectionProcessModelInit, SelectionProcessSearch, SelectionProcessSearchInit} from '@/stores/studentSituation/scholarship/scholarship.type'
import { CodeMngModel } from "@/common/CodeMng.type";
import { defineStore } from "pinia";
import { ref } from "vue";
export const scholarshipStore = defineStore('scholarship', () => {
 const selectionProcessModel = ref<SelectionProcessModel>();
 const selectionProcessModelInit = ref<SelectionProcessModelInit>();
 const selectionProcessSearch = ref<SelectionProcessSearch>();
 const selectionProcessSearchInit = ref<SelectionProcessModelInit>();
 return {
    selectionProcessModel,
    selectionProcessModelInit,
    selectionProcessSearch,
    selectionProcessSearchInit
 }
})