import type DashboardSearchModel from '@/model/dashboardStatisticsResearch/DashboardSearchModel'
import http from '@/utils/http'

const apiUrl = '/staff';

class DashboardStatisticsOfResearchService {
  getListDataChart(data: DashboardSearchModel, type: number): Promise<any> {
    if (type === 0) {
      return http.get(
        `${apiUrl}/dashboard-edu-type/major?companyCodeId=${data.companyCodeId}&status=${data.status}&selectionType=${data.selectionType}&startDate=${data.startDate}&endDate=${data.endDate}`
      )
    }
    if (type === 2) {
      return http.get(
        `${apiUrl}/dashboard-edu-type/current-edu-type?companyCodeId=${data.companyCodeId}&status=${data.status}&selectionType=${data.selectionType}&startDate=${data.startDate}&endDate=${data.endDate}`
      )
    }
    if (type === 3) {
      return http.get(
        `${apiUrl}/dashboard-edu-type/university?companyCodeId=${data.companyCodeId}&status=${data.status}&selectionType=${data.selectionType}&startDate=${data.startDate}&endDate=${data.endDate}`
      )
    }
    return http.get(
      `${apiUrl}/dashboard-edu-type/major?companyCodeId=${data.companyCodeId}&status=${data.status}&selectionType=${data.selectionType}&startDate=${data.startDate}&endDate=${data.endDate}`
    )
  }
}
export default new DashboardStatisticsOfResearchService()
