<template>
    <div class="attach_filebox">
        <div class="top">
            <form ref="fileForm" v-if="mode != modeDetail">
                <button type="button">
                    <input ref="inputFile" type="file" :id="id" :name="name" @change="handleFileChange" :accept="acceptType"
                        hidden :multiple="multiple">
                    <label :for="id" class="btn_white">첨부파일</label>
                </button>
                <div class="img_nonphoto" v-if="fileUploadedInfo.length === 0 && mode != modeCreate"><img src="../../../assets/images/img_nophoto.png"/></div>
            </form>
        </div>
        <div class="bottom" v-if="mode == modeCreate">
            <div v-if="!previewFlag">
                <a v-for="item in fileInfo" :key="item.fileUrl" href="javascript:void(0);">{{ item.fileName }}
                    <button type="button" class="btn_icon icon_only close  btn_close_file_base"
                        @click="removeFile(item.fileName)">삭제</button>
                </a>
            </div>

            <div v-if="previewFlag" class="show_file_input_base">
                <div v-for="item in fileInfo" class="show_file_input_base" :class="{ img_base_preview: isShow }">
                    <img :key="item.fileUrl" :src="item.fileUrl">
                    <button type="button" class="btn_icon icon_only close btn_close_preview_img"
                        @click="removeFile(item.fileName)">삭제</button>
                </div>
            </div>
        </div>
        <div class="bottom" v-if="mode != modeCreate">
            <div v-if="!previewFlag">
                <div v-for="(item, index) in fileUploadedInfo" :key="index" class="show_file_input_base">
                    <a href="#" @click="dowload(item.fileName, item.uploadDirectory)">{{ item.fileName }}
                    </a>
                    <!-- <img  :src="item.url"> -->
                    <button type="button" class="btn_icon icon_only close  btn_close_file_base"
                        @click="deleteFile(item.fileName, item.id)" v-if="mode != modeDetail">삭제</button>
                </div>

                <a v-for="item in fileInfo" :key="item.fileUrl" href="javascript:void(0);">{{ item.fileName }}
                    <button type="button" class="btn_icon icon_only close  btn_close_file_base"
                        @click="removeFile(item.fileName)" v-if="mode != modeDetail">삭제</button>
                </a>
            </div>

            <div v-if="previewFlag" class="show_file_input_base">
                <div v-for="item in fileInfo" class="show_file_input_base" :class="{ img_base_preview: isShow }">
                    <img :key="item.fileUrl" :src="item.fileUrl">
                    <button type="button" class="btn_icon icon_only close btn_close_preview_img"
                        @click="removeFile(item.fileName)" v-if="mode != modeDetail">삭제</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FILE_TYPE_IMAGE, FILE_TYPE_OFFICE, FILE_TYPE_VIDEO, ACCEPTTYPE_OFICE, ACCEPTTYPE_IMG, ACCEPTTYPE_VIDEO, MODE_CREATE, MODE_EDIT, MODE_DETAIL, SUCCSESS_STATUS } from '../../../constants/screen.const';

import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits } from 'vue';
import { fileMngStore } from '../../../stores/common/fileMng';
import { storeToRefs } from 'pinia'
export default {
    props: {
        modelValue: [],
        maxFile: {
            type: Number,
            default: 1
        },
        id: String,
        name: String,
        type: String,
        previewFlag: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        orgName: String,
        category: String,
        sectionName: String,
        mode: String,
        referKey: Number,
    },
    setup() {
        const isShow = ref(false);
        const store = fileMngStore();
        return { isShow, store }
    }
    ,
    mounted() {
        switch (this.type) {
            case FILE_TYPE_IMAGE:
                this.acceptType = ACCEPTTYPE_IMG;
                break;
            case FILE_TYPE_OFFICE:
                this.acceptType = ACCEPTTYPE_OFICE;
                break;
            case FILE_TYPE_VIDEO:
                this.acceptType = ACCEPTTYPE_VIDEO;
                break;
            default:
                break;
        }
        if (this.mode != MODE_CREATE) {
            this.getFileUploaded();
        }
    },
    data() {
        return {
            selectedFile: null
            , fileName: ''
            , fileUrl: ''
            , totalFile: []
            , fileInfo: []
            , acceptType: ''
            , fileArray: []
            , modeCreate: MODE_CREATE
            , modeEdit: MODE_EDIT
            , modeDetail: MODE_DETAIL
            , fileUploadedInfo: []

        };
    },
    methods: {
        async dowload(fileName, uploadDirectory) {
            let params = {};
            params.fileName = fileName;
            params.uploadDirectory = uploadDirectory;
            await this.store.getFileDowload(params);
            if (this.store.status && this.store.status == SUCCSESS_STATUS) {
                let data = this.store.fileDowload;
                const url = window.URL.createObjectURL(new Blob([data], { type: this.store.type }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
            }
        }
        ,
        async getFileUploaded() {
            let params = {};
            params.fimFileCategory = this.category
            params.fimFileOrgName = this.orgName
            params.fimSectionName = this.sectionName
            params.fimReferKeyId = this.referKey
            await this.store.getListFileUpload(params);
            if (this.store.status == SUCCSESS_STATUS) {
                let datas = this.store.fileUploadedInfoList;
                datas.forEach(item => {
                    let fileUploaded = {};
                    fileUploaded.fileName = item.fimFileName;
                    fileUploaded.uploadDirectory = item.fimFilePath;
                    fileUploaded.id = item.id;
                    fileUploaded.url = item.urlFile;
                    this.fileUploadedInfo.push(fileUploaded);
                })
            }
        }
        ,
        async upLoadFile(referKeyId) {
            if (!referKeyId || this.fileArray.length == 0) {
                return;
            }
            const formData = new FormData();

            formData.append('orgName', this.orgName);
            formData.append('category', this.category);
            formData.append('sectionName', this.sectionName);
            formData.append('referKeyId', referKeyId);
            this.fileArray.forEach((item) => {
                formData.append('files', item.file);
            })
            await this.store.addfile(formData);
            if (this.store.status == SUCCSESS_STATUS) {

            }
        },
        handleFileChange(event) {
            this.totalFile = Array.from(event.target.files);

            this.isShow = true;
            if (this.totalFile.length > this.maxFile || this.fileInfo.length > this.maxFile || (!this.multiple && this.fileInfo.length > 0) || (this.fileInfo.length + this.totalFile.length > this.maxFile)) {
                return;
            }
            this.totalFile.forEach(item => {
                let file = {};
                let fileUpload = {};
                file.fileName = item.name;
                file.fileUrl = window.URL.createObjectURL(item)
                fileUpload.name = item.name;
                fileUpload.file = item;
                this.fileInfo.push(file);

                this.fileArray.push(fileUpload);
            })
            this.$emit('update:modelValue', this.fileArray)
        },
        removeFile(fileName) {
            this.fileInfo = this.fileInfo.filter((item) => item.fileName != fileName);
            this.fileArray = this.fileArray.filter((item) => item.name != fileName);
            this.$refs.fileForm.reset();
            if (this.fileInfo.length == 0) {
                this.isShow = false;
            }
            this.$emit('update:modelValue', this.fileArray)
        },
        async deleteFile(fileName, id) {
            this.fileUploadedInfo = this.fileUploadedInfo.filter((item) => item.fileName != fileName);
            await this.store.deleteFileMng(id);
        }

    }

}
</script>
<style>
.img_base_preview {
    width: 200px !important;
    height: 200px !important;
}

.show_file_input_base {
    display: flex !important;
}

.btn_close_file_base {
    margin-top: -15px !important;
    width: 12px !important;
}

.btn_close_preview_img {
    margin-top: -185px !important;
    margin-left: -20px !important;
    width: 15px !important;
}

.img_nonphoto {
  margin-top: 10px;
  margin-left: 12px;
}
</style>
