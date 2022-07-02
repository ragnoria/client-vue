<template>
  <div id="lobby">
    <div class="top-shadow"></div>

    <div class="logo">
      <img src="/assets/img/logo.png">
    </div>

    <div class="sidebar">
      <button class="btn btn-default" :class="{'active': activeWindow === 'login'}" @click="activeWindow = 'login'">Logowanie</button>
      <button class="btn btn-default" :class="{'active': activeWindow === 'register'}" @click="activeWindow = 'register'">Rejestracja</button>
    </div>

    <div class="main-content">
      <div v-if="activeWindow === 'loading'">
        <div class="spinner"></div>
      </div>

      <div v-if="activeWindow === 'login'">
        <div class="form-group">
          <input class="input-default" v-model="email" @focusin="emailFocused = true" @focusout="emailFocused = false"
                 id="email" type="text"/>
          <label :class="{active: emailFocused || email.length}" for="email">Email</label>
        </div>
        <div class="form-group">
          <input class="input-default" v-model="password" @focusin="passwordFocused = true"
                 @focusout="passwordFocused = false" id="password" type="password"/>
          <label :class="{active: passwordFocused || password.length}" for="password">Hasło</label>
        </div>
        <button class="btn btn-default" @click="login()">Zaloguj się</button>
      </div>

      <div v-if="activeWindow === 'register'">
        <div class="form-group">
          <input class="input-default" v-model="email" @focusin="emailFocused = true" @focusout="emailFocused = false"
                 id="email" type="text"/>
          <label :class="{active: emailFocused || email.length}" for="email">Email</label>
        </div>
        <div class="form-group">
          <input class="input-default" v-model="password" @focusin="passwordFocused = true"
                 @focusout="passwordFocused = false" id="password" type="password"/>
          <label :class="{active: passwordFocused || password.length}" for="password">Hasło</label>
        </div>
        <div class="form-group">
          <input class="input-default" v-model="passwordConfirmation" @focusin="passwordConfirmationFocused = true"
                 @focusout="passwordConfirmationFocused = false" id="password-confirmation" type="password"/>
          <label :class="{active: passwordConfirmationFocused || passwordConfirmation.length}"
                 for="password-confirmation">Powtórz hasło</label>
        </div>
        <button class="btn btn-default" @click="register()">Załóż Konto</button>
      </div>

      <div v-if="activeWindow === 'manage'">
        <button @click="logout()">Wyloguj</button>
      </div>
    </div>

  </div>

</template>

<script>
import Config from "../config";

const axios = require('axios').default;

export default {

  data() {
    return {
      activeWindow: 'loading',
      email: '',
      emailFocused: false,
      password: '',
      passwordFocused: false,
      passwordConfirmation: '',
      passwordConfirmationFocused: false,
    }
  },

  methods: {

    login() {
      this.activeWindow = 'loading';
      axios.post(Config.apiUrl + '/login', {
        email: this.email,
        password: this.password,
      }, {
        withCredentials: true
      }).then((response) => {
        this.activeWindow = 'manage';
        window.Echo.connect();
      }).catch((error) => {
        this.activeWindow = 'login';
      });
    },

    register() {
      this.activeWindow = 'loading';
      axios.post(Config.apiUrl + '/register', {
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      }, {
        withCredentials: true
      }).then((response) => {
        this.activeWindow = 'login';
      }).catch((error) => {
        this.activeWindow = 'register';
      });
    },

    logout() {
      this.activeWindow = 'loading';
      axios.post(Config.apiUrl + '/logout', {}, {
        withCredentials: true
      }).then((response) => {
        this.activeWindow = 'login';
      });
    }

  },

  mounted() {
    axios.get(Config.apiUrl + '/check', {
      withCredentials: true
    }).then((response) => {
      this.activeWindow = response.data.status ? 'manage' : 'login';
    });
  }

}
</script>

<style scoped>
#lobby {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url('/assets/img/title-background.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.top-shadow {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 32px;
  -webkit-box-shadow: inset 0 25px 25px -25px #000;
  -moz-box-shadow: inset 0 25px 25px -25px #000;
  box-shadow: inset 0 25px 25px -25px #000;
  pointer-events: none;
}

.logo {
  position: absolute;
  top: 35px;
  left: 50%;
  width: 520px;
  margin-left: -260px;
  pointer-events: none;
}

.logo img {
  width: 100%;
}

.sidebar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 300px;
  margin-left: -450px;
  margin-top: -150px;
}

.main-content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin-left: -150px;
  margin-top: -150px;
}

.form-group {
  position: relative;
  margin-bottom: 16px;
}

.input-default {
  width: 100%;
  height: 45px;
  padding: 16px 20px 2px;
  color: #ccc;
  font-size: 14px;
  border: 0;
  border-image-slice: 8 8 8 8 fill;
  border-image-width: 8px 8px 8px 8px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch;
  border-image-source: url('/assets/img/border-input.png');
  box-shadow: 0 1px 2px 0 #000;
  transition: all 100ms;
}

.input-default:focus {
  filter: brightness(1.50);
}

label {
  position: absolute;
  top: 50%;
  color: #ffb96091;
  left: 20px;
  margin-top: -10px;
  line-height: 20px;
  pointer-events: none;
  transition: all 100ms;
  text-shadow: 0 0 2px #000;
}

label.active {
  margin-top: -20px;
  font-size: 11px;
}

.btn {
  font-weight: bold;
  cursor: pointer;
}

.btn-default {
  width: 100%;
  font-size: 14px;
  color: #c5c5c5;
  height: 45px;
  margin: 0 0 6px;
  border: 0;
  border-image-slice: 15 27 15 27 fill;
  border-image-width: 15px 20px 15px 20px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch;
  border-image-source: url('/assets/img/border-button.png');
  box-shadow: 0 1px 2px 0 #000;
  transition: filter 100ms;
}
.btn-default:hover {
  color: #fff;
  border-image-source: url('/assets/img/border-button-active.png');
}
.btn-default:active {
  filter: brightness(1.1);
}
.btn-default.active {
  color: #ffee90;
  text-shadow: 0 0 12px #ffee9085;
  border-image-source: url('/assets/img/border-button-active.png');
  border-style: solid;
}
</style>
