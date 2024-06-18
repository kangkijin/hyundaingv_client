import type { CareersInitModel } from './careers.type'
import { getAll } from '@/stores/page/careers/careers.service'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const careersStore = defineStore('careers', () => {
  const careersInitModel = ref<CareersInitModel>()
  const status = ref<number>()

  const getAllCareers = async () => {
    try {
      const response = await getAll()
      careersInitModel.value = response.data
      status.value = response.status
    } catch (error) {
      alert('API 호출 시 오류가 있습니다')
    }
  }
  return {
    getAllCareers,
    careersInitModel,
    status
  }
})
