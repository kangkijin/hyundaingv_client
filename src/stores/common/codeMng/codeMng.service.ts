import http from "@/utils/http";

export const getCodeMngByUpCdId = (upCdId: any) => {
    return http.get(`/code/search?upCdId${upCdId}`);
}
export const getListCodeMng= (upcIdList: any) => {
  return http.get(`/code/listCode/${upcIdList}`);
}
