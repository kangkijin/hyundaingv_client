<template>
    <div >
        <a style="display: flex; align-items: center;" v-if="type == typeGotoPage " href="#" @click="gotoDetail()"><span>{{ value }}</span> 
            <img v-if="checkDisplayOrder" style="margin-left: 5px;" src="@/assets/images/icon_red_flag.png"></a>
        <a v-if="type == typeEvent" href="#" @click="addEvent()"><span>{{ value }}</span></a>
    </div>
</template>
  
<script >
import {TYPE_EVENT, TYPE_GO_TO_PAGE} from '../../constants/screen.const'
export default {
    props: {
        params: {},
        onCustomEvent: null
    },
    mounted() {
        if (this.params) {
            this.value = this.params.value;
            if(this.params.data.displayOrder === 1) {
                this.checkDisplayOrder = true;
            }
            this.namePath = this.params.colDef.cellRendererParams.namePath;
            if(this.params.type){
                this.type = this.params.type;
            }
            if(this.type == this.typeGotoPage) {
                this.namePath = this.params.colDef.cellRendererParams.namePath;
                if (this.params.colDef.cellRendererParams.sendParam) {
                    this.sendParam = this.params.colDef.cellRendererParams.sendParam;
                    this.data = this.params.data[this.sendParam];
                }
                this.mode = this.params.colDef.cellRendererParams.mode ? this.params.colDef.cellRendererParams.mode : '';
            }
        }
    },
    data() {
        return {
            checkDisplayOrder: false,
            value: '', 
            customParam: '',
            sendParam: '',
            namePath: '',
            data: '',
            mode: '',
            type: '',
            typeEvent: TYPE_EVENT,
            typeGotoPage: TYPE_GO_TO_PAGE,
        };
    },
    methods: {
        gotoDetail() {
            if (this.sendParam != null) {
                this.$router.push({ name: this.namePath, params: { id: this.data, mode: this.mode} });
            } else {
                this.$router.push({ name: this.namePath, replace: true });
            }
        },
        addEvent (){
            if (typeof this.params.onCustomEvent === 'function') {
                this.params.onCustomEvent(this.params.data);
            }
        }
    }
};
</script>
<style scoped>
</style>