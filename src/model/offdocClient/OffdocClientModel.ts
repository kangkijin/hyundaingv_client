import type PaymentRequestClientDto from "./PaymentRequestClientDto"

export default interface OffdocClientModel {
    id: Number,
    officialDocNo: string,
    companyId: Number,
    companyName: String,
    receivedBy: String,
    receivedByName: string,
    reference: String,
    confirmDate: Date
    subject: string
    content: string
    requestContent: string
    scholarshipMode: string
    createdBy: string
    deleteFlag: Number
    paymentRequestEntities: Array<PaymentRequestClientDto>
}