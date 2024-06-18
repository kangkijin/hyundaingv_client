<template>
  <div class="flex flex-col mt-10 max-w-[1920px]">
    <div class="breadcrumb flex flex-row items-center justify-end gap-5 mx-auto mt-10">
    <div class="btn_icon home">{{ breadcrumbItems.nav }}</div>
      <div class="dot bg-[#898D9C] rounded-full w-[6px] h-[6px]"></div>
      <p>{{ breadcrumbItems.menu }}</p>
      <div class="dot bg-[#898D9C] rounded-full w-[6px] h-[6px]"></div>
      <p class="font-bold">{{ breadcrumbItems.current }}</p>
    </div>
    <div class="title w-[1320px] ml-[300px] mt-8">
      <p class="text-black font-bold font-['Notokr'] text-[50px]">{{ pageTitle }}</p>
      <ul class="about_nav_link mt-[80px] mb-[80px]">
        <li v-for="item in navLink" :key="item.link">
          <router-link class="text-lg" :to="item.link">{{ item.label }}</router-link>
        </li>
      </ul>
      <figure>
        <img class="mb-[108px]" :src="item.imageInfo" alt="imageInfo" :style="imageStyle" />
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import jsonData from '../assets/data/about.json'

export default {
  data() {
    return {
      pageTitle: '연혁',
      breadcrumbItems: jsonData.breadcrumb,
      navLink: jsonData.navLink,
      item: jsonData.about,
      imageStyle: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '24px'
      }
    }
  }
}
</script>

<style>
.about_nav_link {
  display: flex;
  gap: 40px;
}
.about_nav_link li a {
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
}
</style>
