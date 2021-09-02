<template>
  <div class="container">

    <form @submit.prevent="register">

      <div class="form-group" :class="{ 'has-error': $v.email.$error }">
        <label>Email address</label>
        <input type="email" class="form-control" :class="{'control-error':$v.email.$error}" v-model="email">
        <div class="error" v-if="!$v.email.required">Name is required</div>
        <div class="error" v-if="!$v.email.minLength">Name must have at least {{ $v.email.$params.minLength.min }}</div>
        <div class="error" v-if="!$v.email.emailType">email doğru formatta değil</div>
        <div class="error" v-if="!$v.email.email">email doğru formatta değil2</div>
      </div>

      <div class="form-group" :class="{'has-error':$v.password.$error}">
        <label>Password</label>
        <input type="password" class="form-control" :class="{'control-error':$v.password.$error}" v-model="password">
        <div class="error" v-if="!$v.password.required">Parola zorunlu</div>
        <div class="error" v-if="!$v.password.minLength">Name must have at least {{
            $v.password.$params.minLength.min
          }}
        </div>
        <div class="error" v-if="!$v.password.passwordChar">Şifreniz en az bir özel karakter veya rakam içermelidir.
        </div>
      </div>

      <div class="form-group" :class="{'has-error':$v.repeatPassword.$error}">
        <label>Password Again</label>
        <input type="password" class="form-control" :class="{'control-error':$v.repeatPassword.$error}"
               v-model="repeatPassword">
        <div class="error" v-if="!$v.repeatPassword.required">Parola zorunlu</div>
        <div class="error" v-if="!$v.repeatPassword.minLength">Name must have at least
          {{ $v.repeatPassword.$params.minLength.min }}
        </div>
        <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Parola eşleşmedi</div>
      </div>

      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Üye Ol</button>

    </form>
  </div>
</template>

<script>
import {required, minLength, sameAs, email} from 'vuelidate/lib/validators';

import {passwordChar} from "../helpers/index"

export default {
  data() {
    return {
      email: null,
      password: null,
      repeatPassword: null
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(4),
      email,
      emailType: function (vm) {
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(vm);
      }
    },
    password: {
      required,
      minLength: minLength(4),
      passwordChar
    },
    repeatPassword: {
      sameAsPassword: sameAs('password'),
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    register() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('auth/register', {
          email: this.email,
          password: this.password
        }).then(response => {
          console.log("register", response);
          // this.$router.push("/");
        });
      }

    }
  }
}
</script>

<style scoped lang="scss">

.form-group {

  .error {
    display: none;
    color: red;
  }

  &.has-error {
    .control-error {
      border-color: red;
    }

    .error {
      display: block;
    }
  }
}

</style>
