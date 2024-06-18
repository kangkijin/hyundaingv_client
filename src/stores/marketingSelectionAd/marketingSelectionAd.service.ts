import http from "@/utils/http";
import type { MarketingSelectionSearch } from "./marketingSelectionAd.type";

export const getMarketingSelectionList = (params: MarketingSelectionSearch) => {
    return http.post(`/marketingAd/list`, params);
}

export const getCodeMng = (upcIdList: Array<string>) => {
    return http.get(`/code/listCode/${upcIdList}`)
}