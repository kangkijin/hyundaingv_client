<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'" :ch_menu="'계약학과'"></breadcrumb-top>
      <div class="max-w-[1320px] mx-auto mt-[100px]">
        <div class="title w-full mt-10">
          <p class="text-black font-bold font-['Notokr'] text-[50px]">계약학과</p>
        </div>
        <div class="header flex flex-row justify-between max-w-[1265px] ml-[50px] mt-[100px]">
          <div class="">
            <div class="w-5"></div>
            <p class="text-black font-bold font-['Notokr'] text-[40px]">
              우리는 현대자동차그룹의<br />꿈을 실현하기 위한
            </p>
            <div class="flex flex-row gap-3">
              <span class="text-black font-bold font-['Notokr'] text-[40px]">길을 설계합니다</span>
              <div class="w-3 h-3 rounded-full bg-[#A283F3] mt-8"></div>
            </div>
          </div>
          <p class="text-[#585D72] font-normal font-['Notokr'] text-lg w-[560px]">
            현대자동차그룹이 꿈꾸는 ‘안전하고 자유로운 이동과 평화로운 삶’을 함께 실현해 나아갈
            인재를 양성하기 위해 고민하고 또 고민합니다.<br />
            그 결과, 미래모빌리티를 향한 계약학과만의 교육 과정을 설계할 수 있었고 이 과정을 통해
            우수한 미래 모빌리티 인재를 양성할 수 있다 자부합니다.
          </p>
        </div>
        <div class="content max-w-[1265px] mt-[66px] pl-[90px]">
          <button
            class="text-white font-medium font-['Notokr'] text-lg bg-[#916CFF] px-3 py-2 rounded-3xl"
          >
            현대자동차
          </button>
          <div class="list-image grid gap-x-[230px] gap-y-24 mt-[60px]">
            <template v-for="(item, key) of imageList" :key="key">
              <m-image-card
                :url="item.url"
                width="444px"
                height="444px"
                backgroundSize="cover"
                :class="`${item.rowClass}`"
              >
                <template v-slot:content>
                  <p
                    class="text-[#585D72] max-w-[444px] font-normal font-['Notokr'] text-lg text-center whitespace-pre-line mt-[50px]"
                  >
                    {{ item.content }}
                  </p>
                  <p
                    class="text-black max-w-[444px] font-bold font-['Notokr'] text-3xl text-center whitespace-pre-line mt-[20px]"
                  >
                    {{ item.title }}
                  </p>
                  <p
                    class="text-[#585D72] max-w-[444px] font-normal font-['Notokr'] text-lg text-center whitespace-pre-line mt-[20px]"
                  >
                    {{ item.note }}
                  </p>
                </template>
              </m-image-card>
            </template>
          </div>
          <button
            class="text-white font-medium font-['Notokr'] text-lg bg-[#916CFF] px-3 py-2 mt-[160px] rounded-3xl"
          >
            현대모비스
          </button>
          <div class="list-image grid gap-x-[230px] gap-y-24 mt-[50px]">
            <template v-for="(item, key) of imageList2" :key="key">
              <m-image-card
                :url="item.url"
                width="444px"
                height="444px"
                backgroundSize="cover"
                :class="`${item.rowClass}`"
              >
                <template v-slot:content>
                  <p
                    class="text-[#585D72] max-w-[444px] font-normal font-['Notokr'] text-lg text-center whitespace-pre-line mt-[50px]"
                  >
                    {{ item.content }}
                  </p>
                  <p
                    class="text-black max-w-[444px] font-bold font-['Notokr'] text-3xl text-center whitespace-pre-line mt-[20px]"
                  >
                    {{ item.title }}
                  </p>
                  <p
                    class="text-[#585D72] max-w-[444px] font-normal font-['Notokr'] text-lg text-center whitespace-pre-line mt-[20px]"
                  >
                    {{ item.note }}
                  </p>
                </template>
              </m-image-card>
            </template>
          </div>
        </div>
        <div class="list-contract flex justify-between mt-[120px]">
          <template v-for="(data, key) of contract" :key="key">
            <router-link :to="data.link">
              <paragraph-card-icon
                width="420px"
                height="360px"
                text_align="center"
                align_item="center"
                :canhover="true"
                :list_paragaph="data.paragraph"
              >
                <template #icon>
                  <img :src="getImageUrl(data.imagename)" style="height: 38px" />
                </template>
              </paragraph-card-icon>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockdata } from '../../../constants/mocdata.js'
export default {
  data() {
    return {
      imageList: mockdata.program_motor,
      imageList2: mockdata.program_motor_2,
      contract: mockdata.program_contract
    }
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../../../assets/images/${name}`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.list-contract {
  :deep(.conntent_) {
    height: 72px;
  }
}
</style>
