<template>
  <div v-if="props.xAxisData.length !== 0 && props.columnData !== 0" style="overflow-x: auto; scrollbar-width: auto;">
    <ExportFileExcel v-if="props.type == TYPE_EXPORT_DATA_TABLE_CHART" :data="data" :fileName="props.title" :buttonnName="'엑셀 다운로드 '"></ExportFileExcel>
    <table class="tbl_col" v-if="props.type == TYPE_TABLE_CHART">
      <thead>
        <tr>
          <th scope="col" style="min-width: 300px; width: 300px; position: sticky; left: 0; background-color: #ffff;">{{ t('common.sum') }}</th>
          <th v-for="(item, index) in sumColumn" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in props.columnData" :key="index">
          <td style="min-width: 300px; width: 300px; position: sticky; left: 0; background-color: #ffff; border-right: 1px #ccc solid;">
            {{ item.name }}
          </td>
          <td v-for="(data, index) in item.data" :key="index">{{ data }}</td>
        </tr>
        <tr>
          <th scope="col" style="min-width: 300px; width: 300px; position: sticky; left: 0; background-color: #ffff;"></th>
          <td v-for="(item, index) in props.xAxisData" :key="index">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ExcelData } from '@/stores/common/excel/excelData.type'
import { TYPE_TABLE_CHART, TYPE_EXPORT_DATA_TABLE_CHART } from '@/constants/screen.const.ts'

interface SerieItem {
  name: string
  data: number[]
}

export default defineComponent({
  props: {
    title: String,
    type: String,
    xAxisData: {
      type: Array,
      default: () => []
    },
    columnData: {
      type: Array<SerieItem>,
      default: () => []
    }
  },
  data() {

    // EXPORT EXCEL
    let dataExportExecl = []
    let dataHeader = []
    let dataFooter = []

    dataHeader.push(this.t('common.sum'))
    this.sumColumn.forEach((value) => {
      dataHeader.push(value + '')
    })
    dataExportExecl.push(dataHeader)

    this.$props.columnData.forEach((el) => {
      let dataContent = []
      dataContent.push(el.name)
      el.data.forEach((dataItem) => {
        dataContent.push(dataItem + '')
      })
      dataExportExecl.push(dataContent)
    })

    dataFooter.push('')
    this.$props.xAxisData.forEach((el) => {
      dataFooter.push(el + '')
    })
    dataExportExecl.push(dataFooter)

    return {
      data: [
        {
          sheetName: 'sheet1',
          data: dataExportExecl
        }
      ] as Array<ExcelData>
    }
  },
  setup(props) {
    const { t } = useI18n()
    const sumColumn = ref<number[]>([])
    const tempSumColumn: number[] = []
    props.xAxisData.forEach((element, index) => {
      let sum = 0
      props.columnData.forEach((columnElement) => {
        sum += columnElement.data[index] || 0
      })
      tempSumColumn.push(sum)
    })
    sumColumn.value = tempSumColumn

    return {
      t,
      props,
      sumColumn,
      TYPE_TABLE_CHART,
      TYPE_EXPORT_DATA_TABLE_CHART
    }
  }
})
</script>

<style lang=""></style>
