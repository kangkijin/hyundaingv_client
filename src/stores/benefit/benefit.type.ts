export type BenefitModel = {
    id: number,

    title: string,

    subTitle: string,

    content: string,

    videoUrl: string,

    display: string,

    deleteFlag: number,

    createdDate: Date,

    // private CompanyCodeDTO companyCodeDTO;

    // private CodeMngDTO codeMngDTO;

    fimFileName: string,

    fimFilePath: string
}

export type InfoVideo = {
    id: number
    title: string
    subTitle: string
    content: string
    desc: string
    url: string
    checkFile: string
  }