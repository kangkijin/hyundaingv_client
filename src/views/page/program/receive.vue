<template>
  <div class="flex flex-col justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'" :ch_menu="'연구장학생'"></breadcrumb-top>
      <p class="w-[1320px] mx-auto mt-[100px]">
        <span class="text-black font-bold font-['Notokr'] text-[50px]">연구장학생</span>
      </p>
    </div>
    <div class="banner-image w-full mt-[100px]"></div>
    <div class="w-[1320px] mt-[120px] mx-auto flex flex-row justify-between">
      <p class="text-black font-bold font-['Notokr'] text-[40px]">
        현대자동차그룹<br />
        연구장학생 제도
      </p>

      <div class="info w-[627px]">
        <p class="pt-12 font-normal font-['Notokr'] text-base text-[#585D72]">
          현대자동차그룹의 미래를 이끌 석ㆍ박사 R&D 인재들의 성장을 지원하는 제도입니다.<br />
          이공계 석ㆍ박사 재학생이 연구장학생으로 선발되면<br />
          장학금 지원과 더불어 현장실무연수, 현업 멘토링 등 <br />
          다양한 신학협력 프로그램 참여와 채용 혜택을 받습니다.
        </p>
      </div>
    </div>
    <!-- img -->
    <div class="w-[1320px] mt-[120px] mx-auto">
      <div class="images flex flex-row w-full flex-wrap gap-8 mt-8">
        <template v-for="(item, key) of imageList" :key="key">
          <m-image-card
            :url="item.url"
            :link="item.link"
            width="412px"
            height="460px"
            backgroundSize="cover"
            backgroundPos="center"
          >
            <template v-slot:content>
              <p class="text-black font-medium font-['Notokr'] text-[28px] text-left mt-12">
                {{ item.title }}
              </p>
              <p
                class="text-[#585D72] font-normal font-['Notokr'] text-lg text-left whitespace-pre-line mt-4"
              >
                {{ item.content }}
              </p>
              <p class="view_detail text-[#585D72] font-normal font-['Notokr'] text-lg mt-5">
                알아보기
              </p>
            </template>
          </m-image-card>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mockdata } from '../../../constants/mocdata.js'
export default {
  data() {
    return {
      imageList: mockdata.program_receive_images
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-image {
  height: 500px;
  background: url('https://s3-alpha-sig.figma.com/img/35a1/ec3a/10c4619fcdbdc12e486003b13e6f878f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-oNdX2MVsGmGfdz2itjb~70ngLhd7nH34P1LZVfDuI~nEweyRWq-zYDH2M0Sg0FJUsLqPAUxcg9aAiN~uXDOr14NWSGwDSeJeL9WmlvCQ7WKBwuDphA46-zQGteAB~MSyE1Ji7ywIuD-bQ60Z3TrDwNmlrJGU0D0aP131sYBtb~SiGLBvTuCB5N6U2E91rEiliEnCLeb4zp5UHpJytz~Smqvd9zMarBp-G738gFmMORrxPhZJ76yciPHX4uhMf~JBuAMIz0TAi-gHfW8wPM7hYQ9zT0sUwHlUak7CoLM6bC5z2-l-~zVx90okB0oQ1nz8RarsLyqoaVmAoF3EQtcQ__');
  background-size: cover;
  background-position-y: center;
  background-repeat: no-repeat;
}
.info {
  border-top: solid;
}
.view_detail {
  &:after {
    content: '';
    background: url(../../../assets/images/icon_date_right.svg);
    position: absolute;
    width: 40px;
    height: 28px;
    background-repeat: no-repeat;
    background-position: top;
  }
}
</style>
