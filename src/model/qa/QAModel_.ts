export default interface IQaModel_ {
  id: number
  password: string
}
export default class QAModel_ {
  id: number
  password: string
  constructor(iQa: IQaModel_) {
    this.id = iQa?.id || 0
    this.password = iQa?.password || ''
  }
}
