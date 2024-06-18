<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top
        :p_menu="'Program'"
        :middle="'About us'"
        :ch_menu="'찾아오시는 길'"
      ></breadcrumb-top>

      <div class="title mx-[30px] mt-[100px] mx-auto">
        <p class="text-black font-bold font-['Notokr'] text-[50px]">{{ pageTitle }}</p>
        <ul class="about_nav_link mt-[80px] h-[46px]">
          <li v-for="item in navLink" :key="item.link">
            <router-link class="text-[18px] font-medium" :to="item.link">{{
              item.label
            }}</router-link>
          </li>
        </ul>
        <div class="mt-[80px]">
          <MapCard :data="map"></MapCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapCard from '../../components/card/MapCard.vue'
import jsonData from '../../assets/data/about.json'

export default {
  components: { MapCard },
  setup() {
    return {}
  },
  data() {
    return {
      pageTitle: '찾아오시는 길',
      breadcrumbItems: jsonData.breadcrumb,
      navLink: jsonData.navLink,
      map: jsonData.map
    }
  }
}
</script>

<style lang="scss" scoped>
.about_nav_link {
  display: flex;
  gap: 40px;
}

.about_nav_link li a {
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
}

ul.about_nav_link li:has(a.router-link-exact-active) {
  font-weight: 700;
  color: #916cff;
  border-bottom: solid #916cff 3px;
}

ul.about_nav_link li:has(a.router-link-exact-active) > a {
  font-weight: 700;
}
</style>
