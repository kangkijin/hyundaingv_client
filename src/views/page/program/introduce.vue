<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'" :middle="'계약학과'" :ch_menu="'학과소개'"></breadcrumb-top>
      <div class="w-[1320px] mx-auto">
        <div class="title w-full mt-[100px]">
          <p>
            <span class="text-black font-bold font-['Notokr'] text-[50px]">학과소개</span>
          </p>
        </div>
        <!--  -->
        <div class="flex flex-row items-center justify-between mt-[70px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/2837/39b3/b59dd9a73652675ff62ee5be4109c9ac?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I3hTq~6QMSJtcCZDJB4FUKcWOUCMRf~vRP~QH-gbAZkn8my4XFiNHb-MxOziA8ZTS7BcX08Tdx~V-kWcXPKT17Gm4DfLCxi33cJfTSV1AW3LK5k6Oxxcy4rtHwpX-6hhcfyqWg2d7tN740JErHzNCwx2yPkY9vL22GdqJlO1n8rxQXeIU8tzP1Cw2mKuo07ci4EPn87kLopS9scP0JXI3yUvHy6wy0EErD-Avs-28BU1IsSaC-~jp3DpVTEWHPWZq8fYlSqO36neZILtsMADNaruRnHsWUwNZ2RQ4YgbDMGES1LJZMEs0wnMTIdPlstZt0IuAnc8hDjyXR8a7Bz-5Q__"
          />
          <a
            class="flex flex-row gap-4 items-end"
            href="https://vce.yonsei.ac.kr/vce/index.do"
            target="_blank"
          >
            <p class="text-black font-bold font-['Notokr'] text-lg">학과 홈페이지 바로가기</p>
            <div class="btn_goto"></div>
          </a>
        </div>
        <!--  -->
        <div class="mt-[46px]">
          <div
            class="container flex flex-col justify-center gap-[30px] rounded-lg bg-[#EDEFF2] p-[70px]"
          >
            <div class="flex flex-col gap-[30px]">
              <template v-for="(p, idx) of info" :key="idx">
                <div class="flex flex-col gap-[30px]">
                  <p
                    :class="{ 'text-center': text_align == 'center' }"
                    class="text-black font-bold font-['Notokr'] text-3xl whitespace-pre-line"
                  >
                    {{ p.title }}
                  </p>
                  <p
                    :class="{ 'text-center': text_align == 'center' }"
                    class="conntent_ text-[#585D72] font-normal font-['Notokr'] text-lg whitespace-pre-line"
                  >
                    {{ p.content }}
                  </p>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="mt-[124px]">
          <div class="image_info flex mx-auto mt-32 w-[800px] h-[351px]"></div>
        </div>
        <div class="mt-[100px]">
          <div class="title w-full">
            <p>
              <span class="text-black font-bold font-['Notokr'] text-[50px]">교과과정</span>
            </p>
          </div>
          <div
            class="container flex flex-col justify-center gap-[30px] rounded-lg bg-[#EDEFF2] mt-[50px] p-[70px]"
          >
            <div class="flex flex-col gap-[30px]">
              <template v-for="(p, idx) of info2" :key="idx">
                <div class="flex flex-col gap-[30px]">
                  <p
                    :class="{ 'text-center': text_align == 'center' }"
                    class="text-black font-bold font-['Notokr'] text-3xl whitespace-pre-line"
                  >
                    {{ p.title }}
                  </p>
                  <p
                    :class="{ 'text-center': text_align == 'center' }"
                    class="conntent_ text-[#585D72] font-normal font-['Notokr'] text-lg whitespace-pre-line"
                  >
                    {{ p.content }}
                  </p>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="mt-[100px]">
          <p class="text-black font-bold font-['Notokr'] text-[50px]">미래자동차공학과</p>
          <div class="group_1 w-[1070px] h-[860px] mt-16"></div>
        </div>
        <div class="mt-[40px]">
          <p class="text-black font-bold font-['Notokr'] text-[50px]">전기제어생체공학부</p>
          <div class="group_2 w-[1070px] h-[550px] mt-16"></div>
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
      info: mockdata.program_introduce_1,
      info2: mockdata.program_introduce_2
    }
  }
}
</script>

<style lang="scss" scoped>
.btn_goto {
  background-image: url('../../../assets/images/icon_goto.svg');
  height: 21px;
  width: 24px;
  background-repeat: no-repeat;
}
.image_info {
  background-image: url('../../../assets/images/image_introduce_1.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.group_1 {
  background-image: url('../../../assets/images/image_introduce_2.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.group_2 {
  background-image: url('../../../assets/images/image_introduce_3.png');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
