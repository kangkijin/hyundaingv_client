<template>
  <div class="login_wrapper">
    <div class="login_content">
      <div class="login_box" style="position: relative">
        <div class="login_box_son">
          <h1 class="login_logo" style="justify-content: left">
            <a href="javascript:void(0);">
              <img src="../assets/images/header_logo2.png" alt="현대 NGV" />
            </a>
          </h1>
          <form id="loginForm" method="post">
            <div class="login_form">
              <p>
                <input
                  type="text"
                  v-model="username"
                  id="userId"
                  name="userId"
                  placeholder="아이디를 입력해주세요"
                  title="아이디"
                />
              </p>
              <p>
                <input
                  type="password"
                  id="userPw"
                  v-model="password"
                  name="userPw"
                  placeholder="비밀번호를 입력해주세요"
                  title="비밀번호"
                />
              </p>
              <p v-if="errMess" class="text-rose-600">{{ errMess }}</p>
              <button type="button" class="btn_lg btn_blue btn_login" @click="submit()">
                LOGIN
              </button>
              <div class="login_bottom">
                <p class="check_row">
                  <input type="checkbox" name="isSaveIdChk" id="isSaveIdChk" />
                  <label for="isSaveIdChk">아이디 저장</label>
                </p>
                <span>아이디 / 비밀번호 찾기</span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="image_box">
        <img
          width="600"
          class="imageLogin1"
          src="../assets/images/845969459679575676.png"
          alt="현대 NGV"
        />
        <img class="imageLogin2" src="../assets/images/547567678678687998.png" alt="현대 NGV" />
      </div>
    </div>
    <LoaddingComponent v-if="isLoad"></LoaddingComponent>
    <!-- footer -->
    <div id="footer" class="footer_wrap">
      <p>Copyright © 2024 HYUNDAI NGV COMPANY. <br />all right reserved.</p>
    </div>
    <!-- //footer -->
  </div>
  <ChangePasswordFirstLogin
    :isOpen="isOpenModalChangePass"
    :modalId="'modalChangePassword'"
    :mode="'detail'"
    :closeModal="closeModalChangePass"
  >
  </ChangePasswordFirstLogin>
</template>

<script lang="ts">
import { removeUserInfo, setAccessToken, setUserInfo } from '../utils/cookie'
import commonService from '../service/common/CommonService'
// import { userInfoStore } from '../stores/userInfo'
import LoaddingComponent from '../components/common/loading/LoaddingComponent.vue'
import ChangePasswordFirstLogin from './changePasswordFirstLogin/ChangePasswordFirstLogin.vue'

export default {
  components: {
    LoaddingComponent,
    ChangePasswordFirstLogin
  },
  data() {
    return {
      username: '',
      password: '',
      errMess: '',
      isLoad: false,
      isOpenModalChangePass: false
    }
  },
  mounted() {
    removeUserInfo()
  },
  methods: {
    submit() {
      let obj = {
        username: this.username,
        password: this.password
      }
      this.isLoad = true
      this.errMess = ''
      commonService.login(obj).then((response) => {
        this.isLoad = false
        if (response.status == 200 && response.data) {
          setUserInfo(response.data)
          setAccessToken(response.data.token)
          this.isLoad = false
          if (response.data.firstSignIn === 'Y') {
            this.isOpenModalChangePass = true
          } else {
            this.$router.push({ path: '/' })
          }
          return this.errMess
        }
        this.errMess = '아이디 또는 비밀번호가 일치하지 않습니다.'
      })
    },
    closeModalChangePass() {
      this.isOpenModalChangePass = false
    }
  }
}
</script>

<style scoped lang="scss">
.box-login {
  margin: 20px auto;
  padding: 28px;
  width: 400px;
  border: solid silver 1px;
  background: white;
}

.imageLogin2 {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: calc(100vh - 40px);
}

.imageLogin1 {
  position: absolute;
  top: 27%;
  z-index: 1;
}
</style>
