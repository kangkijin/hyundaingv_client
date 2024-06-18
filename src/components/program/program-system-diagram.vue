<template>
  <div class="diagrams grid grid-cols-3 mt-32">
    <div class="grid-item gap-4 bd-top bd-bot item1 pt-10 h-[220px] w-[240px]">
      <div class="box-item"><div class="icon"></div></div>
      <p class="font-bold font-['Notokr'] text-base">01</p>
      <p class="font-bold font-['Notokr'] text-[28px]">제도 오리엔테이션</p>
      <p class="font-medium font-['Notokr'] text-lg">장학제도 및 육성과정을 안내해요</p>
      <p class="font-normal font-['Notokr'] text-base]">
        상반기 OT 운영 : 7월 ~ 8월 운영 <br />
        하반기 OT 운영 : 1월 ~ 2월 운영
      </p>
      <p class="font_gray font-normal font-['Notokr'] text-sm">자세한 일정은 개별 안내함</p>
    </div>
    <div class="grid-item bd-top item2 bd-bot gap-4 pt-10">
      <div class="box-item"><div class="icon"></div></div>
      <p class="font-bold font-['Notokr'] text-base">02</p>
      <p class="font-bold font-['Notokr'] text-[28px]">현장실무연수</p>
      <p class="font-medium font-['Notokr'] text-lg">선발 회사의 연구소에서 업무 실습을 해요</p>
      <p class="font-normal font-['Notokr'] text-base]">
        상반기 OT 운영 : 7월 ~ 8월 운영 <br />
        하반기 OT 운영 : 1월 ~ 2월 운영
      </p>
      <p class="font_gray font-normal font-['Notokr'] text-sm">자세한 일정은 개별 안내함</p>
    </div>
    <div class="grid-item bd-top item3 bd-bot gap-4 pt-10">
      <div class="box-item"><div class="icon"></div></div>
      <p class="font-bold font-['Notokr'] text-base">03</p>
      <p class="font-bold font-['Notokr'] text-[28px]">기술과제수행(현업멘토링)</p>
      <p class="font-medium font-['Notokr'] text-lg">장학제도 및 육성과정을 안내해요</p>
      <p class="font-normal font-['Notokr'] text-base]">
        상반기 OT 운영 : 7월 ~ 8월 운영 <br />
        하반기 OT 운영 : 1월 ~ 2월 운영
      </p>
      <p class="font_gray font-normal font-['Notokr'] text-sm">자세한 일정은 개별 안내함</p>
    </div>
    <div class="grid-item item4 gap-4 pt-10">
      <div class="icon"></div>
      <p class="font-bold font-['Notokr'] text-base">06</p>
      <p class="font-bold font-['Notokr'] text-[28px]">우수자 해외연수</p>
      <p class="font-medium font-['Notokr'] text-lg">성과 우수자는 해외 거점 투어에 참여해요</p>
      <p class="font-normal font-['Notokr'] text-base]">진행 일정 : 미정</p>
      <p class="font_gray font-normal font-['Notokr'] text-sm">
        우수자 선정 및 투어 일정은 개별 안내함
      </p>
    </div>
    <div class="grid-item item5 gap-4 pt-10">
      <div class="icon"></div>
      <p class="font-bold font-['Notokr'] text-base">05</p>
      <p class="font-bold font-['Notokr'] text-[28px]">전문기술교육</p>
      <p class="font-medium font-['Notokr'] text-lg">현업 특화 교육 과정을 수강해요</p>
      <p class="font-normal font-['Notokr'] text-base]">진행 일정 : 선발월 ~ 졸업 전까지</p>
      <p class="font_gray font-normal font-['Notokr'] text-sm">
        교육 과정 및 입과 방법은 개별 안내함
      </p>
    </div>
    <div class="grid-item item6 gap-4 pt-10">
      <div class="icon"></div>
      <p class="font-bold font-['Notokr'] text-base">04</p>
      <p class="font-bold font-['Notokr'] text-[28px]">연구성과교류회</p>
      <p class="font-medium font-['Notokr'] text-lg">수행한 연구 결과를 발표하고 공유해요</p>
      <p class="font-normal font-['Notokr'] text-base]">상 · 하반기 : 5월 ~ 9월</p>
      <p class="font_gray font-normal font-['Notokr'] text-sm">국내 학회와 연계하여 운영함</p>
    </div>
    <div class="grid-item item7 gap-4 pt-10">
      <div class="icon"></div>
      <p class="font-bold font-['Notokr'] text-base">07</p>
      <p class="font-bold font-['Notokr'] text-[28px]">연구성과교류회</p>
      <p class="font-medium font-['Notokr'] text-lg">수행한 연구 결과를 발표하고 공유해요</p>
      <p class="font-normal font-['Notokr'] text-base]">상 · 하반기 : 5월 ~ 9월</p>
      <p class="font_gray font-normal font-['Notokr'] text-sm">국내 학회와 연계하여 운영함</p>
    </div>
  </div>
</template>

<script>
export default {}
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
