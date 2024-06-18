import type {FaqAdvertiseModel} from "@/stores/faqAdvertise/faqAdvertise.type";
import http from "@/utils/http";      

    export const getFaqStdSearchList = (data: FaqAdvertiseModel) => {
        return http.post(`/faqPromotion/`, data);
    }

    export const getFaqStdList = (data: FaqAdvertiseModel) => {
        return http.post(`/faqPromotion/list`, data);
    }

    export const updateViews = (data: FaqAdvertiseModel) => {
        return http.post(`/faqPromotion/views`, data);
    }