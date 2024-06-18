export default interface PaymentRequestClientDto {
    id: Number,
    officialDocumentId: Number,
    semester: string,
    educationType: String,
    universityId: Number,
    studentQuantity: Number,
    paymentDateStart: Date,
    paymentDateEnd: Date
    requestSemester: string
    paymentPerUnit: Number
    paymentRequestStudentEntities: Array<PaymentRequestClientDto>
    paymentPeriod: string
    totalPayment: Number
    totalMonth: Number
    note: String
}