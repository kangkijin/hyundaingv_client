import type { OurStoryInitModel, OurStoryModel } from './ourstory.type'
import { searchStory, getById } from './ourstory.service'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const ourStoryStore = defineStore('ourStory', () => {
  const ourStoryInitModel = ref<OurStoryInitModel>()
  const ourStoryModel = ref<OurStoryModel>()
  const status = ref<number>()

  const searchOurStory = async (params) => {
    try {
      const response = await searchStory(params)
      ourStoryInitModel.value = response.data
      status.value = response.status
    } catch (error) {
      alert('API 호출 시 오류가 있습니다')
    }
  }
  const getByIdStory = async (id: number) => {
    try {
      const response = await getById(id)
      ourStoryModel.value = response.data
      status.value = response.status
    } catch (error) {
      alert('API 호출 시 오류가 있습니다')
    }
  }

  return {
    searchOurStory,
    ourStoryInitModel,
    getByIdStory,
    ourStoryModel,
    status
  }
})
