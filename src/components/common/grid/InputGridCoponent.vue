<template>
    <div style="margin-top: 10px;">
        <input v-if="type == typeInput" type="text" v-model="data" @change="updateValue" />
        <span v-if="type == typeFomatDate">{{ data }}</span>
        <span v-if="type == typeDateFromTo">{{ data }}</span>
    </div>
</template>
<script>
import { format } from 'date-fns';
import { TYPE_FORMAT_DATE, TYPE_INPUT, TYPE_DATE_FROM_TO } from '../../../constants/screen.const';
import ko from 'date-fns/locale/ko';
export default {
    props: {
        params: {}
    },
    mounted() {
        if (this.params) {
            this.data = this.params.value;
            this.type = this.params.colDef.cellRendererParams.type;
            if (this.data) {
                switch (this.type) {
                    case TYPE_FORMAT_DATE:
                        this.data = format(this.data, 'PPP', { locale: ko });
                        break;
                    case TYPE_DATE_FROM_TO:
                        let start = this.params.colDef.cellRendererParams.startDate;
                        let end = this.params.colDef.cellRendererParams.endDate;
                        let dateStart = '';
                        let dateEnd = '';
                        if(this.params.data[start]) {
                            dateStart = format(this.params.data[start], 'PPP', { locale: ko });
                        }
                        if(this.params.data[end]){
                            dateEnd = format(this.params.data[end], 'PPP', { locale: ko });
                        }
                        this.data =  dateStart + ' ~ ' + dateEnd;
                        break;
                    default:
                        this.data;
                        break;
                }
            }

        }
    },
    data() {
        return {
            data: '',
            type: '',
            typeInput: TYPE_INPUT,
            typeFomatDate: TYPE_FORMAT_DATE,
            typeDateFromTo: TYPE_DATE_FROM_TO,
        }
    },
    methods: {
        updateValue() {
            this.params.setValue(this.data);
        }
    }
}
</script>
