<template>
  <div class="login_container">
    <h1>一级路由登录</h1>
    <el-row>
      <el-col :span="14" :offset="3" :xs="24">
        <el-form :model="loginFormData" :rules="rules" class="login_form" ref="ruleFormRef">
          <div class="login_headline">
            <img src="/hana-icon.ico" />
            <h1>Hana文件管理系统</h1>
          </div>
          <el-form-item prop="username">
            <el-input class="login-input" :prefix-icon="User" name="username" type="text" placeholder="请输入用户名"
              v-model="loginFormData.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="login-input" :prefix-icon="Lock" show-password v-model="loginFormData.password"
              type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="loginBtn" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>

    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import useUserStore from "@/store/modules/user";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import type { FormRules } from "element-plus";
import { getCurrHours } from "@/utils/time";
import { loginForm } from "@/api/user/type";

// 获取pinia全局参数仓库
let userStore = useUserStore()
// 获取路由器 跳转页面
let $router = useRouter()
// 控制登录加载图标
let loading = ref(false)
// 收集表单参数
let loginFormData = reactive<loginForm>({
  username: 'admin',
  password: '111111'
})
// 获取form表单组件
let ruleFormRef = ref()


const login = async () => {
  // 确认表单校验通过后再发请求
  await ruleFormRef.value.validate();
  loading.value = true;
  try {
    let resualt = await userStore.userLogin(loginFormData)
    console.log(resualt);

    // 跳转到首页
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登陆成功',
      title: getCurrHours()
    })
    loading.value = false
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
    loading.value = false
  }
}

// 登录校验
const rules = reactive<FormRules<loginForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { required: true, min: 3, max: 7, message: '用户名位数应在3位到7位', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { required: true, min: 5, max: 10, message: '密码位数应在5位到10位' }
  ]

})

</script>

<style lang="scss" scoped>
.login_container {
  /* 主层必须为相对定位,否则伪元素的图片将不符合预期 */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/deskBg.jpg') no-repeat;
  background-size: cover;

  .login_headline {
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    align-self: flex-start; // 控制自身flex对齐

    img {
      margin-right: 10px;
    }
  }

  .login_form::before {
    // 插入空内容，必要的样式，否则不生效
    content: '';
    display: block;
    // 绝对定位，确保背景图起点
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    background: url('@/assets/images/colorBg.jpg') no-repeat;
    background-size: cover;
    // z轴-避免遮盖
    z-index: -1;
    opacity: 0.6;
  }

  .login_form {
    h1 {
      font-family: $login-chn-font;
      position: relative;
      color: #009490;
      top: 0;
      left: 0;
      font-size: 32px;
    }

    .login-input {
      width: 24vw;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    width: 50%;
    position: relative;
    top: 30vh;
  }

  .loginBtn {
    width: 25vw;
  }

}
</style>