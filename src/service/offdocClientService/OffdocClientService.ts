
import type OffdocClientSearchModel from "@/model/offdocclient/OffdocClientSearchModel";
import http from "@/utils/http";
class OffdocClientService {
    getOffDocClientSelectionInit(data:OffdocClientSearchModel): Promise<any> {
        return http.post("/offdocclient/list", data);
    }

    getOffDocClientById(id:number) {
        return http.get(`/offdocclient/${id}`);
    }

    approveOfficialdoc(id: number) {
        return http.put(`/offdocclient/${id}`);
    }
}
export default new OffdocClientService();