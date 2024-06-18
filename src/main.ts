import '@/assets/style/app.scss'
import 'animate.css'
import './assets/src/select2/css/select2.css'
import './assets/src/swiper/css/swiper.css'
import './assets/src/apexchart_v3.34.0/css/apexcharts.css'
import './assets/src/bootstrap-datepicker/css/bootstrap-datepicker.min.css'
import './assets/css/dl_global.css'
import './assets/css/dl_common.css'
import './assets/css/dl_table.css'
import './assets/css/dl_popup.css'
import './assets/css/dl_ui.css'
import './assets/css/dl_custom.css'
import './assets/css/dl_responsive.css'

import './assets/src/jquery/js/jquery-3.5.1.min.js'
// import './assets/src/select2/js/select2.min.js'
// import './assets/src/swiper/js/swiper.min.js'
// import './assets/src/apexchart_v3.34.0/js/apexcharts.js'
// import './assets/src/bootstrap-datepicker/js/bootstrap-datepicker.min.js'
// import './assets/src/bootstrap-datepicker/locales/bootstrap-datepicker.ko.min.js'
// import './assets/js/admin_header.js'
// import './assets/js/admin_table.js'
// import './assets/js/admin_popup.js'
// import './assets/js/admin_form.js'
// import './assets/js/admin_slide.js'
// import './assets/js/admin_responsive.js'

import "../node_modules/ag-grid-community/styles/ag-grid.css";
import "../node_modules/ag-grid-community/styles/ag-theme-alpine.css";



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from '@/plugins/i18n'
import { format } from 'date-fns';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
export function convertDateToFormat(inputDate: Date, dateFormat: string): string {
  try {
    const formattedDate = format(inputDate, dateFormat);
    return formattedDate;
  } catch (error) {
    return '';
  }
}
