import http from "@/utils/http";
export const createFile = (data: any) => {
    return http.post(`/files/upload`, data, {
        headers: {
            'content-type': 'multipart/form-data',
        },
    });
}
export const getFile = (data: any) => {
    return http.get(`/files/download`, {
        params: {
            fileName: data.fileName,
            uploadDirectory: data.uploadDirectory,
        },
        responseType: 'blob'
    })
}

export const getFileUploaded = (data: any) => {
    return http.get(`/files/fileUploadedInfo`, {
        params: {
            fimFileCategory: data.fimFileCategory,
            fimFileOrgName: data.fimFileOrgName,
            fimSectionName: data.fimSectionName,
            fimReferKeyId: data.fimReferKeyId,
        },
    })
}
export const deleteFile = (id: number) => {
    return http.put(`/files/fileMng?fileId=${id}`)
}
