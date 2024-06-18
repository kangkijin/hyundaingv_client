import http from '@/utils/http'
//import CodeMngModel from "../../model/common/CodeMngModel"
class CommonService {
  getCodeMngByupCdId(upCdId: any) {
    return http.get(`/api/v1/code/search`, {
      params: {
        upCdId: upCdId
      }
    })
  }
  login(data: any): Promise<any> {
    return http.post('/auths/staff/login', data)
  }
  changePasswordFirstLogin(id: number, newPassWord: string): Promise<any> {
    return http.put(`/myPageClient/changePassFirstLogin?id=${id}&newPassWord=${newPassWord}`)
  }
}
export default new CommonService()
