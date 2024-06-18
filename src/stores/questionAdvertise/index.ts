import type { QuestionModel, SearchModel } from './questionAdvertise.type'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  list,
  insertQuestion,
  getById,
  editQuestion,
  deleteQuestion
} from './questionAdvertise.service'

export const questionAdvertiseStore = defineStore('questionAdvertise', () => {
  const questionInitModel = ref<Array<QuestionModel>>([])
  const questionModelDetail = ref<Array<QuestionModel>>([])
  const status = ref<number>()
  const fetchQuestionModel = async (params: SearchModel) => {
    try {
      const response = await list(params)
      questionInitModel.value = response.data
      status.value = response.status
    } catch (error) {
      alert('API 호출 시 오류가 있습니다')
    }
  }
  const insertQues = async (params: QuestionModel) => {
    try {
      const response = await insertQuestion(params)
      status.value = response.data
    } catch (error) {
      alert('API 호출 시 오류가 있습니다')
    }
  }

  const getQuestionById = async (id: number) => {
    try {
      const response = await getById(id)
      questionModelDetail.value = response.data
      status.value = response.status
    } catch (error) {
      alert('API 호출 시 오류가 있습니다')
    }
  }
  const editQuest = async (params: QuestionModel) => {
    try {
      const response = await editQuestion(params)
      status.value = response.status
    } catch (error) {
      alert('API 호출 시 오류가 있습니다')
    }
  }
  const deleteQuest = async (id: number) => {
    try {
      const response = await deleteQuestion(id)
      status.value = response.status
    } catch (error) {
      alert('API 호출 시 오류가 있습니다')
    }
  }
  return {
    fetchQuestionModel,
    questionInitModel,
    status,
    insertQues,
    getQuestionById,
    editQuest,
    deleteQuest,
    questionModelDetail
  }
})
