<template>
  <div v-if="totalItems > 0" class="pagination_wrap">
    <a href="javascript:void(0);" class="func first" @click="gotoPage(1)" :disabled="currentPage === 1">First</a>
    <a href="javascript:void(0);" class="func back" @click="prevPage" :disabled="currentPage === 1">Previous</a>
    <template v-for="page in totalPages" :key="page">
      <a href="javascript:void(0);" @click="gotoPage(page)" :class="{ active: page === currentPage }">{{ page }}</a>
    </template>
    <a href="javascript:void(0);" class="func next" @click="nextPage" :disabled="currentPage === totalPages">Next</a>
    <a href="javascript:void(0);" class="func last" @click="gotoPage(totalPages)"
      :disabled="currentPage === totalPages">Last</a>
  </div>
  <th v-if="!totalItems || totalItems === 0" scope="row" colspan="12">
    <p class="font_gray pd_20">조회된 데이터가 없습니다</p>
  </th>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, watch } from 'vue';

export default defineComponent({
  props: {
    totalItems: {
      type: Number as PropType<number>,
      required: true
    },
    itemsPerPage: {
      type: Number as PropType<number>,
      required: true
    },
    currentPage: {
      type: Number as PropType<number>,
      required: true
    }
  },
  emits: ['page-change'],
  setup(props, { emit }) {
    const currentPage = ref<number>(props.currentPage);

    const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

    function nextPage() {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        emit('page-change', currentPage.value);
      }
    }

    function prevPage() {
      if (currentPage.value > 1) {
        currentPage.value--;
        emit('page-change', currentPage.value);
      }
    }

    function gotoPage(page: number) {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        emit('page-change', currentPage.value);
      }
    }

    watch(() => props.totalItems, () => {
      if (currentPage.value > totalPages.value) {
        currentPage.value = totalPages.value;
        emit('page-change', currentPage.value);
      }
    });

    return {
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      gotoPage
    };
  }
});
</script>

<style scoped>
.pagination_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  margin: 0 5px;
}

.active {
  font-weight: bold;
}
</style>
