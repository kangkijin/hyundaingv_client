import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IModal {
  id: string
  isOpen: boolean
}

export const useModal = defineStore('modal', () => {
  const modals = ref<IModal[]>([])

  const registerModal = (modalId: string) => {
    modals.value = [...modals.value, { id: modalId, isOpen: false }]
  }

  const toggleModal = (modalId: string) => {
    modals.value.map((item: IModal) => {
      if (item.id === modalId) {
        item.isOpen = !item.isOpen
      }
    })
  }

  return {
    modals,
    registerModal,
    toggleModal
  }
})
