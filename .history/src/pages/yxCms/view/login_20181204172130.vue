<template>
  <div class="login-container">
    <div class="login-header clearfix">
      <img class="school-logo" src="static/lg-logo.png">
      <span class="title">迎新管理系统</span>
    </div>
    <div class="login-body clearfix">
      <img src="static/login-pic.png">
      <div class="content">
        <h3>迎新管理系统登录</h3>
        <el-form ref="login" :rules="rules" class="login-form" :model="login">
          <el-form-item prop="name">
            <div class="option clearfix">
              <span class="option-title">账号</span>
              <el-input v-model="login.name" type="text" ref="user" auto-complete="off" placeholder="账号"></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="password">
            <div class="option clearfix">
              <span class="option-title">密码</span>
              <el-input v-model="login.password" :type="inputType" auto-complete="off" @keyup.enter.native="handleLogin" placeholder="密码"></el-input>
              <img src="static/password-eye.png" @click="showPassword">
            </div>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" class="login-btn" style="width:100%" @click.native="handleLogin" :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    
    <!-- <el-form  :model="login" class="login-form" ref="login" label-position="left" :rules="rules">
      <h2 class="title">迎新管理系统</h2>
      <div class="container">
        <img class="logo" src="./logo.png" alt="">
        <el-form-item prop="name">
          <i class="icon iconfont icon-user"></i>
          <el-input v-model="login.name" type="text" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <i class="icon iconfont icon-mima"></i>
          <el-input v-model="login.password" type="password" auto-complete="off" @keyup.enter.native="handleLogin"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" class="login-btn" style="width:100%" @click.native="handleLogin" :loading="loading">登陆</el-button>
        </el-form-item>
      </div>
    </el-form> -->
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      login: {
        name: '',
        password: ''
      },
      inputType: 'password',
      loading: false,
      rules: {
        name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    showPassword(){
      if(this.inputType=='password'){
        this.inputType = 'text'
      }else {
        this.inputType = 'password'
      }
    },
    handleLogin () {
      this.$refs.login.validate((valid) => {
        console.log(this.$store)
        // 通过正则验证
        if (valid) {
          this.loading = true
          this.Login(this.login).then(res => {
            this.loading = false
            if (res) {
              // 登录成功
              this.$router.push('/')
            } else {
              this.MessageError('用户名或者密码错误')
            }
          }).catch((e) => {
            this.loading = false
          })
        }
      })
    },
    ...mapActions([
      'Login'
    ])
  },
  mounted () {
    this.$refs.user.focus()
  }
}
</script>

<style lang="stylus" scoped>
  .clearfix
    &:after
      content '\0020'
      display block
      height 0
      clear both
  .login-container
    height 100vh
    background url('/yxxt/static/login-bg.png') no-repeat
    background-size cover
    overflow auto
    .login-header
      width 1014px
      margin  15vh auto 15px
      .school-logo
        float left
        width 251px
        height 57px
      .title
        float left
        height 57px
        line-height 73px
        color #025C9D
        font-size 18px
        font-weight bold
        margin-left 20px
    .login-body
      width 1014px
      margin auto
      box-shadow: -3px 5px 15px #8ab2db
      .content
        float left
        width 507px
        height 486px
        padding 40px
        background #fff
        box-sizing border-box
        border 1px solid #fff
        border-radius 0 5px 5px 0
        h3
          font-size 16px
          color #444444
          font-weight bold
          letter-spacing 2px
          padding 40px 0 20px
          border-bottom 1px solid #ECECEC
        .login-form
          margin-top 60px
          >>>.el-form-item
            margin-bottom 45px
          >>>.el-input__inner
            background #F8F8F8
            border 0
          .option
            width 100%
            background #F8F8F8
            border 1px solid #E5E5E5
            border-radius 3px
            position relative
            .option-title
              &:after
                position absolute
                content ""
                width 2px
                height 15px
                background #dcdfe6
                top 13px
                left 67px
              float left
              font-size 14px
              padding 0 20px
              color #4FB0F6
            .el-input
              float left
              width 70%
            >img
              float left
              height 25px
              width 12px
              cursor pointer
      >img
        float left
        width 507px
        height 486px 
    // .login-form
    //   width 400px
    //   position absolute
    //   left 0
    //   right 0
    //   width 560px
    //   margin 100px auto 0 
    //   .title 
    //     font-size 50px
    //     color: black
    //     margin 0px auto 40px auto
    //     text-align center
    //     font-weight normal
    //     letter-spacing 5px
    //   .container
    //     padding 40px
    //     background-color white
    //     .logo
    //       margin-bottom 40px
    //       margin-left calc(50% - 77px)
    //   .item
    //     border 1px solid rgba(255, 255, 255, 0.1)
    //     background rgba(0, 0, 0, 0.1)
    //     border-radius 5px
    //     color #454545
    //     .input
    //       display inline-block
    //       height 47px
    //       width 85%
    //       border none
    //       background transparent
    //     &>>>input
    //       background transparent
    //       border 0px
    //       -webkit-appearance none
    //       border-radius 0px
    //       padding 12px 5px 12px 15px
    //       height 47px
    //       &:-webkit-autofill
    //         -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important
    //         -webkit-text-fill-color: #fff !important
</style>
