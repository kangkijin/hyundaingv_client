<template>
  <div class="max-w-[1920px] m-auto overflow-x-auto">
    <video autoplay muted loop id="banner-video">
      <source src="../assets/images/video_banner.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <div class="header w-full">
      <!--      <menu-top :isHome="true"></menu-top>-->
      <menu-top-responsive :isHome="true"></menu-top-responsive>
      <div class="slogan flex flex-col gap-10 w-[866px] h-[320px] relative left-32">
        <p
          class="big text-white font-black font-['Notokr'] leading-[100px] tracking-[0.03em] w-[982px] h-[304px] text-[90px] max-[480px]:w-[300px]"
        >
          We’re shaping the <br />
          Future of <br />
          Mobility with Talent
        </p>
        <p
          class="small text-white font-medium font_22 leading-9 font-['Notokr'] tracking-[0.03em] w-[380px] h-[108px] text-[64px]"
        >
          우리는 더 나은 미래를 꿈꾸며<br />
          현대자동차그룹 모빌리티 인재의 성장을<br />
          적극 지원합니다.
        </p>
      </div>
      <div
        class="flex flex-col items-center self-center h-20 cursor-pointer"
        @click="scrollToRef('about_us')"
      >
        <p class="text-white text-sm font-medium font-['Notokr'] tracking-[0.03em]">SCROLL</p>
        <img src="../assets/images/icon-mouse-scroll.svg" class="w-[20px] h-[32px]" />
      </div>
    </div>
    <!-- ABOUT US -->
    <div
      class="about_us flex justify-between max-w-[1320px] mt-60 mx-auto max-[1024px]:px-12"
      ref="about_us"
    >
      <div class="content w-[326px] flex flex-col">
        <p class="text-2xl font-normal tracking-[0.03em] font-['Notokr']">About Us</p>
        <p class="text-[60px] font-bold leading-[60px] mt-[30px]">미래모빌리티</p>
        <p class="text-[60px] font-bold leading-[60px] mt-5">인재 육성</p>
        <p class="text-lg w-[255px] font-medium font_gray mt-[30px]">
          현대자동차그룹의 미래 모빌리티를<br />
          이끌어 나갈 미래인재를 위한<br />
          온라인 플랫폼입니다.
        </p>
      </div>
      <div class="images grid gap-12">
        <div class="item_1 flex justify-end hg_400 w-[400px] rounded-3xl row-[2_/_6]">
          <div class="self-end w-[147px] h-[135px] mr-12 mb-12">
            <p class="text-white text-xl text-right">계약학과 입사자</p>
            <div class="flex flex-row items-end gap-1">
              <span
                class="text-white text-[70px] font-bold leading-normal tracking-[-1.4px] font-['Notokr']"
                >299</span
              >
              <span class="text-white text-2xl mb-7">명</span>
            </div>
          </div>
        </div>
        <div class="item_2 flex justify-end hg_400 w-[400px] rounded-3xl row-[6_/_10]">
          <div class="self-end w-[147px] h-[135px] mr-12 mb-12">
            <p class="text-white text-xl text-right">연구장학생 선발</p>
            <div class="flex flex-row items-end gap-1">
              <span
                class="text-white text-[70px] font-bold leading-normal tracking-[-1.4px] font-['Notokr']"
                >450</span
              >
              <span class="text-white text-2xl mb-7">명</span>
            </div>
          </div>
        </div>
        <div class="item_3 flex justify-end hg_400 w-[400px] rounded-3xl row-[1_/_5]">
          <div class="self-end w-[147px] h-[135px] mr-12 mb-12">
            <p class="text-white text-xl text-right">계약학과 장학생</p>
            <div class="flex flex-row items-end gap-1">
              <span
                class="text-white text-[70px] font-bold leading-normal tracking-[-1.4px] font-['Notokr']"
                >378</span
              >
              <span class="text-white text-2xl mb-7">명</span>
            </div>
          </div>
        </div>
        <div class="item_4 flex justify-end hg_400 w-[400px] rounded-3xl row-[5_/_9]">
          <div class="self-end w-[147px] h-[135px] mr-12 mb-12">
            <p class="text-white text-xl text-right">연구장학생 입사자</p>
            <div class="flex flex-row items-end gap-1">
              <span
                class="text-white text-[70px] font-bold leading-normal tracking-[-1.4px] font-['Notokr']"
                >185</span
              >
              <span class="text-white text-2xl mb-7">명</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- RD -->
    <div
      class="RD flex flex-row justify-between max-w-[1320px] h-[369px] mx-auto mt-60 max-[1024px]:px-12"
    >
      <div class="content flex flex-col h-[369px] w-[565px] gap-[30px] justify-between py-8">
        <p
          class="w-full font-black text-[60px] font-['Notokr'] text-black leading-[1.2] tracking-[-1px]"
        >
          현대자동차그룹의 <br />
          미래를 이끌어 갈 <br />
          R&D 인재를 찾습니다
        </p>
        <p class="font-['Notokr'] font-medium font_gray text-[18px] leading-7">
          그룹의 비전을 공유하고, <br />
          함께 성장해 나갈 미래 R&D 인재를 모집합니다.
        </p>
      </div>
      <div class="image-reprentse w-[678px] h-[369px] rounded-3xl"></div>
    </div>
    <!-- career -->
    <div class="career flex flex-col mx-auto mt-60 max-w-[1320px] max-[1024px]:px-12">
      <div class="title">
        <p class="text-2xl text-black font-bold font-['Notokr']">Career</p>
        <p class="text-[60px] lead-[60px] text-black font-bold font-['Notokr'] mt-[30px]">
          선발공고
        </p>
      </div>
      <div class="gr-item flex flex-wrap gap-[30px] mt-20">
        <template v-for="noti of marketingList1">
          <apply-card :cardData="noti" @click="openDialog(noti)"></apply-card>
        </template>
      </div>
      <div class="more mt-10">
        <p class="flex flex-row justify-end align-middle text-lg font-medium">
          공고 전체보기 <img class="w-7 h-7" src="../assets/images/icon_next_right.svg" />
        </p>
      </div>
    </div>
    <!-- our story -->
    <div class="our_story max-w-[1320px] mx-auto max-[1024px]:px-12">
      <div class="mt-[183px]">
        <div class="flex flex-col gap-[30px]">
          <p class="text-2xl text-black font-medium tracking-[-.0.48px]">Our story</p>
          <p class="text-[50px] text-black font-bold tracking-[-1px] font-['Notokr']">
            우리들의 이야기
          </p>
          <div class="flex flex-row justify-between max-w-[1320px]">
            <p class="text-lg font-medium text-[#898D9C] tracking-[-.0.48px]">
              새로운 현대자동차그룹 구성원이 될 <br />
              장학생 후배들을 기다리며 장학생 선배가 직접 이야기합니다.
            </p>
            <div class="action flex flex-row gap-4">
              <div
                :class="{ disabled: isChoose === 1 }"
                @click="slideOurStory(-1)"
                class="w-[60px] h-[60px] flex items-center justify-center rounded-full border border-solid border-[#898D9C]/25 cursor-pointer"
              >
                <img class="w-7 h-7 rotate-180" src="../assets/images/icon_next_right.svg" />
              </div>
              <div
                :class="{ disabled: isChoose === ourStoryModel.length }"
                @click="slideOurStory(1)"
                class="w-[60px] h-[60px] flex items-center justify-center rounded-full border border-solid border-[#898D9C]/25 cursor-pointer"
              >
                <img class="w-7 h-7" src="../assets/images/icon_next_right.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="image-list flex flex-row gap-10 mt-20 pr-2" ref="images_ourstory">
        <div class="shrink-0 image_card" v-for="(item, index) in ourStoryModel">
          <div
            :class="{ zoom: index + 1 === isChoose }"
            class="image_2 w-[480px] h-[358px] rounded-3xl mb-10 object-cover"
            @click="() => openModalDetail(item)"
          ></div>
          <p class="text-[28px] mb-4">
            <span class="font-semibold">{{ item.title }}</span> <span>{{ item.title_2 }}</span>
          </p>
          <p class="text-base text-[#898D9C] mb-[27px]">{{ item.desc }}</p>
          <p class="text-base text-[#333]">
            {{ item.content }}
          </p>
        </div>
        <div class="shrink-0 image_card hidden">
          <div class="image_2 w-[480px] h-[358px] rounded-3xl mb-10 object-cover"></div>
          <p class="text-[28px] mb-4"><span class="font-semibold"></span> <span></span></p>
          <p class="text-base text-[#898D9C] mb-[27px]"></p>
          <p class="text-base text-[#333]"></p>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="what_u_do max-w-[1320px] mx-auto max-[1024px]:px-12 mt-[180px]">
      <p class="font-medium text-2xl mb-6">What We Do?</p>
      <p class="content text-2xl flex flex-col mb-[70px]">
        <span class="font-normal text-[50px]">현대자동차그룹</span>
        <span class="font-bold text-[50px]">미래 R&D 인재 성장 지원</span>
      </p>
      <div class="image-list flex gap-10">
        <div class="flex flex-col">
          <router-link to="/program/receive">
            <div class="image_1 w-[413px] h-[390px] rounded-3xl mb-8 object-cover"></div>
            <p class="text-center font-medium text-[28px]">연구장학생</p>
          </router-link>
        </div>
        <div class="flex flex-col">
          <router-link to="/program/contract">
            <div class="image_2 w-[413px] h-[390px] rounded-3xl mb-8 object-cover"></div>
            <p class="text-center font-medium text-[28px]">계약학과</p>
          </router-link>
        </div>
        <div class="flex flex-col">
          <router-link to="/program/softeer">
            <div class="image_3 w-[413px] h-[390px] rounded-3xl mb-8 object-cover"></div>
            <p class="text-center font-medium text-[28px]">Softeer</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <ModalDetailApply
      @close-modal="() => (openModal = false)"
      :is-open="openModal"
      :modal-id="modalId"
      :apply_info="noticeSelected"
    ></ModalDetailApply>
  </Teleport>

  <TModalVideo
    v-if="isModalVisible"
    @close-modal="closeModalDetail"
    :is-open="openModal1"
    :modal-id="modalIdStory"
    :info-video="personSelect"
  ></TModalVideo>

  <LoaddingComponent v-if="isLoad"></LoaddingComponent>
</template>

<script lang="ts">
import {
  CodeEducation,
  MarketingSelectionModel,
  MarketingSelectionSearch
} from '../stores/marketingSelectionAd/marketingSelectionAd.type'
import menuTop from '../components/app-header/menu-top.vue'
import { getMarketingSelectionList } from '../stores/marketingSelectionAd/marketingSelectionAd.service'
import { format } from 'date-fns'
import { SUCCSESS_STATUS } from '../constants/screen.const'
import MenuTopResponsive from '@/components/app-header/menu-top-responsive.vue'
import { SearchOurStoryModel } from '../stores/page/ourstory/ourstory.type'
import { ourStoryStore } from '../stores/page/ourstory'

export default {
  components: { MenuTopResponsive, menuTop },
  name: 'HomePage',
  setup: () => {
    const store = ourStoryStore()

    return { store }
  },
  beforeMount() {
    this.getAll()
    this.getListStory()
  },
  data() {
    return {
      marketingList: [] as Array<MarketingSelectionModel>,
      marketingList1: [] as Array<MarketingSelectionModel>,
      isLoad: false,
      edu: [],
      eduList: [] as Array<CodeEducation>,
      marketingSearch: {} as MarketingSelectionSearch,
      storySearch: {} as SearchOurStoryModel,
      ourStoryModel: [] as Array<SearchOurStoryModel>,
      dataSearchOurStoryModel: {
        typeSearch: 'ALL',
        nameSearch: ''
      },
      dataOurStory: [],
      openModal: false,
      openModal1: false,
      modalId: 'detailAplly',
      noticeSelected: null as any,
      personSelect: null,
      modalIdStory: 'story',
      isModalVisible: false,
      isChoose: 1
    }
  },
  methods: {
    getAll() {
      this.isLoad = true

      getMarketingSelectionList(this.marketingSearch).then((res) => {
        if (res && res.status == SUCCSESS_STATUS) {
          this.marketingList = res.data
          if (this.marketingList.length == 0) {
            this.isLoad = false
          }
          this.marketingList.forEach((item, idx) => {
            const endDate = new Date(item.receiveEndDate)
            const currentDate = new Date()

            const timeDiff = endDate.getTime() - currentDate.getTime()
            const diffDays = timeDiff / (1000 * 3600 * 24)

            this.edu = item.educationName.split(', ')
            if (idx < 6) {
              this.eduList = []
              if (diffDays > 0) {
                this.eduList.push({ type: 1, conntent: 'D-' + Math.ceil(diffDays) })
              }
              if (diffDays == 0) {
                this.eduList.push({ type: 3, conntent: '오늘마감' })
              }
              if (diffDays < 0) {
                this.eduList.push({ type: 2, conntent: '완료' })
              }

              this.edu.forEach((item1) => {
                this.eduList.push({ type: 0, conntent: item1 })
              })
              item.tags = this.eduList

              item.receiveStartDate = format(item.receiveStartDate, 'yyyy-MM-dd hh:MM')
              item.receiveEndDate = format(item.receiveEndDate, 'yyyy-MM-dd hh:MM')

              this.marketingList1.push(item)
            }

            this.isLoad = false
          })
        }
      })
    },
    async getListStory() {
      await this.store.searchOurStory(this.dataSearchOurStoryModel)
      if (this.store && this.store.status == SUCCSESS_STATUS) {
        this.dataOurStory = this.store.ourStoryInitModel
        this.dataOurStory.forEach((item) => {
          const ourStory = {
            id: item.id,
            title: item.name,
            title_2: item.title,
            imgUrl: item.urlFile,
            desc: item.departmentName,
            content: item.content,
            url: item.videoUrl
          }
          this.ourStoryModel.push(ourStory)
        })
      }
    },
    scrollToRef(ref) {
      this.$refs[ref].scrollIntoView({ behavior: 'smooth' })
    },
    slideOurStory(val) {
      this.isChoose = this.isChoose + val
      const distance = 500
      this.$refs.images_ourstory.scrollBy({
        left: distance * val,
        behavior: 'smooth'
      })
    },
    openDialog(notice: any) {
      this.openModal = true
      this.noticeSelected = notice
    },
    openModalDetail(item: any) {
      this.openModal1 = true
      this.personSelect = item
      this.isModalVisible = true
    },
    closeModalDetail() {
      this.openModal1 = false
      this.isModalVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  letter-spacing: 0.03em;
}
#banner-video {
  position: absolute;
  width: 1920px;
  height: 1038px;
  object-fit: cover;
}
.header {
  /* background: black; */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* aspect-ratio: 1920 / 1038; */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1920px;
  height: 1038px;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    aspect-ratio: 1024/1038;
    background-position: bottom;
    background-size: cover;
  }
  @media screen and (max-width: 480px) {
    height: 1038px;
  }
  .slogan {
    @media screen and (max-width: 480px) {
      top: 60px;
      left: 36px;
      .big {
        width: 325px;
        height: auto;
        line-height: 86px;
      }
      .small {
        width: 280px;
        line-height: 36px;
      }
    }
  }
}
.about_us {
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 480px) {
    padding: 0px;
    margin-top: 115px;
  }
  .images {
    > div {
      background-size: 100% 100%;
    }
    .item_1 {
      background-size: cover;
      background-image: url('../assets/images/about_1.png');
      background-position-x: -200px;
    }
    .item_2 {
      background-size: cover;
      background-image: url('../assets/images/about_2.jpg');
      background-position-x: -120px;
    }
    .item_3 {
      background-size: cover;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 200%),
        url('../assets/images/about_3.png');
      background-position-x: -120px;
    }
    .item_4 {
      background-size: cover;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 500%),
        url('../assets/images/about_4.png');
      background-position-x: -120px;
    }
    @media (max-width: 1024px) {
      width: fit-content;
      align-self: self-end;
    }
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      gap: 42px;
      margin-top: 88px;
      align-self: center;
      .item_1,
      .item_2,
      .item_3,
      .item_4 {
        width: 420px;
      }
    }
  }

  .content {
    @media (max-width: 480px) {
      padding: 0px 40px;
    }
  }
}
.RD {
  .content {
    @media (max-width: 480px) {
      height: unset;
      padding: 0px 30px;
      :first-child {
        width: 420px;
      }
      :last-child {
        width: 330px;
      }
    }
  }
  .image-reprentse {
    background-image: url('../assets/images/slogan_1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    @media (max-width: 480px) {
      width: 411px;
      height: 369px;
      align-self: self-start;
      margin-left: 40px;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 100px;
    height: unset !important;
  }
  @media (max-width: 480px) {
    gap: 34px;
    padding: unset;
    margin-top: 200px;
  }
}
.career {
  .title {
    @media (max-width: 480px) {
      height: 135px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .gr-item {
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 480px) {
      margin-top: 34px;
    }
  }
  @media (max-width: 480px) {
    margin-top: 204px;
    padding: 0px 30px;
  }
}
.our_story {
  @media (max-width: 480px) {
    padding: 0px 30px;
  }
  .action {
    @media (max-width: 480px) {
      display: none;
    }
  }
  .image-list {
    overflow-x: scroll;
    width: 1620px;
    @media (max-width: 480px) {
      max-width: 480px;
      overflow-x: auto;
    }
    .image_1 {
      background-image: url('../assets/images/people_1.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
      @media (max-width: 480px) {
        width: 328px;
        height: 560px;
      }
    }
    .image_2 {
      background-image: url('../assets/images/people_2.png');
      background-size: cover;
      background-position-y: center;
      @media (max-width: 480px) {
        width: 328px;
        height: 358px;
      }
    }
    .image_3 {
      background-image: url('../assets/images/people_3.png');
      background-size: cover;
      background-position-y: center;
      @media (max-width: 480px) {
        width: 328px;
        height: 358px;
      }
    }
    .image_4 {
      background-image: url('../assets/images/people_4.png');
      background-size: cover;
      background-position-y: center;
      @media (max-width: 480px) {
        width: 328px;
        height: 358px;
      }
    }
  }
}
.what_u_do {
  @media (max-width: 480px) {
    padding: 0px 30px;
  }
  .content {
    @media (max-width: 480px) {
      margin-bottom: 0px;
    }
  }
  .image-list {
    @media (max-width: 480px) {
      max-width: 480px;
      flex-direction: column;
    }
    .image_1 {
      background-image: url('../assets/images/wwd_1.png');
      background-size: 200% 200%;
      background-position-x: 44%;
      background-position-y: 58%;
    }
    .image_2 {
      background-image: url('../assets/images/wwd_2.png');
      background-size: 173% 115%;
      background-position-x: 32%;
      background-position-y: 90%;
    }
    .image_3 {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) -40%, rgb(0, 0, 0) 1000%),
        url('../assets/images/wwd_3.png');
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
.zoom {
  width: 480px;
  height: 560px;
}
.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
