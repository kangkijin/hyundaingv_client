<template>
    <div class="custom-dropdown">
        <input @click="toggleDropdown" :value="showValue" readonly class="select-custom">
        <div v-if="showDropdown" class="dropdown-list wd100" @mouseleave="toggleDropdown">
            <!-- <input v-model="searchQuery" placeholder="" /> -->
            <ul>
                <li>
                    <CheckboxBase v-model="checkBoxDataAll" :value="checkAll" :label="'전체'" :id="checkAll" :name="checkAll"
                        @change="checkAll"></CheckboxBase>
                </li>
                <li v-for="option in filteredOptions" :key="option.cdId">
                    <CheckboxBase v-model="checkBoxData" :value="option.cdId" :label="option.cdNm" :id="option.cdId"
                        :name="option.id" @change="changOne"></CheckboxBase>
                </li>
            </ul>
        </div>

    </div>
</template>
<script lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue';
import { MODE_SHOW } from '../../../constants/screen.const';
import { MODE_HIDDEN } from '../../../constants/screen.const';
import { MODE_DETAIL } from '../../../constants/screen.const';
import CodeMngModel from '../../../model/common/CodeMngModel'
import CheckboxBase from './CheckboxBase.vue';
import { string } from 'yup';
import { isThisMinute } from 'date-fns';
export default {

    props: {
        modelValue: [String, Number],
        className: String,
        mode: {
            type: String,
            default: ''
        },
        id: String,
        name: String,
        valueDefault: {
            type: String,
            default: ''
        },
        nameDefault: {
            type: String,
            default: ''
        },
        data: Array as () => Array<CodeMngModel>,
        isDisable: {
            type: Boolean,
            default: false
        },
        valueSelect: String,
    }
    , component: {
        CheckboxBase,
    },
    beforeMount() {
        this.showValue = this.valueSelect ? this.valueSelect : '';
    }
    ,
    setup(props) {
        const checkBoxData = ref([]);
        const checkBoxDataAll = ref(false);
        const searchQuery = ref('');
        const showDropdown = ref(false);

        const filteredOptions = computed(() => {
            const query = searchQuery.value.toLowerCase();
            return props.data.filter(option =>
                option.cdNm.toLowerCase().includes(query)
            );
        });

        const toggleDropdown = () => {
            showDropdown.value = !showDropdown.value;
        };
        return {
            searchQuery,
            showDropdown,
            filteredOptions,
            toggleDropdown,
            checkBoxData,
            checkBoxDataAll
        };
    }, data() {
        return {
            selectedOption: '',
            showValue: ''
        }

    },
    methods: {
        selectOption(option: any) {
            this.selectedOption = option.cdId;
            this.showValue = option.cdNm;
            // this.showDropdown = false;
            this.$emit('update:modelValue', this.selectedOption);
        },
        checkAll() {
            if (this.checkBoxData.length < this.filteredOptions.length) {
                this.checkBoxData = [];
                this.showValue = '';
                this.filteredOptions.forEach((element, index) => {
                    this.checkBoxData.push(element.cdId);
                    if (index < this.filteredOptions.length - 1) {

                        this.showValue += element.cdNm + ', ';
                    } else {
                        this.showValue += element.cdNm
                    }
                })

            } else {
                this.checkBoxData = [];
                this.showValue = '';
            }
        },
        changOne() {
            if (this.checkBoxData.length < this.filteredOptions.length) {
                this.checkBoxDataAll = false;


            } else {
                this.checkBoxDataAll = true;
            }
            this.$emit('update:modelValue', this.checkBoxData)
            let newValue = '';
            this.filteredOptions.forEach(element => {
                this.checkBoxData.forEach(item =>{
                if(element.cdId == item){
                  if(!newValue){
                    newValue += element.cdNm;
                  } else {
                    newValue += ','+element.cdNm
                  }
                }
            })
            });
            this.showValue = newValue;
        }
    }
};
</script>
  
<style scoped>
/* Add your styles here */
.select-custom {
    background-image: url(../../../assets/images/icon_arrow_down.png);
    background-position: right;
    text-overflow: ellipsis;
}

.custom-dropdown {
    position: relative;
}

button {
    cursor: pointer;
    padding: 10px;
}

.dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    width: 100%;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    padding: 10px;
    cursor: pointer;
}

.selected {
    background: #abb4c2;
}

.selected {
    background: #abb4c2;
}
</style>

  