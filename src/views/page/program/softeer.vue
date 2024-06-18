<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'" :ch_menu="'softeer'"></breadcrumb-top>
      <div class="w-[1320px] mx-auto">
        <div class="title w-full mt-[100px]">
          <p class="text-black font-bold font-['Notokr'] text-[50px]">About Softeer</p>
          <p class="text-[#585D72] font-medium font-['Notokr'] text-[18px] mt-[30px]">
            Softeer는 현대자동차그룹이 꿈꾸는 미래 모빌리티를 구현할SW 엔지니어들의 성장을
            지원합니다.
          </p>
        </div>
        <div class="flex flex-row mt-[100px] items-center gap-5">
          <div class="circle_1 flex items-center justify-center w-[300px] h-[300px] rounded-full">
            <p class="text-white font-bold font-['Notokr'] text-[54px]">Software</p>
          </div>
          <div class="plus h-[34px] w-[34px]"></div>
          <div
            class="flex items-center justify-center w-[300px] h-[300px] rounded-full border-solid border-black border-2 shadow-xl"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/e44d/9b04/ef246766dfdb72e2b8fe3220cdba7600?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DSYn9MUNgxHLJ~SyPg5UCHzPtqsKCaH7x3ZqP1sxyRCF7ynof63s0cTFdYNoM7ekgVQ85Q733cFDq~BbC9INzDU~Dw0AvC6kthQCg7rrk6nHv2jirvNwutCL9bw02rRCsBG~byyF91gKjiMN7AX-kvhH8vFpqnXhUJU~Q0~LYF4860mQBYh0tnGBukv4XBbmNkr1Xi3Q~E9JqBzP0PJpqowcEAk962TFKKErAXVNWZmHxlETUhY~sQiYl2Cuj9NNTmTZ~915QEppZHTVcx-UPINsALz2yLLLIXI2azKmTn~scq4JTgfqCYEX7YtE3hzG4cIhYGAx1ecna9jAETU10w__"
            />
          </div>
          <div class="plus h-[34px] w-[34px]"></div>
          <div class="circle_3 flex items-center justify-center w-[300px] h-[300px] rounded-full">
            <p class="text-white font-bold font-['Notokr'] text-[54px]">Engineer</p>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-row items-center gap-2 mt-[120px]">
          <p class="font-bold font-['Notokr'] text-[40px]">Softeer + Engineer</p>
          <div class="w-[10px] h-[10px] bg-[#916CFF] rounded-full mt-6"></div>
        </div>
        <p class="mt-[40px] font-normal font-['Notokr'] text-[#585D72] text-lg">
          자동차의 패러다임은 세상의 거의 모든 서비스와 연결되어 새로운 모빌리티 서비스를 제공하는
          이동 지원 플랫폼(New Mobility Platform)으로 빠르게 변화하고 있습니다.<br />
          소비자의 데이터를 모아 AI로 분석하여 맞춤형 서비스를 제공하고, 자율주행으로 원하는
          장소까지 자유롭고 안전한 이동을 지원하며, 새로운 친환경 에너지를 기반으로 <br />
          미래 구현될 스마트 시티와 자동차를 연결하는 네트워킹 체계는 SW를 통해 구현될
          것입니다.현대자동차그룹은 '이러한 이동의 진화는 새로운 시간을 만드는 일이며, <br />
          궁극적으로 사람에게 새로운 행복과 즐거움의 기회를 제공하는 일'이라고 생각합니다.
        </p>
        <div class="flex flex-row items-center gap-2 mt-[120px]">
          <p class="font-bold font-['Notokr'] text-[40px]">About Softeer</p>
          <div class="w-[10px] h-[10px] bg-[#916CFF] rounded-full mt-6"></div>
        </div>
        <p class="mt-[40px] font-normal font-['Notokr'] text-[#585D72] text-lg">
          Softeer(소프티어)는 'Software + Engineer'의 합성어로써,현대자동차그룹의 미래 모빌리티를
          이끌어 나갈 SW 우수인재를 위한 온라인 플랫폼입니다. <br />
          SW 역량 진단 코딩 테스트와 SW 전문가들과의 네트워킹 프로그램,SW 부문 채용정보와 다양한
          온라인 교육을 제공합니다.
        </p>

        <div class="list-contract flex flex-wrap gap-12 mt-[40px]">
          <template v-for="(data, key) of softeers" :key="key">
            <program-softeer-card
              width="560px"
              height="400px"
              text_align="left"
              align_item="baseline"
              :canhover="true"
              :list_paragaph="data.paragraph"
            >
              <template #icon>
                <img :src="getImageUrl(data.imagename)" />
              </template>
            </program-softeer-card>
          </template>
        </div>

        <div class="mt-[160px]">
          <p class="font-bold font-['Notokr'] text-[40px]">Softeer 지향점</p>
          <div
            class="flex flex-col items-center justify-center gap-11 w-[1300px] h-[640px] bg-[#10123F] rounded-lg mt-[40px]"
          >
            <div>
              <p class="font-bold font-['Notokr'] text-white text-[40px] text-center">
                현대자동차그룹의 미래 모빌리티를 구현할
              </p>
              <p class="font-bold font-['Notokr'] text-[#916CFF] text-[40px] text-center">
                엔지니어의 성장을 지원합니다.
              </p>
            </div>
            <div>
              <p class="text-white font-normal font-['Notokr'] text-lg text-center leading-8">
                새로운 세상을 만드는 변화의 중심, 그곳에 SW 엔지니어가 있습니다.<br />
                현대자동차그룹은 Softeer를 통해 함께 미래를 만들어나갈 <br />
                SW 분야의 새로운 인재들을 발굴하고 육성하며, 소통하고자 합니다. <br />
                최고의 SW 엔지니어가 되기 위한 여정에 함께 참여해보세요.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-[120px]">
          <p class="font-bold font-['Notokr'] text-[40px]">Softeer 캐릭터</p>
          <p class="text-[#585D72] font-medium font-['Notokr'] text-[18px] mt-[40px]">
            모빌리티 SW 개발 엔지니어가 되고 싶은 다람위 “소프티어”의 성장을 응원합니다.
          </p>
          <div class="flex mt-[115px] justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/7cb8/b68f/cc678761de18b204d026f7cb1e18edd7?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lSgNPe5oEJKilUL0ab47rIGf6UbmRek9SfJI4Kg2iZCoUnrU3jB5-eVRGBb9yC30z8RK0cfV6OsusfCnPCHpznz2ZN8-E1EjPRKX6QbNem3~vcB9Ci-yF5enTT~S7NGrfmFtgtB5XXhUVO28wfOwMI9kSm2VmIaWPnvXZVQmlfdQJYu7HFgki0TUXMD3l0ZD1Bzw9eS6HUv49L5Lquwz7dPxwkS6yrc0aYL7e2TyQRHn32Ay9MX8CdX-zmpypj3rcp7I-mBn100r~8Z7TxttCH6MHjmSW9G3Bp8OATD8aAKziLc27zdL07gd7iSboRA4dYZJst1bQHKrOtFamr8rXw__"
            />
          </div>
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
      tabs: mockdata.program_aboutus_tabs,
      paragraph: mockdata.program_aboutus_paragraph,
      softeers: mockdata.program_softeer,
      tabActive: 0
    }
  },
  methods: {
    changeTab(idx, data) {
      this.tabActive = idx
    },
    getImageUrl(name) {
      return new URL(`../../../assets/images/${name}`, import.meta.url).href
    }
  }
}
</script>
<style scoped lang="scss">
.plus {
  background-image: url('../../../assets/images/icon_plus_color.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.circle_1 {
  background: linear-gradient(to left, rgba(110, 197, 255, 0.9), rgba(163, 219, 255, 0.9));
}
.circle_3 {
  background: linear-gradient(to left, #b197ff, rgba(156, 121, 255, 0.9));
}
</style>
