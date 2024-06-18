import type SearchParamInitDto from "@/model/marketingSelectionModel/SearchParamInitDto";
import type MarketingSelectionModel from "@/model/marketingSelectionModel/MarketingSelectionModel";
import http from "@/utils/http";
class MarketingSelectionService {
    getMarketingSelectionInit(data:SearchParamInitDto): Promise<any> {
        return http.post("/marketing/list", data);
    }

    getMarketingSelectionByid(id: number) {
        return http.get(`/marketing/detail/${id}`);
    }

    insertMarketingSelection(data: MarketingSelectionModel) : Promise<any> {
        return http.post("/marketing/new", data);
    }

    editMarketingSelection(data: MarketingSelectionModel) : Promise<any>  {
        return http.post("/marketing/mng",data)
    }

    deleteMarketingSelection(data: MarketingSelectionModel) : Promise<any> {
        return http.put("/marketing/delete",data)
    }

    searchMarketingSelection(data: SearchParamInitDto) : Promise<any>  {
        return http.post("/marketing/list",data)
    }

    getCodeMngList(upcIdList: Array<string>) : Promise<any>  {
        return http.get(`/marketing/listCode/${upcIdList}`)
    }
}
export default new MarketingSelectionService();