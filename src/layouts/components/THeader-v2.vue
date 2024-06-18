<template>
<!--  <menu-top />-->
  <menu-top-responsive/>
</template>
<script lang="ts">
import MenuTopResponsive from '@/components/app-header/menu-top-responsive.vue'
import menuTop from '@/components/app-header/menu-top.vue'

export default {
  components: { MenuTopResponsive, menuTop },
}
</script>
