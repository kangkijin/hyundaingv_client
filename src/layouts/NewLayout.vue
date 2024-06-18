<template>
  <THeader2 v-if="route.name != 'HomePage'" />
  <div class="page_wrapper max-w-[1920px] mx-auto">
    <router-view v-slot="{ Component, route }">
      <transition
        :enter-active-class="`animate__faster animate__animated animate__fadeInRight`"
        :leave-active-class="`animate__faster animate__animated animate__fadeOutLeft`"
        mode="out-in"
      >
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
    <Transition>
      <LoadingComponent v-show="loading"></LoadingComponent>
    </Transition>
  </div>
  <TFooter />
</template>

<script setup lang="ts">
import TFooter from '@/layouts/components/TFooter.vue'
import THeader2 from '../layouts/components/THeader-v2.vue'

import LoadingComponent from '@/components/common/loading/LoaddingComponent.vue'
import { commonStore } from '@/stores/common'

const route = useRoute()
const { loading } = storeToRefs(commonStore())
</script>

<style scoped></style>
