<template>
    <section id="content" class="content_wrapper grid_content" tabindex="0">
        <DashBoardMentor v-if="roleCode == roleMentor"></DashBoardMentor>
        <DashBoard v-if="roleCode == roleStudent"></DashBoard>
    </section>
</template>
<script lang="ts">
import DashBoardMentor from '../views/dashBoardMentor/DashBoardMentor.vue'
import DashBoard from './dashBoard/DashBoard.vue';
import { getUserInfo } from '../utils/cookie';
import { ROLE_MENTOR, ROLE_STUDENT } from '../constants/common.const';
export default {
    components: {
        DashBoardMentor,
        DashBoard
    },
    data() {
        return {
            roleMentor: ROLE_MENTOR,
            roleStudent: ROLE_STUDENT,
            userInfo: {},
            roleCode: '',
        }
    },
    mounted() {
        this.userInfo = JSON.parse(getUserInfo());
        this.roleCode = this.userInfo.role.code;
    }
}
</script>