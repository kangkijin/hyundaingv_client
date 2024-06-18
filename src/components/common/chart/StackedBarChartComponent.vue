<template>
  <h3 class="box_title">{{ title }}</h3>
  <div :id="id"></div>
</template>

<script lang="ts">
import { watch } from 'vue'
import ApexCharts from 'apexcharts'
import { TYPE_COLUMN_CHART } from '@/constants/screen.const.ts'
import { useI18n } from 'vue-i18n';

const arrayColor = [
  '#B976D3',
  '#D76768',
  '#3DEDC6',
  '#CDEA58',
  '#9FFC34',
  '#9FFC34',
  '#61EB70',
  '#7FB486',
  '#CBE98D',
  '#8196D3',
  '#CAEE48',
  '#D3BD8B',
  '#CDEA58',
  '#9FFC34',
  '#D9A6FB',
  '#9898C7',
  '#E6BABB',
  '#2ACA30',
  '#EE9050',
  '#F58E9C',
  '#75B3E3',
  '#B08A02',
  '#1BD612',
  '#35CA0D',
  '#A4A0B9',
  '#F935E8',
  '#61F104',
  '#9DDAEF',
  '#53AA4E',
  '#48FA08',
  '#BFC330',
  '#62EAD2',
  '#CD7F70',
  '#A1C82E',
  '#5DEC13',
  '#B8B2DE',
  '#45A99F',
  '#C3D695',
  '#22C7BB',
  '#29D587',
  '#E7CD02',
  '#2BA6CC',
  '#B0E6DD',
  '#B386D2',
  '#33BDE5',
  '#6EE33D',
  '#B19F46',
  '#70C480',
  '#BA6791',
  '#70CB14',
  '#E9DDC1',
  '#C45FD8',
  '#79FECB',
  '#E2C7A1',
  '#C975C6',
  '#8BAAFA',
  '#9DA00A',
  '#25A8AB',
  '#C67A0C',
  '#88E6D2',
  '#977A6F',
  '#75C666',
  '#EDC859',
  '#47BC15',
  '#46E24E',
  '#0CEA54',
  '#00DAE5',
  '#F1A903',
  '#7AA3EE',
  '#39DE59',
  '#FCE224',
  '#4AA463',
  '#B5C401',
  '#FAEA62',
  '#FA80CC',
  '#FBF89A',
  '#FAF4A4',
  '#15EE28',
  '#E05666',
  '#59A97F',
  '#BDED08',
  '#CBD8A9',
  '#4FCF0D',
  '#7A91C6',
  '#ED7F8B',
  '#E0EFF8',
  '#3DEDC6',
  '#61EB70',
  '#F0D16D',
  '#DBE5DF',
  '#A7C4BC',
  '#9AC17E',
  '#7DE7A1',
  '#E0C964',
  '#72ADEC',
  '#65D33B',
  '#8E7BF9',
  '#DCBE86',
  '#D19D9F',
  '#60C27D',
  '#FBB4CE',
  '#7CC124',
  '#7AA03A',
  '#89B645',
  '#4DE831'
]

interface SerieItem {
  name: string
  data: number[]
}

export default {
  props: {
    title: String,
    id: String,
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
  setup(props) {
    const { t } = useI18n();
    const xAxisData = ref(props.xAxisData)
    const columnData = ref(props.columnData)
    if (props.type === TYPE_COLUMN_CHART) {
      xAxisData.value = props.columnData.map((el) => el.name)
      columnData.value = [
        {name: t('common.sum'),
        data: props.columnData.map((el) => {
        let sum = 0
        el.data.forEach((el) => (sum += el))
        return sum;
      })}
      ]
    }

    const renderChart = () => {
      const seriesColors = props.columnData.map((item, index) => {
        return arrayColor[index % arrayColor.length]
      })

      const options = {
        series: columnData.value,
        chart: {
          type: 'bar',
          height: '100%',
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '40%',
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '14px',
                  colors: 'black'
                }
              }
            }
          }
        },
        xaxis: {
          categories: xAxisData.value,
          labels: {
            style: {
              colors: '#333',
              fontSize: '14px'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#898D9C',
              fontSize: '12px'
            }
          }
        },
        colors: seriesColors,
        legend: {
          position: 'top',
          offsetY: 0
        },
        fill: {
          opacity: 1
        }
      }
      const chart = new ApexCharts(document.querySelector(`#${props.id}`), options)
      chart.render()
    }

    watch(
      () => props.columnData,
      () => {
        renderChart()
      }
    )

    watch(
      () => props.xAxisData,
      () => {
        renderChart()
      }
    )

    renderChart()

    return {
      renderChart
    }
  },
  mounted() {
    this.renderChart()
  }
}
</script>

<style scoped></style>
