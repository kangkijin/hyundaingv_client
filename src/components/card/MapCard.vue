<template>
  <div v-for="item in data" :key="item.address">
    <div class="group_map">
      <div class="">
        <figure class="2xl:p-0">
          <img :src="item.imageInfo" alt="imageInfo" />
        </figure>
        <div class="d_flex content">
          <img src="@/assets/images/icon_addr.svg" alt="Logo" />
          <span>{{ item.titleInfo }}</span>
        </div>
        <div class="group_map_label-info">
          <p class="text-lt" v-for="(label, index) in item.info" :key="index">{{ label }}</p>
        </div>
      </div>
      <div class="">
        <a :href="item.linkMap" target="_blank">
          <figure class="2xl:p-0">
            <img :src="item.imageMap" alt="imageMap" />
          </figure>
        </a>
        <div class="content">{{ item.titleMap }}</div>
        <div>
          <div class="d_flex mt-[20px] mb-[20px]">
            <img src="/src/assets/images/icon_subway.svg" alt="Logo" />
            <span>{{ item.titleSubway }}</span>
          </div>

          <div v-for="(move, index) in item.move" :key="index" class="d_flex flex-wrap mb-[30px]">
            <span class="number_row">{{ move.numberRow }}</span>
            <span>{{ move.startPoint }}</span>
            <span class="number_point">{{ move.numberPoint }}</span>
            <span>{{ move.exitPoint }}</span>
            <div v-for="(finalPoint, index) in move.finalPoint" class="d_flex" :key="index">
              <img src="/src/assets/images/icon_arrow_next.svg" alt="icon_next" />
              <img :src="finalPoint.icon" :alt="finalPoint.alt" />
              <span>{{ finalPoint.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
  data() {
    return {}
  },
  props: {
    images: {},
    data: []
  }
}
</script>

<style lang="scss" scoped>
.group_map {
  display: flex;
  flex-direction: row;
  gap: 60px;
}
@media screen and (max-width: 1023px) {
  .group_map {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
}

.content {
  margin-top: 40px;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
}
.group_map_label-info {
  margin-top: 20px;
  margin-left: 29px;
}
.d_flex {
  display: flex;
  gap: 10px;
  align-items: center;
}
.number_row {
  background: #31b633;
  padding: 4px 10px;
  border-radius: 6px;
}
.number_point {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #da9e34;
  display: grid;
  place-items: center;
}
</style>
