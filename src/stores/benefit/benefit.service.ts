import http from "@/utils/http";

export const getBenefitList = (type: string) => {
    return http.post(`/benefit/list?typeSearch=${type}`);
}