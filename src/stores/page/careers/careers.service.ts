import http from '@/utils/http'
export const getAll = () => {
  return http.get("/careers/all")
}
