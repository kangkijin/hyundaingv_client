<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'" :ch_menu="'About us'"></breadcrumb-top>
      <div class="mt-[100px]">
        <p class="mx-auto text-black font-bold font-['Notokr'] text-[50px]">About us</p>
        <!--  -->
        <ul class="about_nav_link mt-[70px] h-[46px]">
          <li v-for="item in navLink" :key="item.link">
            <router-link class="text-[18px] font-medium" :to="item.link">{{
              item.label
            }}</router-link>
          </li>
        </ul>
        <div class="flex flex-row justify-between mt-[100px] max-[1024]: fle">
          <div>
            <p class="font-medium font-['Notokr'] text-base text-[#585D72]">
              기술과 사람을 연결하는 스마트 모빌리티 솔루션 기업
            </p>
            <p class="font-bold font-['Notokr'] text-6xl mt-[10px]">Connect N Create</p>
            <p class="font-semibold font-['Notokr'] text-xl mt-[20px]">
              우리는 사람과 기술을 연결하여 <br />
              새로운 가치와 미래를 창조한다
            </p>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/1f0a/0673/8435c1efac4962968ae654366f943846?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYu1tfyRk9fmV-wRZaBcwBAdagdArrwSXyAGRTWsqjxT3kOIMPI8w123o4ikV6mzKFfy5QQSVB8p1ioMafOyZi8OFt4f7IxU6ebk2emQGzV69-8r9s08hA3h0J8bY2d3GP3ZcLqGUpL2Xs8YDe3R2kcdTILDiBQd8mMp964~-IbzUJvjwXV~wwqaTr~1uzEq1ENbawHe4SkiBWOr~IhfpCXU9MDQzZg6EXUZaW3q1Z8Mk301jfVbMrOIB12s2THBSBvuSZy6lEm7HbFuaKNE1-4RcxpxAp9zngwLZEYUGImzO0bkfQ6yumE51JasUmwjAbgsx~yxmk46igauB32Hhw__"
            />
          </div>
        </div>
        <div class="mt-[20px]">
          <p class="font-normal font-['Notokr'] text-[17px] whitespace-pre-line">{{ paragraph }}</p>
          <p class="font-medium font-['Notokr'] text-xl text-right mt-12">
            현대엔지비(주)대표이사 오정훈
          </p>
        </div>
        <div class="mt-40">
          <p class="font-bold font-['Notokr'] text-[40px]">미션</p>
          <p class="font-bold font-['Notokr'] text-[26px] mt-[30px]">
            원천ㆍ기반 기술경쟁력 확보 및 우수인재 발굴ㆍ육성
          </p>
          <p class="font-normal font-['Notokr'] text-lg mt-[30px]">
            현대엔지비는 무한 기술개발 경쟁시대에 국내외 대학교 및 연구기간과의 기술협력 네트워크를
            구룩함으로써 <br />
            차세대 독자 신기술 발굴과 공동협력의 시너지를 높이고, 한국자동차 사업의 미래를 책임지게
            될 핵심 연구인력 육성을 위해 설립되었습니다.
          </p>
          <div class="flex justify-center mt-[70px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/12c2/d052/00926fb5a4711f163879659a0506afb3?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dghwZ2ZZ7EiWB0oFe5sShw4EiJjPL1UX9Egb848psH1I45ff5lVhkoZB1SLYOsp7BZdPCpyW6TWCXmNO6i1Xvmw6VrPsdkKEMG-gBNbryvSDX8R3rMOE6NBjesd1PKPqrhmT4eXtLWrkvbbqK3sPKOk2l1K1xSb1DS1r0l9Y0UFKHQaL2eSYNvVAX5jwKDxtAKiPU4C-Lrd~nV9qy-W4M-taiQIjzQScHoItJo2xLKLefl4yR7KSusyga7QHmToX~wPn8-yLWe6QDGt~W-7r3agNlYWgP8CNXKG7Fn8frtaUYNsaYJSrI1dXfIb22mMO6lCDka5kjb-lGJQOm1oC3Q__"
            />
          </div>
        </div>
        <div class="mt-[160px]">
          <p class="font-bold font-['Notokr'] text-[40px]">비전</p>
          <p class="font-bold font-['Notokr'] text-[26px] mt-[30px]">
            더 나은 미래를 향한 동행 <span class="font-normal">Together for a better future</span>
          </p>
          <p class="font-normal font-['Notokr'] text-lg mt-[30px]">
            창의적 도전, 인재존중 정신과 산학연 협력 네트워크를 기반으로 우수 인재 육성 차세대 기술
            개발에 기여함으로써 <br />
            글로벌 기술경쟁력 확보와 산학연구 동반성장 실현의 더 나은 미래를 창조합니다.
          </p>
          <div class="flex justify-center mt-[70px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/58e1/72a1/186ee41f04d7e116d38870b51462ae83?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ptnSPBZsn5jG9XPlZx7BlM6ywkylmflaMED5mdvG38QlI6-nFBwh5AFbWLkeiCfMcHOsM392NsQsWyU~XlNJVti2vjzLmMNzToS9Jw~H-ihQhSExzYqEma8O0X06PMpbXwb9oO~HpcyZfsS02oIax1w4sTXassZwWlr1xY7XNOvIl5Anl3FnM42Vvop48mXvrqndwybjDhbLGTWDVq4M-xU9mKQWoU~bjuJNMJ3OctnkCKQaMOALi778P9bsDENvWRoat-VtEiu4YYlbtOShypzSoeWszcrUHJSZohVEGyarldANroXL0Or-0PRvt6-IAg7DaGSFOjZCNwdf~R7~lA__"
            />
          </div>
        </div>
        <div class="mt-40">
          <p class="font-bold font-['Notokr'] text-[40px]">사업개요</p>
          <p class="font-bold font-['Notokr'] text-[26px] mt-[30px]">
            기초ㆍ선행 기술에 대한 대외협업을 강화
          </p>
          <p class="font-normal font-['Notokr'] text-lg mt-[30px]">
            창의적 도전, 인재존중 정신과 산학연 협력 네트워크를 기반으로 우수 인재 육성 차세대 기술
            개발에 기여함으로써 <br />
            글로벌 기술경쟁력 확보와 산학연구 동반성장 실현의 더 나은 미래를 창조합니다.
          </p>
          <div class="flex justify-center mt-[70px]">
            <img src="\src\assets\images\image_about_us_end.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockdata } from '../../../constants/mocdata.js'
import jsonData from '../../../assets/data/about.json'

export default {
  data() {
    return {
      tabs: mockdata.program_aboutus_tabs,
      paragraph: mockdata.program_aboutus_paragraph,
      tabActive: 0,
      navLink: jsonData.navLink
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
