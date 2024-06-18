<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'" :middle="'연구장학생'" :ch_menu="'성장과정'"></breadcrumb-top>
      <div class="mx-auto">
        <div class="title w-full mt-[100px]">
          <p class="text-black font-bold font-['Notokr'] text-[50px]">연구장학생 육성체계</p>
          <p class="text-[#585D72] font-medium font-['Notokr'] text-[18px] mt-[30px]">
            선발된 연구장학생은 합격 오리엔테이션을 통해 육성 과정을 이해가고, 현장실무연수와
            기술과제 프로젝트를 수행하게 됩니다. 육성 과정 중 현업 연구원을 통한 멘토링 활동과 연구
            성과 교류회, 전문기술교육에 참여하며, 우수자로 선발되신 장학생에게는 선발회사의 해외
            거점 투어/연수 혜택이 주어집니다.<br />
            육성 과정 종료 후 장학생은 학위 취득일에 맞추어 선발회사로 최종 입사하게 됩니다.
          </p>
        </div>
        <div class="step mt-[70px]">
          <p class="text-black font-bold font-['Notokr'] text-4xl">한 눈으로 보는 성장과정</p>
          <program-system-diagram />
        </div>
        <div class="mt-[40px]">
          <p class="text-black font-bold font-['Notokr'] text-[40px]">
            선발 전형, 주요 혜택 등 다른 정보가 궁금하다면?
          </p>

          <div class="images flex w-full flex-wrap gap-[50px] mt-[50px] w-full">
            <template v-for="(image, key) of imageList" :key="key">
              <m-image-card
                :url="image.url"
                :link="image.link"
                width="556px"
                height="320px"
                backgroundSize="cover"
              >
                <template v-slot:content>
                  <p class="text-black font-medium font-['Notokr'] text-[28px] text-center mt-12">
                    {{ image.content }}
                  </p>
                </template>
              </m-image-card>
            </template>
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
      imageList: mockdata.program_system_mock
    }
  }
}
</script>
<style scoped lang="scss">
.diagrams {
  .grid-item {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    height: 370px;
  }
  .bd-top {
    border-top: dashed #bcc5d2 1px;
  }
  .bd-bot {
    border-bottom: dashed #bcc5d2 1px;
  }

  .item1 {
    display: flex;
    width: 60%;
    justify-self: end;
    position: relative;
    .box-item {
      position: absolute;
      background: #f3f7ff;
      top: -30px;
      width: 70px;
      .icon {
        content: '';
        background:
          linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
          url(@/assets/images/icon_program_1.svg) no-repeat;
        width: 54px;
        height: 56px;
      }
    }
  }
  .item2 {
    position: relative;
    padding-left: 20%;
    .box-item {
      position: absolute;
      top: -30px;
      .icon {
        content: '';
        background:
          linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
          url(@/assets/images/icon_program_2.svg) no-repeat;
        width: 54px;
        height: 56px;
      }
    }
  }

  .item3 {
    position: relative;
    border-right: dashed silver 1px;
    border-bottom: dashed silver 1px;
    border-right-radius: 50%;
    border-radius: 0% 100% 100% 0%;
    padding-left: 10%;
    margin-bottom: -2px;
    .box-item {
      position: absolute;
      top: -30px;
      .icon {
        content: '';
        background:
          linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
          url(@/assets/images/icon_program_3.svg) no-repeat;
        width: 54px;
        height: 56px;
      }
    }
  }
  .item4 {
    position: relative;
    border-left: dashed silver 1px;
    border-left-radius: 50%;
    border-radius: 100% 0% 0% 100%;
    padding-left: 40%;
    .icon {
      content: '';
      background:
        linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
        url(@/assets/images/icon_program_6.svg) no-repeat;
      width: 54px;
      height: 56px;
      position: absolute;
      top: -30px;
      width: 70px;
    }
  }
  .item6 {
    position: relative;
    border-radius: 100% 0% 0% 100%;
    padding-left: 10%;
    .icon {
      content: '';
      background:
        linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
        url(@/assets/images/icon_program_6.svg) no-repeat;
      width: 54px;
      height: 56px;
      position: absolute;
      top: -30px;
      width: 70px;
    }
  }
  .item5 {
    position: relative;
    padding-left: 20%;
    .icon {
      content: '';
      background:
        linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
        url(@/assets/images/icon_program_5.svg) no-repeat;
      width: 54px;
      height: 56px;
      position: absolute;
      top: -30px;
      width: 70px;
    }
  }
  .item7 {
    position: relative;
    padding-left: 40%;

    .icon {
      content: '';
      background:
        linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
        url(@/assets/images/icon_program_7.svg) no-repeat;
      width: 54px;
      height: 56px;
      position: absolute;
      top: -30px;
      width: 70px;
    }
  }
}
</style>
