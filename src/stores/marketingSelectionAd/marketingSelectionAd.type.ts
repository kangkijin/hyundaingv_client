export type MarketingSelectionModel = {
    id: string,
    name: string,
    selectionType: string,
    selectionName:string,
    educationType: string,
    educationName: string,
    content: string,
    receiveStartDate: Date,
    receiveEndDate: Date,
    showYn: string,
    applyUrl: string,
    deleteFlag: number,
    createdBy: string,
    createdDate: Date,
    tags: Array<CodeEducation>
}

export type MarketingSelectionSearch = {
    selectionType: string,
    educationType: string,
    keyword: string,
    checkCurrent: boolean
}

export type CodeEducation = {
  conntent: any
  type: number
}