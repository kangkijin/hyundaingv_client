<template>
    <div>
    <button @click="showConfirm">Show Left Confirm</button>
    <v-slim-dialog v-if="isConfirmVisible" @close="handleClose">
      <template #title>
        Confirm
      </template>
      <template #content>
        Do you want to confirm?
      </template>
      <template #footer>
        <button @click="handleConfirm">Confirm</button>
        <button @click="handleCancel">Cancel</button>
      </template>
    </v-slim-dialog>
  </div>
    <button type="button" class="btn_lg btn_icon btn_bo_gray " @click="changeType('show')">showInpput</button>
    <button style="margin-left: 10px;" type="button" class="btn_lg btn_icon btn_bo_gray "
        @click="changeType('hidden')">hiddenInput</button>
    <button style="margin-left: 10px;" type="button" class="btn_lg btn_icon btn_bo_gray "
        @click="changeType('disabled')">disabledInput</button>

    <p class="box_title_sm">input</p>
    <InputTextBase :id="'idFirst'" :name="'fistName'" :mode="mode" v-model="inputValue.name" :placeholder="'input'"
        :className="'wd_300'" @focusout="focusOut" @change="changeValue"></InputTextBase>
    <button style="margin-left: 10px;" type="button" class="btn_lg btn_icon btn_bo_gray "
        @click="changeTypeDetail('detail')">detail</button>


    <div class="hello" style="margin-top: 15px;">

        <div style="display: block;">
            <TextAreaBase :id="'textArea'" :name="'textArea'" v-model="valueTextArea"
                :mode="modeTextArea"></TextAreaBase>
            <p>{{ valueTextArea }}</p>
            <button style="margin-left: 10px;" type="button" class="btn_lg btn_icon btn_bo_gray "
                @click="changeTypeTextArea('readonly')">readonly</button>
        </div>
        <div>
            <!-- mode create-->
            <RadiobuttonBase v-for="item in listRadio" :mode="'show'" :value="item.name" v-model="radiovalue" :id="item.id"
                :name="item.id" :key="item.id" :label="item.name">Checkbox 1</RadiobuttonBase>
            <p>value: {{ radiovalue }}</p>
            <RadiobuttonBase :mode="modeRaido" :value="'nameRadio0101'" v-model="radiovalue" :id="'nameRadio0101'"
                :name="'nameRadio0101'" :label="'radio3'" :checked="checkedRadio"></RadiobuttonBase>
           <!-- mode edit-->
            <RadiobuttonBase v-for="item in listRadio2" :mode="'show'" :value="item.name" v-model="radiovalue2" :id="item.id"
                :name="item.id" :key="item.id" :checked="item.name == namecheck" :label="item.name">Checkbox 1</RadiobuttonBase>
                <p>value: {{ radiovalue2 }}</p>
        </div>
    </div>

    <div class="hello" style="margin-top: 15px;">
        <p>
            <!-- return isChecked -->
            <CheckboxBase :mode="modeSelectBox" v-model="aloneCheckbox" :id="'name01'" :name="'name01'"
                :label="'checkBoxChange'"></CheckboxBase>
            <label>{{ aloneCheckbox }}</label>
        </p>
        <p>
            <!-- return value -->
            <CheckboxBase :mode="'disable'" trueValue="checked" falseValue="notChecked" v-model="aloneCheckboxWithTrueValue"
                :id="'name02'" :name="'name02'" :label="'label'"></CheckboxBase>
            <label>{{ aloneCheckboxWithTrueValue }}</label>
        </p>
        <div>
            <!-- return list value -->
            <CheckboxBase v-for="item in listCheckBox" :mode="'show'" :value="item.name" v-model="checkboxGroup" :id="item.id"
                :name="item.id" :key="item.id" :label="item.name"></CheckboxBase>
            <p>value: {{ checkboxGroup }}</p>
            <CheckboxBase v-for="item in listCheckBox2" :mode="'show'" :value="item.name" v-model="checkboxGroup2" :id="item.id"
                :name="item.id" :key="item.id" :label="item.name"></CheckboxBase>
            <p>value: {{ checkboxGroup2 }}</p>
        </div>
        <div>
            <SelectBoxBase :id="'selectbox'" :name="'selectbox'" v-model="selectBoxValue" :data="listSelectBox"
                :valueDefault="'3'" :nameDefault="'name03'" :mode="modeSelectBox"></SelectBoxBase>
            <p>value: {{ selectBoxValue }}</p>
        </div>
    </div>

    <div class="box dp_block">
        <div class="box_section">
            <h3 class="box_title">SEARCH</h3>
            <p class="box_title_sm">SEARCHBOX - col_4</p>
            <!-- 4열 일때 -->
            <div class="search_box col_4">
                <ul>
                    <li>
                        <p>성명</p>
                        <input type="text" v-model="templateModel.name">
                    </li>
                    <li>
                        <p>제도구분</p>
                        <input type="text" v-model="templateModel.name">
                    </li>
                    <li>
                        <p>선발기수</p>
                        <input type="text" v-model="templateModel.name">
                    </li>
                    <li>
                        <p>선발회사</p>
                        <select>

                            <option value="">전체</option>
                        </select>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>전공구분</p>
                        <select>
                            <option v-for="item in listTemp" v-bind:value="item.value" :key="item.name">{{ item.name }}
                            </option>
                        </select>
                    </li>
                    <li>
                        <p>소속대학</p>
                        <select>
                            <option value="">전체</option>
                        </select>
                    </li>
                    <li>
                        <p>학위</p>
                        <select>
                            <option value="">전체</option>
                        </select>
                    </li>
                    <li>
                        <p>장학기간</p>
                        <div class="search_flex">
                            <input type="text" class="datepick" placeholder="">
                            <span>~</span>
                            <input type="text" class="datepick" placeholder="">
                        </div>
                    </li>
                </ul>
                <div class="search_btnarea">
                    <button type="button" class="btn_lg btn_icon btn_bo_gray reload">초기화</button>
                    <!-- Import other component -->
                    <ButtonHome></ButtonHome>
                </div>
            </div>
        </div>
    </div>
    <!-- <AgGridVue style="width: 100%; height: 650px;" class="ag-theme-alpine" :rowData="rowData" :columnDefs="columnDefs"
        :pagination="true" :paginationPageSize="5" :paginationPageSizeSelector=[5,10,15]>
    </AgGridVue> -->
    <GridComponent :rowData="rowData" :columnDefs="columnDefs" :pagination="true" :paginationPageSize="5" :paginationPageSizeSelector=[5,10,15]></GridComponent>
</template>
<script lang="ts">
import { ref } from "vue";
import { defineComponent } from 'vue';
import TemplateService from '../service/templateService';
import TemplateModel from '../model/TemplateModel';
import InputTextBase from '../components/common/input/InputTextBase.vue';
import CheckboxBase from '../components/common/input/CheckboxBase.vue';
import RadiobuttonBase from "../components/common/input/RadiobuttonBase.vue";
import SelectBoxBase from "../components/common/input/SelectBoxBase.vue";
import TextAreaBase from '../components/common/input/TextAreaBase.vue';
import GridComponent from '../components/common/grid/GridComponent.vue';
import VSlimDialog from 'v-slim-dialog';
export default defineComponent({
    name: "template",
    //
    data() {
        return {
            templateModel: {} as TemplateModel,
            listTemp: [{ value: 1, name: 'Name01' }, { value: 2, name: 'Name02' }],
            rowData: [
                { id: '1', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '2', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '3', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '4', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '5', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '6', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '7', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '8', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '9', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '10', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '11', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '12', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '13', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '14', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '15', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '16', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '17', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '18', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '19', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
                { id: '20', value1: 'value1', value2: 'value2', value3: 'value3', value4: 'value4' },
            ],
            columnDefs: ref([
                { field: 'id' },
                { field: 'value1' },
                { field: 'value2' },
                { field: 'value3' },
                { field: 'value4' },

            ]),
            inputValue: {} as TemplateModel,
            mode: 'show',
            checked: false,
            namecheck: 'name06',
            listCheckBox: [{ id: '1', name: 'name01' }, { id: '2', name: 'name02' }],
            listCheckBox2: [{ id: '8', name: 'name08' ,checked :true}, { id: '9', name: 'name9' , checked :false}],
            listCheckBoxCheck: ['name9'],
            listRadio: [{ id: '4', name: 'name04' }, { id: '5', name: 'name05' }],
            listRadio2: [{ id: '6', name: 'name06' }, { id: '7', name: 'name07' }],

            listSelectBox: [{ value: '4', name: 'name04' }, { value: '5', name: 'name05' }],
            chekedItem: '6',
            valueTextArea: 'valueTextArea',
            modeSelectBox: 'show',
            modeTextArea: '',
            modeRaido: '',
            modeCheckBox: '',
            checkedRadio: false,
            checkboxGroup2 : ref(['name9','name08'])
        }
    },
    components: {
       InputTextBase,
       CheckboxBase,
         RadiobuttonBase,
         SelectBoxBase,
         TextAreaBase,
        GridComponent
    },
    setup: () => {
        const aloneCheckboxWithTrueValue = ref(";");
        const aloneCheckbox = ref(false);
        const checkboxGroup = ref([]);
        //const checkboxGroup2 = ref(['name9','name08']);
        const radiovalue = ref('');
        const radiovalue2 = ref('name06');
        const selectBoxValue = ref('3');
        return { aloneCheckboxWithTrueValue, checkboxGroup, aloneCheckbox, radiovalue, selectBoxValue, radiovalue2 };
    },
    // Khởi tạo
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            TemplateService.getCategoryById(1).then(res => {
                this.templateModel = res.data;
            })
        }
        ,
        createCategory(templateModel: TemplateModel) {

        }

        , focusOut() {
            console.log("focusout");
        }
        , changeValue() {
            console.log("valueChanged");
        },
        // thay đổi mode
        changeType(type: string) {
            this.mode = type
            this.modeSelectBox = type
            this.modeTextArea = type;
            this.modeRaido = type;
            this.modeCheckBox = type;

        },
        changeTypeTextArea(type: string) {
            this.modeTextArea = type;
        }, changeTypeDetail(type: string) {
            this.mode = type
        }
    }
})
</script>