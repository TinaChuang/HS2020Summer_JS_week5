<template>
  <div class="container d-flex justify-content-center">
    <div class="col-6">
      <!-- 姓名 -->
      <div class="form-group">
        <ValidationProvider rules="required" v-slot="{ errors }">
          <label for="name">收件人姓名</label>
          <input class="form-control" type="text" id="name" v-model="name" placeholder="收件人姓名">
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <!-- Email -->
      <div class="form-group">
        <ValidationProvider rules="required|email" v-slot="{ errors }">
          <label for="email">Email</label>
          <input class="form-control" id="email" type="email" name="email" v-model="email" placeholder="ABC@gmail.com">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <!-- 電話 -->
      <div class="form-group">
        <label for="">聯絡電話</label>
        <input class="form-control" type="tel" maxlength="10" placeholder="家電/手機">
        <span></span>
      </div>
      <!-- 地址 -->
      <div class="form-group">
        <label for="">收件地址</label>
        <input class="form-control" type="text">
        <span></span>
      </div>
      <!-- 付款方式 -->
      <div class="form-group">
        <label for="">付款方式</label>
        <select class="form-control">
          <option value="null">付款方式</option>
          <option value="WebATM">WebATM</option>
          <option value="ATM">ATM</option>
          <option value="Barcode">Barcode</option>
          <option value="Credit">Credit</option>
          <option value="ApplePay">ApplePay</option>
          <option value="GooglePay">GooglePay</option>
        </select>
        <span></span>
      </div>
      <!-- 備註 -->
      <div class="form-group">
        <label for="">備註</label>
        <textarea class="form-control"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */ // 已在全域註冊 $ 但在每個需要用到 jQuery 的元件中新增這一段，否則 ES-lint 會報錯
// 表單驗證套件
import { ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
})

// Add the email rule
extend('email', {
  ...email,
  message: 'This field must be a valid email'
})

export default {
  components: {
    ValidationProvider
  },
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      payment: '',
      msg: ''
    }
  },
  mounted () {
    console.log($('h1'))
  }
}
</script>
