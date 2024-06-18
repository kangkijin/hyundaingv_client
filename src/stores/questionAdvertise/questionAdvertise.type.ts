export type QuestionModel = {
  rowNum: number
  id: string
  upId: string
  orderQa: number
  category: string
  content: string
  siteType: string
  studentType: string
  password: string
  deleteFlag: number
  answerDTO: AnswerModel
  createdBy: string
  createdDate: Date
  lastModifiedBy: string
  lastModifiedDate: Date
  status: string
}

export type AnswerModel = {
  id: string
  content: string
  deleteFlag: number
  createdBy: string
  createdDate: Date
  lastModifiedBy: string
  lastModifiedDate: Date
}

export type SearchModel = {
  category: string
}
