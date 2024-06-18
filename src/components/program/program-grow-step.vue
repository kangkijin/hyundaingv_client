<template>
  <div class="diagrams max-w-[1320px] h-[180px] grid grid-cols-6 mt-32">
    <div class="grid-item gap-4 bd-top item1 pt-10 h-[220px] w-[240px]">
      <div class="box-item"><div class="icon"></div></div>
      <p class="font_gray font-normal font-['Notokr'] text-sm">STEP1</p>
      <p class="font-medium font-['Notokr'] text-lg">서류전형</p>
    </div>
    <div class="grid-item items-center text-center bd-top item2 gap-4 pt-10">
      <div class="box-item"><div class="icon"></div></div>
      <p class="font_gray font-normal font-['Notokr'] text-sm">STEP2</p>
      <p class="font-medium font-['Notokr'] text-center text-lg">
        Ⅰ 온라인 인성검사 <br />
        Ⅱ 코딩테스트 (SW 限)
      </p>
    </div>
    <div class="grid-item items-center bd-top item3 gap-4 pt-10">
      <div class="box-item"><div class="icon"></div></div>
      <p class="font_gray font-normal font-['Notokr'] text-sm">STEP3</p>
      <p class="font-medium font-['Notokr'] text-center text-lg">1차 회사면접 전형</p>
    </div>
    <div class="grid-item items-center text-center bd-top item4 gap-4 pt-10">
      <div class="icon"></div>
      <p class="font_gray font-normal font-['Notokr'] text-sm">STEP4</p>
      <p class="font-medium font-['Notokr'] text-center text-lg">1차 회사면접 전형</p>
    </div>
    <div class="grid-item items-center text-center bd-top item5 gap-4 pt-10">
      <div class="icon"></div>
      <p class="font_gray font-normal font-['Notokr'] text-sm">STEP5</p>
      <p class="font-medium font-['Notokr'] text-center text-lg">1차 회사면접 전형</p>
    </div>
    <div class="grid-item bd-top items-center item6 gap-4 pt-10">
      <div class="icon"></div>
      <p class="font_gray font-normal font-['Notokr'] text-sm">STEP6</p>
      <p class="font-medium font-['Notokr'] text-lg">합격자 발표</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.diagrams {
  position: relative;
  left: -68px;
  .grid-item {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
  }
  .bd-top {
    border-top: dashed #bcc5d2 1px;
  }
  .item1 {
    display: flex;
    width: 60%;
    justify-self: end;
    position: relative;
    .box-item {
      position: absolute;
      top: -30px;
      width: 70px;
      .icon {
        content: '';
        background:
          linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
          url(@/assets/images/icon_program_growstep_1.svg) no-repeat;
        width: 54px;
        height: 56px;
      }
    }
  }
  .item2 {
    position: relative;
    .box-item {
      position: absolute;
      top: -30px;
      .icon {
        content: '';
        background:
          linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
          url(@/assets/images/icon_program_growstep_2.svg) no-repeat;
        width: 54px;
        height: 56px;
      }
    }
  }

  .item3 {
    position: relative;
    margin-bottom: -2px;
    .box-item {
      position: absolute;
      top: -30px;
      .icon {
        content: '';
        background:
          linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
          url(@/assets/images/icon_program_growstep_3.svg) no-repeat;
        width: 54px;
        height: 56px;
      }
    }
  }
  .item4 {
    position: relative;
    .icon {
      content: '';
      background:
        linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
        url(@/assets/images/icon_program_growstep_5.svg) no-repeat;
      width: 54px;
      height: 56px;
      position: absolute;
      top: -30px;
      width: 70px;
    }
  }
  .item5 {
    position: relative;
    .icon {
      content: '';
      background:
        linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
        url(@/assets/images/icon_program_growstep_6.svg) no-repeat;
      width: 54px;
      height: 56px;
      position: absolute;
      top: -30px;
      width: 70px;
    }
  }
  .item6 {
    position: relative;
    .icon {
      content: '';
      background:
        linear-gradient(to bottom, rgba(255, 255, 255, 0) -40%, rgb(255, 255, 255) 1000%),
        url(@/assets/images/icon_program_growstep_4.svg) no-repeat;
      width: 54px;
      height: 56px;
      position: absolute;
      top: -30px;
      width: 70px;
    }
    &:before {
      content: '';
      position: absolute;
      top: -4px;
      left: 50%;
      width: 50%;
      border-top: 10px solid #ffffff;
    }
  }
}
</style>
