import type {FaqStdModel} from "@/stores/faqStd/faqStd.type";
import http from "@/utils/http";      

    export const getFaqStdSearchList = (data: FaqStdModel) => {
        return http.post(`/faqClient/`, data);
    }

    export const getFaqStdList = (data: FaqStdModel) => {
        return http.post(`/faqClient/list`, data);
    }

    export const updateViews = (data: FaqStdModel) => {
        return http.post(`/faqClient/views`, data);
    }
