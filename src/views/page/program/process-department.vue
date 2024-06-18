<template>
  <div class="flex justify-center items-center">
    <div class="max-w-[1320px] w-full min-[480px]:mx-[30px]">
      <breadcrumb-top :p_menu="'Program'" :ch_menu="'성장과정'"></breadcrumb-top>
      <div class="max-w-[1320px] mx-auto mt-[100px]">
        <p class="mx-auto text-black font-bold font-['Notokr'] text-[50px]">계약학과 성장과정</p>
      </div>
      <img class="mt-[80px]" src="/images/image_process_department.png" alt="dep_process" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcIndex: 1
    }
  },
  methods: {
    chosseDepartment(value) {
      this.srcIndex = value
    }
  }
}
</script>

<style lang="scss" scoped></style>
