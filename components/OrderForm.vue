<template>
  <form :class="$style.orderForm" @submit.prevent="submit">
    <input
      v-model.trim="$v.name.$model"
      :class="[$style.input, $v.name.$error ? $style.inputError : '']"
      placeholder="Ваше имя"
    >
    <div v-show="$v.name.$dirty">
      <div v-if="!$v.name.required" :class="$style.error">
        Это обязательное поле. Оно не должно быть пустым.
      </div>
      <div v-else-if="!$v.name.minLength" :class="$style.error">
        Напише как минимум {{ $v.name.$params.minLength.min }} буквы.
      </div>
    </div>

    <input
      v-model.trim="$v.phone.$model"
      v-mask="{ mask: ['+\\7 (999) 999-99-99'], placeholder: '_', }"
      :class="[$style.input, $v.phone.$error ? $style.inputError : '']"
      placeholder="Телефон"
    >
    <div v-show="$v.phone.$dirty">
      <div v-if="!$v.phone.required" :class="$style.error">
        Это обязательное поле. Оно не должно быть пустым.
      </div>
    </div>

    <input
      v-model.trim="$v.address.$model"
      :class="[$style.input, $v.address.$error ? $style.inputError : '']"
      placeholder="Адрес"
    >
    <div v-show="$v.address.$dirty">
      <div v-if="!$v.address.required" :class="$style.error">
        Это обязательное поле. Оно не должно быть пустым.
      </div>
      <div v-else-if="!$v.address.minLength" :class="$style.error">
        Напише как минимум {{ $v.address.$params.minLength.min }} буквы.
      </div>
    </div>

    <button :class="$style.button">
      Отправить
    </button>
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      name: '',
      address: '',
      phone: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    address: {
      required,
      minLength: minLength(2)
    },
    phone: {
      required
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const orderData = {
          name: this.name,
          address: this.address,
          phone: this.phone.replace(/[^\d]/g, '')
        }
        this.name = ''
        this.address = ''
        this.phone = ''
        this.$emit('submit', orderData)
      }
    }
  }
}
</script>

<style lang="scss" module>

  .orderForm {

    .input {
      background: #F8F8F8;
      border: none;
      border-radius: 8px;
      color: #1F1F1F;
      height: 50px;
      width: 100%;
      margin-bottom: 2rem;
      padding: 14px;
      font-size: 14px;
      font-weight: 400px;
      outline: none;

      @media screen and (max-width: 600px) {
        height: 40px;
        padding: 8px;
      }
    }

    &::placeholder {
      color: $basic-gray;
    }

    .inputError {
      background: rgb(255, 240, 240);
      border: 1px solid red;
      animation-name: shakeError;
      animation-fill-mode: forwards;
      animation-duration: .6s;
      animation-timing-function: ease-in-out;
    }

    .error {
      height: 1rem;
      margin: -1.75rem 0 .75rem 1rem;
      color: red;
      font-size: 0.75rem;
      font-weight: 400;
    }

    .button {
      @include buttonInCart;
    }
  }
</style>
