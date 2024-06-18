import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IBreadcrumb, ResponseMessage } from '@/constants/common.const'

export const commonStore = defineStore('common', () => {
  const breadcrumb = ref<IBreadcrumb[]>([])
  const loading = ref<boolean>(false)
  const pageTitle = ref<string>('')
  const responseMessage = ref<ResponseMessage>()
  const checkRequire = ref<boolean>(true);
  const listItemRequire = ref<[]>([]);

  const setListItemRequire = (item: any) => {
    listItemRequire.value.push(item);
  }
  const upDateListItemRequire = (item: any) => {
    listItemRequire.value?.forEach(data => {
      if (data.id == item.id) {
        data.required = item.required;
      }
    })
  }
  const checkItemRequired = () => {
    let count = 0;
    listItemRequire.value?.forEach(item => {
      if (item.required) {
        count++;
      }
    })
    if (count == listItemRequire.value.length) {
      checkRequire.value = true
    } else {
      checkRequire.value = false
    }
  }
  const initBreadCrumb = (value: IBreadcrumb[]) => {

    breadcrumb.value = value
  }

  const setLoading = (isLoading: boolean) => {
    loading.value = isLoading
  }

  const setTitle = (title: string) => {
    pageTitle.value = title
  }

  const setMessage = (message: ResponseMessage) => {
    responseMessage.value = message
  }
  const setIsRequired = (required: boolean) => {
    checkRequire.value = required
  }

  return {
    pageTitle,
    loading,
    breadcrumb,
    initBreadCrumb,
    setLoading,
    setTitle,
    responseMessage,
    setMessage,
    checkRequire,
    setIsRequired,
    listItemRequire,
    setListItemRequire,
    checkItemRequired,
    upDateListItemRequire
  }
})
