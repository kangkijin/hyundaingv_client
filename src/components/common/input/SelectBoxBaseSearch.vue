<template>
    <div class="custom-dropdown">
        <div class="select2_form wd_p100">
            <input @click="toggleDropdown" v-model="searchQuery" :placeholder="placeholder" @keyup="changData" class="selectcustom">
            <div v-if="showDropdown" class="dropdown-list wd100" @mouseleave="toggleDropdown">
                <ul>
                    <li v-for="option in filteredOptions" :class="{'selected' : option.cdNm == showValue}" :key="option.cdId" @click="selectOption(option)">
                        {{ option.cdNm }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue';
import { MODE_SHOW } from '../../../constants/screen.const';
import { MODE_HIDDEN } from '../../../constants/screen.const';
import { MODE_DETAIL } from '../../../constants/screen.const';
import CodeMngModel from '../../../model/common/CodeMngModel'
import { string } from 'yup';
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
        valueSelect :String,
        placeholder: {
            type: String,
            default: ''
        },
    },
    beforeMount(){
        this.showValue =  this.valueSelect
    }
    ,
    setup(props) {
        const searchQuery = ref('');
        const showDropdown = ref(false);

        const filteredOptions =  computed(() => {
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
        };
    }, data() {
        return {
            selectedOption: '',
            showValue : ''
        }

    },
    methods: {
        selectOption(option: any) {
            this.selectedOption = option.cdId;
            this.searchQuery = option.cdNm;
            this.showValue = option.cdNm;
            this.showDropdown = false;
            this.$emit('update:modelValue', this.selectedOption);
        },
        changData(event : any){
            this.showDropdown = true;
            let value = event.target.value;
            this.filteredOptions = this.data.filter(option =>
                option.cdNm.toLowerCase().includes(value.toggleDropdown())
            );
        }
    }
};
</script>
  
<style scoped>
/* Add your styles here */
.selectcustom {
    background-image: url(../../../assets/images/icon_search.svg);
    background-position: right;
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
</style>
  