<template>
    <select class="select_component_custom" :id="id" :name="name" v-if="(mode == modeShow || mode == '') && !isDisable"
        :class="className" :value="modelValue" @input="updateValue" @focusout="focusout" @change="change">
        <option v-if="nameDefault != null && nameDefault != ''" :value="valueDefault">{{ nameDefault }}</option>
        <option v-for="item in data" :key="item.cdId" :value="item.cdId">{{ item.cdNm }}</option>
    </select>
    <select class="select_component_custom" :id="id" :name="name" v-if="mode == modeHidden" :class="className"
        :value="modelValue" @input="updateValue" @focusout="focusout" @change="change" hidden>
        <option v-if="nameDefault != null && nameDefault != ''" :value="valueDefault">{{ nameDefault }}</option>
        <option v-for="item in data" :key="item.cdId" :value="item.cdId">{{ item.cdNm }}</option>
    </select>
    <select class="select_component_custom" :id="id" :name="name" v-if="isDisable" :class="className" :value="modelValue"
        @input="updateValue" @focusout="focusout" @change="change" disabled>
        <option v-if="nameDefault != null && nameDefault != ''" :value="valueDefault">{{ nameDefault }}</option>
        <option v-for="item in data" :key="item.cdId" :value="item.cdId">{{ item.cdNm }}</option>
    </select>
    <label v-if="mode == modeDetail">{{ modelValue }}</label>
</template>
<script lang="ts">
import { MODE_SHOW } from '../../../constants/screen.const';
import { MODE_HIDDEN } from '../../../constants/screen.const';
import { MODE_DETAIL } from '../../../constants/screen.const';
import CodeMngModel from '../../../model/common/CodeMngModel'

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
        }
    },
    emits: [
        'update:modelValue',
        'focusout',
        'change'
    ],
    inheritAttrs: false,
    setup(props, { emit }) {
        const updateValue = (event: any) => emit('update:modelValue', event.target.value);
        const focusout = () => {
            emit('focusout');
        }
        const change = () => {
            emit('change');
        }
        const modeShow = MODE_SHOW;
        const modeHidden = MODE_HIDDEN;
        const modeDetail = MODE_DETAIL;

        return {
            updateValue,
            focusout,
            change, modeShow, modeHidden, modeDetail
        };
    },
};
</script>
<style scoped>
.select_component_custom {
    padding: 0;
    width: 100%;
    height: 40px;
    border: 1px solid #D6DBE2;
    border-radius: 4px;
    text-align: left;
    background: #fff;
    border-radius: 4px;
}
</style>