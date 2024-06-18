import type PaymentRequestClientDto from "./PaymentRequestClientDto"

export default interface OffdocClientDetailModel {
    id: Number,
    officialDocNo: string,
    companyId: Number,
    companyName: String,
    receivedBy: String,
    receivedByName: string,
    reference: String,
    confirmDate: any
    subject: string
    content: string
    requestContent: string
    scholarshipMode: string
    createdBy: string
    deleteFlag: Number
    createdDate: Date
    paymentRequestEntities: Array<PaymentRequestClientDto>
}