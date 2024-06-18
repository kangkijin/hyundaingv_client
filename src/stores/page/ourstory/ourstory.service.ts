import { SearchOurStoryModel } from '@/stores/page/ourstory/ourstory.type'
import http from '@/utils/http'

export const searchStory = (data: SearchOurStoryModel) => {
  return http.post("/storyAdver/list", data)
}
export const getById = (id: number) => {
  return http.get(`/storyAdver/${id}`)
}
