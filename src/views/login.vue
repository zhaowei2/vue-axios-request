<template>
  <form>
    <div>
          <label for="">用户名：</label>
          <input type="text" v-model="loginForm.userName">
    </div>
    <div>
          <label for="">用户名：</label>
          <input type="text" v-model="loginForm.password" @keyup.enter.native="toSubmit">
    </div>
    <div>
      <button @click="toSubmit('loginForm')" >
        登录
      </button>
    </div>
  </form>
</template>

<script>
import { login } from "@/api/login";
export default {
  data() {
    return {
      loginForm: {
        userName: "13881111222",
        password: "123456"
      }
    };
  },
  methods: {
    /* 
    *@method 登陆验证 
    *@param {loginForm | String} 表单名称

    **/
    toSubmit() {
        //验证通过
        this.toLogin();
    },
    /*
     *@method 登陆
     **/
    toLogin() {
      login(this.loginForm).then(( res) => {
        console.log(res)
        if (res.code === 0) {
          localStorage.setItem("userToken", res.token);
          localStorage.setItem("strHeadImg", res.adminUser.strHeadImg);
          localStorage.setItem("strNickName", res.adminUser.strNickName);
          this.$router.push({ path: "/layout/home" });
        } else {
            // console.log(data)
        }
      });
    }
  }
};
</script>

<style scoped>
.login-logo {
  width: 50px;
  height: 50px;
  margin: 20px;
}
.login-form {
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
