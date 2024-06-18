<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'" :middle="'About us'" :ch_menu="'연혁'"></breadcrumb-top>
      <div class="title mx-[30px] mt-[100px]">
        <p class="text-black font-bold font-['Notokr'] text-[50px]">{{ pageTitle }}</p>
        <ul class="about_nav_link mt-[80px] h-[46px]">
          <li v-for="item in navLink" :key="item.link">
            <router-link class="text-[18px] font-medium" :to="item.link">{{
              item.label
            }}</router-link>
          </li>
        </ul>
        <div class="button_group mt-[40px]">
          <button ref="button_1" type="button" class="" @click="filterYear(2020, 2029, 'button_1')">
            2020 ~ 현재
          </button>
          <button ref="button_2" type="button" class="" @click="filterYear(2010, 2019, 'button_2')">
            2010 ~ 2019
          </button>
          <button ref="button_3" type="button" class="" @click="filterYear(2000, 2009, 'button_3')">
            2000 ~ 2009
          </button>
        </div>
        <div class="card_group mt-[100px]">
          <HistoryCard :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryCard from '../../components/card/HistoryCard.vue'
import jsonData from '../../assets/data/about.json'

export default {
  components: {
    HistoryCard
  },
  setup() {
    return {}
  },
  data() {
    return {
      pageTitle: '연혁',
      breadcrumbItems: jsonData.breadcrumb,
      navLink: jsonData.navLink,
      data: []
    }
  },
  mounted() {
    this.filterYear(2020, 2029, 'button_1')
  },
  methods: {
    filterYear(from, to, refName) {
      const button = this.$refs[refName]

      if (button) {
        if (this.activeButton === refName) {
          button.classList.remove('button_active')
          this.activeButton = null
        } else {
          button.classList.add('button_active')
          if (this.activeButton) {
            this.$refs[this.activeButton].classList.remove('button_active')
          }
          this.activeButton = refName
        }
      }
      this.data = jsonData.history.filter((item) => {
        const year = parseInt(item.title)
        return year >= from && year <= to
      })
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

.button_group {
  display: flex;
  gap: 10px;
}

button {
  padding: 14px 24px;
  border: 1px solid black;
  background-color: white;
  border-radius: 100px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
}
.button_active {
  background-color: #916cff;
  border: none;
  color: white;
}
.card_group {
  display: flex;
  flex-direction: column;
  gap: 70px;
}
@media screen and (max-width: 1023px) {
  .card_group {
    gap: 100px;
  }
}
</style>
