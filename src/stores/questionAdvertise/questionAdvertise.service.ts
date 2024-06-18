import http from '@/utils/http'
import type { QuestionModel, SearchModel } from './questionAdvertise.type'

export const list = (data: SearchModel) => {
  return http.post('/qaAdvertise/list', data)
}
export const getById = (id: number) => {
  return http.get(`/qaAdvertise/${id}`)
}

export const insertQuestion = (data: QuestionModel) => {
  return http.post(`/qaAdvertise/`, data)
}

export const editQuestion = (data: QuestionModel) => {
  return http.put(`/qaAdvertise/`, data)
}

export const deleteQuestion = (id: number) => {
  return http.delete(`/qaAdvertise/${id}`)
}
