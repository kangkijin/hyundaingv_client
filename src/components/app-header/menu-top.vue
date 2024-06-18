<template>
  <div
    class="menu-top max-[1024px]:ml-5 h-20 flex flex-row justify-between max-w-[1920px] pl-[70px]"
    :class="{ 'mx-auto': !isHome }"
  >
    <div class="logo grid items-center justify-center px-0 py-7 gap-x-2">
      <img class="row-start-1 row-end-3" src="@/assets/images/logo_small.png" />
      <p class="text-white row-start-1 row-end-2 font_12" :class="{ '!text-black': !isHome }">
        HYUNDAI MOTOR GROUP
      </p>
      <p class="text-white row-start-2 row-end-3 font_20 lh_10" :class="{ '!text-black': !isHome }">
        미래모빌리티 인재 육성
      </p>
    </div>
    <div class="navigate max-[480px]:!hidden">
      <p class="text-white font_20" :class="{ '!text-black': !isHome }">
        <router-link to="/apply">Apply</router-link>
      </p>
      <p class="text-white font_20" :class="{ '!text-black': !isHome }">
        <router-link to="/program">Program</router-link>
      </p>
      <p class="text-white font_20" :class="{ '!text-black': !isHome }">
        <router-link to="/people">People</router-link>
      </p>
    </div>
    <div class="redirect-btn flex">
      <div class="flex justify-center items-center h-[90px] w-[90px] bg-black">
        <button
          class="flex justify-center h-[30px] w-[30px]"
          type="button"
          id="btn_menu"
          title="menu open"
        ></button>
      </div>
      <div
        class="goto-partner grid gap-x-4 gap-y-0 items-center justify-items-start w-[90px] :w-[90px] px-[14px] py-[14px]"
      >
        <p class="font_18 text-white">Partners</p>
        <p class="flex justify-center items-center text-white gap-2">
          Site <img class="h-4 row-[1_/_3]" src="@/assets/images/arrow_right_alt.svg" />
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  isHome: boolean
}>()
</script>
<style scoped lang="scss">
.menu-top {
  height: 90px;
  .navigate {
    display: flex;
    align-items: center;
    gap: 100px;
    justify-content: center;
  }
  .logo {
    a {
      width: 230px;
      height: 40px;
      background-size: 230px 40px;
      background-repeat: no-repeat;
    }
  }
  .redirect-btn {
    #btn_menu {
      background: url('@/assets/images/icon_hamburger.svg') no-repeat center;
      background-size: contain;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(259deg) brightness(104%)
        contrast(102%);
    }
    .goto-partner {
      background-image: linear-gradient(to right, #a384ff 0%, #6ec5ff 99.57%);
    }
  }
}
</style>
