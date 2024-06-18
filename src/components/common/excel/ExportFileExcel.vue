<template>
    <button type="button" class="btn_md btn_white" @click="exportToExcel">{{ buttonnName }}</button>
</template>
  
<script lang="ts">
import * as XLSX from 'xlsx';
import { ExcelData } from '../../../stores/common/excel/excelData.type';
import { format } from 'date-fns';
import { FORMAT_FULL_DATE,TYPE_EXPORT_EXCEL } from '../../../constants/screen.const';
export default {
    props: {
        buttonnName: String,
        data: Array<ExcelData>,
        fileName: String
    },
    methods: {
        exportToExcel() {
            
            const wb = XLSX.utils.book_new();
            this.data?.forEach(item => {

                let ws = XLSX.utils.aoa_to_sheet(item.data);
                XLSX.utils.book_append_sheet(wb, ws, item.sheetName);
            })
            let newFileName = `${format(new Date(),FORMAT_FULL_DATE )}_${this.fileName}${TYPE_EXPORT_EXCEL}`  ;
            XLSX.writeFile(wb, newFileName);
        }
    }
}
</script>
  