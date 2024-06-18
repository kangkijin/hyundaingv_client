<template>
  <input
    :id="id"
    :name="name"
    v-if="(mode == modeShow || mode == '') && !isDisable"
    :class="classInput"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
    @focusout="focusout"
    @change="change"
    @focus="focus"
    @keyup="focusout"
  />
  <input
    :id="id"
    :name="name"
    v-if="mode == modeHidden"
    :class="classInput"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
    @focusout="focusout"
    @change="change"
    hidden
    @focus="focus"
  />
  <input
    :id="id"
    :name="name"
    v-if="type == 'password' && mode == 'password'"
    :class="classInput"
    type="password"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
    @focusout="focusout"
    @change="change"
    @focus="focus"
  />
  <input
    :id="id"
    :name="name"
    v-if="isDisable"
    :class="classInput"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
    @focusout="focusout"
    @change="change"
    disabled
    @focus="focus"
  />
  <label v-if="mode == modeDetail">{{ modelValue }}</label>
  <label name="errInput" v-if="isErrInput" style="color: red">* 미입력 항목이 있습니다</label>
  <label v-if="type == ''"></label>
</template>
<script lang="ts">
import { format } from 'date-fns'
import { MODE_SHOW } from '../../../constants/screen.const'
import { MODE_HIDDEN, TYPE_FORMAT_DATE } from '../../../constants/screen.const'
import { MODE_DETAIL } from '../../../constants/screen.const'
import { commonStore } from '../../../stores/common'
import { ref, watch } from 'vue'
export default {
  props: {
    modelValue: [String, Number, Date],
    placeholder: String,
    className: String,
    mode: String,
    id: String,
    name: String,
    isDisable: {
      type: Boolean,
      default: false
    },
    isRequire: {
      type: Boolean,
      default: false
    },
    isCheck: {
      type: Boolean,
      default: false
    },
    type: String
  },
  emits: ['update:modelValue', 'focusout', 'change', 'focus'],
  inheritAttrs: false,
  setup(props, { emit }) {
    const typeFormatDate = TYPE_FORMAT_DATE
    const showValue = ''
    const isErrInput = ref<boolean>(false)
    const classInput = ref<string>(props.className)
    const store = commonStore()
    const updateValue = (event: any) => emit('update:modelValue', event.target.value)
    const focusout = (event: any) => {
      let value = event.target.value
      if (!value && props.isRequire && (props.mode == MODE_SHOW || props.mode == '')) {
        store.upDateListItemRequire({ id: props.id, required: false })
        isErrInput.value = true
        classInput.value = props.className + ' boder_err'
        store.checkItemRequired()
      } else {
        store.upDateListItemRequire({ id: props.id, required: true })
        isErrInput.value = false
        classInput.value = props.className
        store.checkItemRequired()
      }
      emit('focusout')
    }
    const change = (event: any) => {
      emit('change')
    }
    const focus = () => {
      emit('focus')
    }
    const modeShow = MODE_SHOW
    const modeHidden = MODE_HIDDEN
    const modeDetail = MODE_DETAIL
    //check requried
    watch(
      () => props.isCheck,
      (newValue, oldValue) => {
        if (!props.modelValue && props.isRequire && (props.mode == MODE_SHOW || props.mode == '')) {
          //store.setIsRequired(false)
          store.upDateListItemRequire({ id: props.id, required: false })
          isErrInput.value = true
          classInput.value = props.className + ' boder_err'
          store.checkItemRequired()
        } else {
          //store.setIsRequired(true)
          store.upDateListItemRequire({ id: props.id, required: true })
          isErrInput.value = false
          classInput.value = props.className
          store.checkItemRequired()
        }
      }
    )
    return {
      updateValue,
      focusout,
      change,
      modeShow,
      modeHidden,
      modeDetail,
      focus,
      store,
      isErrInput,
      classInput,
      typeFormatDate,
      showValue
    }
  },
  beforeMount() {
    if (this.isRequire && !this.modelValue) {
      this.store.setIsRequired(false)
      this.store.setListItemRequire({ id: this.id, required: false })
    }
  },
  mounted() {
    if (this.type == this.typeFormatDate && this.modelValue) {
      this.showValue = format(this.modelValue, 'yyyy-MM-dd')
    }
  }
}
</script>
<style scoped>
.boder_err {
  border-color: red;
}
</style>
