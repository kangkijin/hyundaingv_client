<template>
  <div
    ref="menu_top"
    class="menu-top h-20 flex flex-row justify-between max-w-[1920px]"
    :class="{ 'mx-auto': !isHome }"
  >
    <router-link to="/">
      <div class="logo grid items-center justify-center pl-[20px] 2xl:pl-[70px] px-0 py-7 gap-x-2">
        <img class="row-start-1 row-end-3" src="@/assets/images/logo_small.png" />
        <p
          class="text-white row-start-1 row-end-2 text-xs font-medium active_1"
          :class="{ logo_site: !isHome }"
        >
          HYUNDAI MOTOR GROUP
        </p>
        <p
          class="text-white row-start-2 row-end-3 font-bold text-xl lh_10 active_1"
          :class="{ logo_site: !isHome }"
        >
          미래모빌리티 인재 육성
        </p>
      </div>
    </router-link>
    <div class="flex justify-center items-center">
      <ul class="menu">
        <li
          class="nav_routes"
          v-for="nav in routes"
          :key="nav.link"
          @mouseenter="mouseIn"
          @mouseleave="mouseLeave"
        >
          <div
            class="text-white block h-full"
            :class="{ active: route.path.includes(nav.link), '!text-black': !isHome }"
          >
            <p class="text-[20px] tracking_nav font-medium leading-[90px]" :to="nav.link">
              {{ nav.label }}
            </p>
          </div>
          <div class="menu_bar_lv">
            <div class="flex justify-center">
              <div class="menu_bar_lv_frist"></div>
              <div class="menu_bar_lv_group menu_bar_lv_middle mt-[40px]">
                <ul v-for="nav_lv2 in nav.menu_lv2" class="nav_bar" :key="nav_lv2.label">
                  <li class="mb-[20px]">
                    <router-link :to="nav_lv2.link">{{ nav_lv2.label }}</router-link>
                  </li>
                  <ul v-for="nav_lv3 in nav_lv2.menu_lv3" class="nav_bar_lv" :key="nav_lv3.label">
                    <li class="mb-[20px]">
                      <router-link :to="nav_lv3.link">{{ nav_lv3.label }}</router-link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div class="menu_bar_lv_end"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="redirect-btn flex justify-between w-[440px] h-[90] redirect_desktop">
      <div class="youtube flex justify-center items-center h-[90px] w-[110px] bg-[#383C4E]">
        <img src="../../assets/images/icon_youtube.svg" class="w-[65px] h-[27px]" />
      </div>
      <div class="flex justify-center items-center h-[90px] w-[90px] bg-black">
        <button
          class="flex justify-center h-[30px] w-[30px]"
          type="button"
          id="btn_menu"
          title="menu open"
        ></button>
      </div>
      <!-- <div>
        <img src="../../assets/images/ngv-huyndai-youtube.png" class="h-[90px] w-60" />
      </div> -->
    </div>
    <div class="redirect-btn flex redirect_mobile">
      <div class="flex justify-center items-center h-[90px] w-[90px] bg-black">
        <button
          class="flex justify-center h-[30px] w-[30px]"
          type="button"
          id="btn_menu"
          title="menu open"
          @click="openMenuHumberger(true)"
        ></button>
      </div>
      <div
        class="goto-partner grid gap-x-4 gap-y-0 items-center justify-items-start w-[90px] :w-[90px] px-[14px] py-[14px]"
      >
        <p class="font_18 text-white">Partners</p>
        <p class="flex justify-center items-center text-white font_18 gap-2">
          Site <img class="h-4 row-[1_/_3]" src="@/assets/images/arrow_right_alt.svg" />
        </p>
      </div>
    </div>
  </div>
  <div ref="over_lay" class="overlay"></div>
  <div ref="btn" class="hamberger_menu">
    <div class="flex justify-center items-center h-[82px] w-[82px] ml-auto">
      <button
        class="close-icon"
        type="button"
        id="btn_menu"
        title="menu open"
        @click="openMenuHumberger(false)"
      ></button>
    </div>
    <div class="pl-[40px] pr-[20px]">
      <ul class="hb_menu_lv1 py-[15px]">
        <li v-for="(nav, index) in routes" :key="index">
          <div class="flex justify-between" @click="openMenuLv2(index)">
            <span>{{ nav.label }}</span>
            <img src="/images/icon_down.svg" alt="plus" />
          </div>
          <ul ref="menu_lv2" class="hb_menu_lv2" v-if="nav.menu_lv2.length">
            <li
              v-for="(nav_lv2, index_lv2) in nav.menu_lv2"
              :key="index_lv2"
              :style="{ display: nav_lv2.label ? 'inline-block' : 'none' }"
            >
              <div
                v-if="nav_lv2.menu_lv3.length"
                class="flex justify-between"
                @click="openMenuLv3(index_lv2)"
              >
                <span>{{ nav_lv2.label }}</span>
                <img v-if="nav_lv2.menu_lv3.length" src="/images/icon_menu_plus.svg" alt="plus" />
              </div>
              <router-link v-else :to="nav_lv2.link">{{ nav_lv2.label }}</router-link>
              <ul ref="menu_lv3" class="hb_menu_lv3" v-if="nav_lv2.menu_lv3.length">
                <li>
                  <router-link :to="nav_lv2.link">{{ nav_lv2.label }}</router-link>
                </li>
                <li
                  v-for="(nav_lv3, index_lv3) in nav_lv2.menu_lv3"
                  :key="index_lv3"
                  :style="{ display: nav_lv3.label ? 'inline-block' : 'none' }"
                >
                  <router-link :to="nav_lv3.link">{{ nav_lv3.label }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

defineProps<{
  isHome: boolean
}>()

const route = useRoute()
const menu_top = ref(null)
const btn = ref(null)
const over_lay = ref(null)

const menu_lv2 = ref(null)
const openlv2 = ref(true)
const curentLv2Index = ref(null)

const menu_lv3 = ref(null)
const openlv3 = ref(true)
const curentLv3Index = ref(null)

const routes = ref([
  {
    label: 'Apply',
    link: '/apply',
    menu_lv2: [
      {
        label: '선발공고',
        link: '/apply/notice',
        menu_lv3: []
      },
      {
        label: 'FAQ',
        link: '/apply/faq',
        menu_lv3: []
      },
      {
        label: 'Q&A',
        link: '/apply/qa',
        menu_lv3: []
      },
      {
        label: '',
        link: '',
        menu_lv3: []
      }
    ]
  },
  {
    label: 'Program',
    link: '/program',
    menu_lv2: [
      {
        label: '연구장학생',
        link: '/program/receive',
        menu_lv3: [
          { label: '선발전형', link: '/program/receive/system' },
          { label: '성장과정', link: '/program/receive/growstep' },
          { label: '주요혜택', link: '/program/receive/benifits' }
        ]
      },
      {
        label: '계약학과',
        link: '/program/contract',
        menu_lv3: [
          { label: '학과소개', link: '/program/contract/introduce' },
          {
            label: '선발전형',
            link: '/program/contract/department'
          },
          {
            label: '성장과정',
            link: '/program/contract/process'
          },
          { label: '주요혜택', link: '/program/contract/benifits' }
        ]
      },
      {
        label: 'Softeer',
        link: '/program/softeer',
        menu_lv3: []
      },
      {
        label: 'About us',
        link: '/program/about',
        menu_lv3: []
      }
    ]
  },
  {
    label: 'People',
    link: '/people',
    menu_lv2: [
      {
        label: '',
        link: '',
        menu_lv3: []
      },
      {
        label: '',
        link: '',
        menu_lv3: []
      },
      {
        label: 'Our Story',
        link: '/people/ourstory',
        menu_lv3: []
      },
      {
        label: 'Careers',
        link: '/people/careers',
        menu_lv3: []
      }
    ]
  }
])

function mouseIn() {
  menu_top.value.classList.add('menu_top_hover')
}
function mouseLeave() {
  menu_top.value.classList.remove('menu_top_hover')
}
function openMenuHumberger(value) {
  if (value) {
    btn.value.classList.add('menu-open')
    over_lay.value.classList.add('menu-open')
  } else {
    btn.value.classList.remove('menu-open')
    over_lay.value.classList.remove('menu-open')
  }
}
function openMenuLv2(index) {
  if (curentLv2Index.value === null) {
    curentLv2Index.value = index
  }

  if (curentLv2Index.value !== index) {
    menu_lv2.value[0].classList.remove('open')
    menu_lv2.value[1].classList.remove('open')
    menu_lv2.value[2].classList.remove('open')
    curentLv2Index.value = index
    openlv2.value = true
  }

  if (openlv2.value) menu_lv2.value[index].classList.add('open')
  else menu_lv2.value[index].classList.remove('open')
  openlv2.value = !openlv2.value
}
function openMenuLv3(index) {
  if (curentLv3Index.value === null) {
    curentLv3Index.value = index
  }

  if (curentLv3Index.value !== index) {
    curentLv3Index.value = index
    openlv3.value = true
  }

  if (openlv3.value) menu_lv3.value[index].classList.add('open')
  else menu_lv3.value[index].classList.remove('open')
  openlv3.value = !openlv3.value
}
</script>
<style scoped lang="scss">
.menu-top {
  height: 90px;
  .navigate {
    display: flex;
    align-items: center;
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
    background: url('@/assets/images/ngv-huyndai-youtube.png') no-repeat center;
    background-size: contain;
    #btn_menu {
      background: url('@/assets/images/icon_hamburger.svg') no-repeat center;
      background-size: contain;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(259deg) brightness(104%)
        contrast(102%);
    }
    .goto-partner {
      background-image: linear-gradient(to right, #a384ff 0%, #6ec5ff 99.57%);
    }
    .youtube {
    }
  }
}

.menu_top_hover {
  background-color: white;
  color: black;

  .menu {
    & > li > div {
      color: black;
    }
  }
  .active_1 {
    color: rgba(0, 44, 95, 1);
  }
  .menu_bar_lv {
    .nav_bar_lv > li > a {
      font-size: 18px;
      line-height: 28px;
    }
  }
}

.menu {
  display: flex;
  height: 100%;
  gap: 30px;
  & > li {
    display: block;
    text-align: center;
    line-height: 90px;
  }

  & > li:hover > .menu_bar_lv {
    background-color: rgba(255, 255, 255, 1);
    height: auto;
    opacity: 1;
    z-index: 1;
  }
}

.active {
  color: #916cff;
  border-bottom: solid #916cff 3px;
}

.menu_bar_lv {
  width: 100%;
  height: 0;
  position: absolute;
  top: 90px;
  left: 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 1);
  transition: opacity 0.2s ease-in-out;
  z-index: 1;
  opacity: 0;

  .menu_bar_lv:hover {
    background-color: rgba(255, 255, 255, 1);
    height: auto;
    z-index: 1;
    opacity: 1;
  }

  .nav_bar {
    width: 170px;
    & > li {
      text-align: start;
    }
    .router-link-active {
      color: rgba(34, 34, 34, 1);
      font-size: 18px;
      line-height: 28px;
      font-weight: 700;
    }
    .router-link-exact-active {
      color: #916cff;
    }
  }
  .nav_bar > li > a {
    color: rgba(88, 93, 114, 1);
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    letter-spacing: -0.02em;
  }
  .menu_bar_lv_group {
    display: flex;
    justify-content: center;
  }
  .nav_bar_lv {
    & > li {
      text-align: start;
    }
    & > li > a {
      color: rgba(88, 93, 114, 1);
      font-size: 16px;
      line-height: 26px;
      font-weight: 500;
      letter-spacing: -0.02em;
    }
  }
}

div.active > p {
  color: #916cff;
  font-weight: 700;
}

.logo_site {
  color: rgba(0, 44, 95, 1);
}
.tracking_nav {
  letter-spacing: 0.3px;
}
.menu_bar_lv_frist {
  padding-right: 50px;
}
.menu_bar_lv_middle {
}
.menu_bar_lv_end {
}
.nav_routes {
  padding-left: 20px;
  padding-right: 20px;
}
.redirect_desktop {
  display: flex;
}
.redirect_mobile {
  display: none;
}
@media screen and (max-width: 1536px) {
  .menu_bar_lv_frist {
    padding-right: 0px;
  }
}
@media screen and (max-width: 1366px) {
  .menu {
    gap: 0px;
  }
}
@media screen and (min-width: 1100px) {
  .nav_routes {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media screen and (max-width: 1023px) {
  .nav_routes {
    padding-left: 50px;
    padding-right: 50px;
  }
  .menu {
    display: none;
  }
  .redirect_desktop {
    display: none;
  }
  .redirect_mobile {
    display: flex;
  }
  .hb_menu_lv1 {
    & > li {
      font-size: 30px;
      line-height: 40px;
      font-weight: 500;
      letter-spacing: -0.03rem;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
  .hb_menu_lv2 {
    & > li {
      font-size: 18px;
      line-height: 47px;
      font-weight: 500;
      letter-spacing: -0.03rem;
      color: rgba(34, 34, 34, 1);
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
  .hb_menu_lv3 {
    & > li {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      letter-spacing: -0.03rem;
      color: rgba(137, 141, 156, 1);
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .hb_menu_lv1,
  .hb_menu_lv2,
  .hb_menu_lv3 {
    list-style: none;
    padding: 0;
  }

  .hb_menu_lv1 li,
  .hb_menu_lv2 li,
  .hb_menu_lv3 li {
    cursor: pointer;
  }

  .hb_menu_lv2,
  .hb_menu_lv3 {
    margin-left: 20px;
    display: none;
  }
  .open.hb_menu_lv2 {
    display: flex;
    flex-direction: column;
  }
  .open.hb_menu_lv3 {
    display: flex;
    flex-direction: column;
  }
}

.menu-open.hamberger_menu {
  left: 0;
}
.menu-open.overlay {
  display: block;
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.hamberger_menu {
  position: fixed;
  top: 0;
  left: -375px;
  width: 375px;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  transition: left 0.3s;
  z-index: 1000;

  .close-icon {
    width: 24px;
    height: 24px;
    position: relative;
    cursor: pointer;
    right: 0;
    top: 0;
  }

  .close-icon:before,
  .close-icon:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 24px;
    background-color: black;
    left: 12px;
  }

  .close-icon:before {
    transform: rotate(45deg);
  }

  .close-icon:after {
    transform: rotate(-45deg);
  }
}
</style>
