
<template>
    <div class="attach_filebox">
        <div class="top">
            <form ref="fileForm">
                <button type="button">
                    <input ref="inputFile" type="file" :id="id" :name="name" @change="onChange" hidden>
                    <label :for="id" class="btn_white">{{ label }}</label>
                </button>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import { read, utils } from "xlsx";
import { defineEmits } from 'vue'

export default {
    props: {
        modelValue: Array,
        label: String,
        id: String,
        name: String
    },
    data() {
        return {
            data: {},
        };
    },
    methods: {
        onChange(event) {
            var file = event.target.files ? event.target.files[0] : null;
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const bstr = e.target.result;
                    const wb = read(bstr, { type: 'binary' });
                    const wsname = wb.SheetNames;
                    let value = [];
                    wsname.forEach(ws => {
                        let data = utils.sheet_to_json(wb.Sheets[ws]);
                        value.push(data.filter((item, index) => index !== 0));
                    });
                    this.$emit('update:modelValue', value);
                }
                reader.readAsBinaryString(file);
            }
        }
    }
};
</script>
<style scope></style>