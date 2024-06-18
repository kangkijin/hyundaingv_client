<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'"  :middle="'연구장학생'" :ch_menu="'성장과정'"></breadcrumb-top>
      <div class="mx-auto">
        <div class="title w-full mt-[100px]">
          <p>
            <span class="text-black font-bold font-['Notokr'] text-[50px]">선발전형</span>
          </p>
        </div>
        <!--  -->
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
          <li v-if="tabActive === 0">
            <program-grow-step></program-grow-step>

            <div class="mt-14">
              <paragraph-card
                width="1320px"
                text_align="left"
                align_item="left"
                :list_paragaph="note"
              >
              </paragraph-card>
            </div>
            <div class="mt-[70px]">
              <p>
                <span class="font-normal text-[28px] text-[#916CFF]">STEP 01</span>
                <span class="font-bold font-['Notokr'] text-[28px]">서류전형 </span>
              </p>
              <p class="font-normal font-['Notokr'] text-lg mt-[20px]">
                · 모집 직무와 연관된 지원자 분의 교육/경험 중심으로 자기소개서를 작성 해주시면
                됩니다.
              </p>
              <p class="font-normal font-['Notokr'] text-lg mt-2">
                · 지원서를 기반으로 전공, 연구 분야 등을 검토하여 종합적으로 모집 분야와의 연관성을
                판단합니다.
              </p>
              <p class="font-normal font-['Notokr'] text-lg mt-2">
                · 현대자동차그룹이 추구하는 인재상 및 핵심가치와 부합하는지를 면밀하게 검증합니다.
              </p>
            </div>
            <div class="mt-[160px] \">
              <p class="font-bold font-['Notokr'] text-[40px] mt-3">
                성장 과정, 주요 혜택 등 다른 정보가 궁금하다면?
              </p>
            </div>
            <!-- iamge -->
            <div class="images flex flex-row w-full flex-wrap gap-[50px] mt-[50px] w-full">
              <template v-for="(item, key) of imageList" :key="key">
                <m-image-card
                  :url="item.url"
                  :link="item.link"
                  width="556px"
                  height="320px"
                  backgroundSize="cover"
                >
                  <template v-slot:content>
                    <p class="text-black font-medium font-['Notokr'] text-[28px] text-center mt-12">
                      {{ item.title }}
                    </p>
                  </template>
                </m-image-card>
              </template>
            </div>
          </li>
          <li v-else :key="tabActive">
            <img
              class="mt-[80px] transition-image"
              :src="`/images/image_grow_step_tab_${tabActive}.png`"
              :alt="`dep_${tabActive}`"
            />
          </li>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { mockdata } from '../../../constants/mocdata.js'
export default {
  data() {
    return {
      currentPage: 1,
      tabs: mockdata.program_tabs,
      note: mockdata.program_grow_up,
      imageList: mockdata.program_grow_up_images,
      tabActive: 0
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
