<template>
  <div class="container_about" v-for="(item, index) in data" :key="index">
    <div class="container_about__left">
      <span class="min-w-[100px]">{{ item.title }}</span>
      <ul class="group_hisory" :class="index !== data.length - 1 ? 'line-container' : ''">
        <li
          class="line_container_mobile"
          :class="index === data.length - 1 ? 'line_node_frist' : ''"
        >
          <p class="round_node_frist"></p>
        </li>
        <li
          v-for="(itemChild, indexChild) in item.data"
          :key="itemChild.month"
          :class="{
            line_node_end: index === data.length - 1 && indexChild !== item.data.length - 1,
            line_container_mobile: indexChild !== item.data.length - 1
          }"
        >
          <p class="group_hisory-label_month mr-[20px]">
            {{ itemChild.month }}
          </p>
          <div class="group_hisory-label_group">
            <p class="group_hisory-label_label" v-for="label in itemChild.label" :key="label">
              {{ label }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="container_about__right">
      <figure v-for="image in item.images" :key="image.id" class="grid-item">
        <img :src="image.url" alt="Image" class="grid-item" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: []
  }
}
</script>

<style lang="scss" scoped>
.container_about {
  display: flex;
}
.container_about__left,
.container_about__right {
  flex-grow: 1;
}
.container_about__left > span {
  font-size: 40px;
  line-height: 40px;
  font-weight: 700;
  color: black;
  flex: 1;
}
img {
  border-radius: 12px;
}

.group_hisory {
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  & > *:nth-child(n + 2) {
    margin-bottom: 40px;
  }
  & > :last-child {
    margin-bottom: 70px;
  }
  & > li {
    list-style-type: circle;
    display: flex;
  }
}

.group_hisory-label_month {
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  margin-left: -1px;
}
.group_hisory-label_month::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-image: radial-gradient(circle, #d6dbe2 100%, transparent 0);
  background-size: 10px 10px;
  background-repeat: no-repeat;
  margin-right: 54px;
  border-radius: 50%;
}
.round_node_frist::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  background-image: radial-gradient(circle, white 100%, transparent 0);
  background-size: 10px 10px;
  background-repeat: no-repeat;
  margin-right: 60px;
  border-radius: 50%;
  border: 4px solid #916cff;
  margin-left: -3px;
}
.line_node_frist::before {
  content: '';
  position: relative;
  top: 17px;
  left: 4px;
  width: 1px;
  background-color: #d6dbe2;
  transform: translateX(-50%);
}

.line_node_end::before {
  content: '';
  position: relative;
  top: 12px;
  left: 4px;
  width: 1px;
  height: calc(100% + 40px);
  background-color: #d6dbe2;
  transform: translateX(-50%);
}

.group_hisory-label_group {
  flex: 13;
}
.group_hisory-label_label {
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 16px;
  max-width: 75%;
}
.group_hisory-label_label:last-child {
  margin-bottom: 0;
}
.line-container {
  position: relative;
}

.line-container::before {
  content: '';
  position: absolute;
  top: 16px;
  left: 4px;
  width: 1px;
  height: calc(100% + 102px);
  background-color: #d6dbe2;
  transform: translateX(-50%);
}

@media screen and (min-width: 1024px) {
  .container_about__right {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .grid-image {
    width: 100%;
    height: auto;
  }
  .container_about__left {
    display: flex;
    width: 70%;
    gap: 30px;
  }

  .container_about__left > .group_hisory {
    flex: 7;
  }
  img {
    max-width: 352px;
    max-height: 233px;
  }
}

@media screen and (max-width: 1023px) {
  .card_group {
    display: flex;
    flex-direction: column;
  }
  .container_about {
    display: flex;
    flex-direction: column;
  }
  .container_about__left,
  .container_about__right {
    width: 100%;
  }

  .container_about__right {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(204px, 1fr));
    gap: 10px;
  }
  .grid-item {
    flex-basis: 50%;
  }
  .line-container::before {
    display: none;
  }
  .line_container_mobile {
    position: relative;
  }
  .line_container_mobile::before {
    content: '';
    position: absolute;
    top: 17px;
    left: 4px;
    width: 1px;
    height: calc(100% + 40px);
    background-color: #d6dbe2;
    transform: translateX(-50%);
  }
}
</style>
