<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'" :ch_menu="'선발전형'"></breadcrumb-top>
      <div class="max-w-[1320px] mx-auto mt-[100px]">
        <p class="mx-auto text-black font-bold font-['Notokr'] text-[50px]">선발전형</p>
      </div>

      <div class="tabs flex gap-8 mt-[70px] h-[46px]">
        <template v-for="(tab, idx) of tabs" :key="idx">
          <div
            class="font-medium font-['Notokr'] text-[18px] cursor-pointer"
            :class="{ tabActive: tabActive == idx }"
            @click="changeTab(idx, tab)"
          >
            {{ tab }}
          </div>
        </template>
      </div>
      <TransitionGroup name="list" tag="ul">
        <li :key="tabActive">
          <img
            class="mt-[80px] transition-image"
            :src="`/images/contract_department_${tabActive}.png`"
            :alt="`dep_${tabActive}`"
          />
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 0,
      tabs: [
        '현대자동차 계약학과 - 서울, 연세, 고려, 한양대학교',
        '현대모비스 계약학과 - 성균관대학교',
        '현대모비스 계약학과 - 서강대학교'
      ]
    }
  },
  methods: {
    changeTab(idx, data) {
      this.tabActive = idx
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  .tabActive {
    border-bottom: solid #a384ff 3px;
    color: #916cff;
  }
}
img {
  width: 1320px;
}
.title {
  padding: 10px;
  background-color: rgba(240, 240, 240, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 22px;
  font-weight: 700;
  line-height: 29px;
}
.active {
  background-color: rgba(255, 229, 0, 1);
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
