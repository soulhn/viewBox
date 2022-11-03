<template>
  <div>
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="ion-ios-close"></span>
          </button>
        </div>
        <div class="modal-body p-4 p-md-5">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="ion-ios-person"></span>
          </div>
          <h3 class="text-center mb-4">로그인</h3>
          <h4>{{ user_email }}</h4>
          <h4></h4>

          <form action="#" class="login-form">
            <!-- 아이디 시작 -->
            <div class="form-group">
              <input type="text" class="form-control rounded-left" placeholder="Username" v-model="user_email" />
            </div>
            <!-- 아이디 끝 -->
            <div class="form-group d-flex">
              <input type="password" class="form-control rounded-left" placeholder="Password" v-model="user_password" />
            </div>
            <!-- 비밀번호 끝 -->
            <div class="form-group">
              <button type="submit" class="form-control btn btn-primary rounded submit px-3">Login</button>
            </div>
            <div class="form-group d-md-flex">
              <!-- <span class="fill-control-description">아이디찾기</span> -->
              <div class="w-50 text-md-left">
                <a href="#">아이디찾기</a>
              </div>

              <div class="w-50 text-md-right">
                <a href="#">비밀번호찾기</a>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer justify-content-center">
          <p>Not a member? <a href="#">Create an account</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user_email: "",
      user_password: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    fnLogin() {
      if (this.user_email === "") {
        alert("ID를 입력하세요.");
        return;
      }

      if (this.user_password === "") {
        alert("비밀번호를 입력하세요.");
        return;
      }

      alert("로그인 되었습니다.");
    },
  },
};
</script>

<style src="../assets/css/login/style.css" scoped></style>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.0.0-19/css/ionicons.min.css";
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900";
</style>
