import type TemplateModel from "@/model/TemplateModel";
import http from "@/utils/http";
class TemplateService {
    getCategoryById(id: number) {
       return http.get("/categories/" + id)
    }

    insertCategory (data : TemplateModel) {
       http.post("/categories",data);
    }

    editCategory(data: TemplateModel){
        http.put("/categories/",data)
    }
}
export default new TemplateService();