export type FaqStdModel =  {    
    id: string,
    siteType: string,
    category: string,
    content: string,
    display: number,
    displayStartTime: Date,
    displayEndTime: Date,
    views: number,
    timeShowYn: number,    
    deleteFlag: number,
    createdBy: string,
    createdDate: Date,
    lastModifiedBy: string,
    lastModifiedDate: Date,
    showFlag: boolean
}

export type FaqStdModelSearch =  {    
    id: string,
    siteType: string,
    category: string,
    content: string,
    display: number,
    displayStartTime: Date,
    displayEndTime: Date,
    views: number,
    timeShowYn: number,    
    deleteFlag: number,
    createdBy: string,
    createdDate: Date,
    lastModifiedBy: string,
    lastModifiedDate: Date,
    showFlag: boolean,
	currPage: number
}

export type FaqListModel = {
    faqList : Array<FaqStdModel>,
}