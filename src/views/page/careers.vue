<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'People'" :ch_menu="'Careers'"></breadcrumb-top>
      <div class="title w-[1320px] mt-[100px]">
        <p class="text-black font-bold font-['Notokr'] text-[50px]">Careers</p>
        <p
          class="text-[#585D72] font-medium font-['Notokr'] text-[18px] leading-[30px] w-[384px] mt-[30px]"
        >
          현대엔지비는 현대자동차그룹사와 긴말하게 연결하여 새로운 기술을 창조하기 위해 노력합니다.
        </p>
      </div>
      <div class="list-item-card flex flex-wrap gap-x-[40px] gap-y-[120px] mt-[100px] w-[1320px]">
        <template v-for="item of careersModel">
          <careers-card :cardData="item"></careers-card>
        </template>
      </div>
      <div class="group mt-[200px]">
        <p class="font-bold text-[34px] w-[560px]">
          현대엔지비와 미래 모빌리티를 향한 <br />
          여정을 함께하는 그룹사들이 궁금하다면?
        </p>
        <div
          class="list-item-card flex gap-x-[45px] gap-y-[60px] mt-[80px] max-w[1660px] overflow-x-auto"
        >
          <!-- <template v-for="item of mocdata_gr">
            <brand-card :cardData="item"></brand-card>
          </template>
        </div> -->

          <div class="image-list-container">
            <ul class="image-list">
              <li>
                <img src="/images/image_careers_1.png" alt="Image 1" />
                <p class="mt-8 font-['Notokr'] text-[28px] text-center font-bold text-7">
                  현대모비스
                </p>
              </li>
              <li>
                <img src="/images/image_careers_2.png" alt="Image 2" />
                <p class="mt-8 font-['Notokr'] text-[28px] text-center font-bold text-7">
                  현대자동차
                </p>
              </li>
              <li>
                <img src="/images/image_careers_2.png" alt="Image 2" />
                <p class="mt-8 font-['Notokr'] text-[28px] text-center font-bold text-7">
                  현대자동차
                </p>
              </li>
              <li>
                <img src="/images/image_careers_1.png" alt="Image 1" />
                <p class="mt-8 font-['Notokr'] text-[28px] text-center font-bold text-7">
                  현대모비스
                </p>
              </li>
              <li>
                <img src="/images/image_careers_2.png" alt="Image 2" />
                <p class="mt-8 font-['Notokr'] text-[28px] text-center font-bold text-7">
                  현대자동차
                </p>
              </li>
              <!-- Add more -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LoaddingComponent v-if="isLoad"></LoaddingComponent>
</template>

<script lang="ts">
const mocdata_gr = [
  {
    name: '현대자동차',
    logoUrl: '',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/5a4e/431f/6792f87b4c95044de0eb4d31a56e4892?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrWLg1aqjwl-KgmkmxRDtPiZ9SXEEc4UuFmof9wLWnQ78SpASr5d5Rgcs7aUYX-31GEQ~5MYnxhQlVi2AvgbcyJzzpJEzhDPTHlxHUbnVVMGsEITU3E46AI9BBDtKkvTbjNbGI6KU6XqDdl4q1YkoULU~WTpoalvJM~UcSKfCbb9eQpTj65QiN~rdahQJ6ThWjatYDL6yy2RpP7tnCbCsVylrjoOL3~JhXTsv~DgiNa~aG4PbPr7oQPbTL0VVZj0xoNXSLHd0ri1nkcilQtBR0VP3Y10UKnjHl~3uqB6NfR8nx1J9FIf9~M3eP1vaL4ypYuI6X0xEC2x-t~Vm4ERbA__'
  },
  {
    name: '현대자동차',
    logoUrl: '',
    imgUrl: ''
  },
  {
    name: '현대자동차',
    logoUrl: '',
    imgUrl: ''
  }
]
import { SUCCSESS_STATUS } from '../../constants/screen.const'
import { defineComponent } from 'vue'
import { careersStore } from '../../stores/page/careers'
import { CareersModel } from '../../stores/page/careers/careers.type'
import { fileMngStore } from '../../stores/common/fileMng'
export default defineComponent({
  setup: () => {
    const store = careersStore()
    const fMngStore = fileMngStore()
    return { store, fMngStore }
  },
  name: 'page-carrers',
  data() {
    return {
      mocdata_gr: mocdata_gr,
      data: [],
      careersModel: [] as Array<CareersModel>,
      category: 'career',
      sectionName: 'CAREER',
      orgName: 'image',
      imgUrl: '',
      isLoad: false
    }
  },
  beforeMount() {
    this.getAll()
  },
  methods: {
    async getAll() {
      this.isLoad = true
      await this.store.getAllCareers()
      if (this.store && this.store.status == SUCCSESS_STATUS) {
        this.data = this.store.careersInitModel
        this.data.forEach((item) => {
          const careers = {
            id: item.id,
            imgUrl: '/images/image_test_careers.png',
            title: item.fieldActivity,
            content: item.content
          }
          this.careersModel.push(careers)
        })
        this.isLoad = false
      }
    }
  }
})
</script>

<style scoped>
.image-list-container {
  overflow-x: hidden;
  max-width: 1320px;
}

.image-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  animation: scrollImages 10s infinite;
}

.image-list li {
  display: inline-block;
  vertical-align: top;
  margin-right: 40px;
}
.image-list li:last-child {
  margin-left: 0;
}

@keyframes scrollImages {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(-100% - 90px * (5 - 1)));
  }
  100% {
    transform: translateX(50px);
  }
}
</style>
