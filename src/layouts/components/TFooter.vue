<template>
  <div class="flex flex-col mx-auto max-w-[1920px] w-full h-[232px] bg-[#222020] mt-[240px]">
    <div class="block-footer flex justify-between mx-auto w-[1320px] h-[200px]">
      <div class="block-logo mt-10">
        <div class="logo flex items-start justify-center">
          <img class="" src="@/assets/images/logo_small.png" />
          <div>
            <p class="text-white font_12">HYUNDAI MOTOR GROUP</p>
            <div class="text-white font_22 lh_10">
              <p>미래모빌리티 인재 육성</p>
              <p class="mt-4 font_14 text-[#898D9C]">
                서울시 성동구 왕십리로 222 한양대학교 210동<br />
                정몽구 미래자동차연구센터
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="menu_footer flex flex-col mt-10 gap-6">
        <div class="apply flex flex-row gap-12">
          <p class="text-white w-16">Apply</p>
          <p class="text-[#898D9C]">선발공고</p>
          <p class="text-[#898D9C]">FAQ</p>
          <p class="text-[#898D9C]">Q&A</p>
        </div>
        <div class="program apply flex flex-row gap-12">
          <p class="text-white w-16">Program</p>
          <p class="text-[#898D9C]">연구장학생</p>
          <p class="text-[#898D9C]">계약학과</p>
          <p class="text-[#898D9C]">Softeer</p>
          <p class="text-[#898D9C]">About us</p>
        </div>
        <div class="people apply flex flex-row gap-12">
          <p class="text-white w-16">People</p>
          <p class="text-[#898D9C]">Our Story</p>
          <p class="text-[#898D9C]">Careers</p>
        </div>
      </div>
      <div class="media w-64 flex flex-col items-end gap-[20px]">
        <select id="cars" name="cars" class="selected" v-model="url" @change="openLink">
          <option value="" disabled selected hidden>Family Site</option>
          <option value="https://edu.hyundai-ngv.com/main/index.jsp">NGV Campus</option>
          <option value="https://hpms.hyundai-ngv.com/Login?returnUrl=%2F">연구지원시스템</option>
          <option value="https://oasis.hyundai-ngv.com/kr/index.do">OASIS</option>
          <option value="https://www.hyundai-ngv.com/etc/link.do">Link</option>
          <option value="https://softeer.ai/login">Softeer</option>
          <option value="https://hmg-scholar.recruiter.co.kr/appsite/company/index">
            현대자동차그룹
          </option>
        </select>
        <div class="w-[34px] h-[34px]">
          <a href="https://www.youtube.com/channel/UCnQQWQQjxhqtRnU-CTfn38Q" target="_blank">
            <img src="/src/assets/images/icon_yt.svg" alt="image" />
          </a>
        </div>
      </div>
    </div>
    <div id="footer" class="footer_wrap w-[1320px] mx-auto">
      <div class="flex ml-auto font-normal text-[#585D72] text-sm">
        <p>Copyright ⓒ HYUNDAI MOTOR COMPANY. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  methods: {
    openLink() {
      if (this.url) {
        window.open(this.url, '_blank')
      }
    }
  }
}
</script>
<style scoped lang="scss">
.block-footer {
  border-bottom: solid #2e2e2e 1px;
}

@media screen and (max-width: 480px) {
  .media {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .media {
    display: none;
  }
}

.selected {
  width: 200px;
  height: 34px;
  border: 1px solid rgba(85, 85, 85, 1);
  color: rgba(88, 93, 114, 1);
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  background-color: rgba(34, 34, 34, 1);
  margin-top: 40px;
}
</style>
