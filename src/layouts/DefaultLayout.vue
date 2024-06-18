<template>
  <THeader />
  <div class="page_wrapper max-w-[1920px] mx-auto">
    <router-view v-slot="{ Component, route }">
      <transition :enter-active-class="`animate__faster animate__animated animate__fadeInRight`"
        :leave-active-class="`animate__faster animate__animated animate__fadeOutLeft`" mode="out-in">
        <div ::key="route.name">
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
import THeader from '@/layouts/components/THeader.vue'
import TFooter from '@/layouts/components/TFooter.vue'
import LoadingComponent from '@/components/common/loading/LoaddingComponent.vue'
import { commonStore } from '@/stores/common'

const { loading } = storeToRefs(commonStore())
</script>

<style scoped></style>
