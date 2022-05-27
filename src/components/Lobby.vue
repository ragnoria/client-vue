<template>

  <div class="top-shadow"></div>

  <div class="logo">
    <img src="/assets/img/logo.png">
  </div>

  <div class="credentials">
    <h1>Zaloguj się</h1>
    <div class="form-group">
      <input v-model="email" @focusin="emailFocused = true" @focusout="emailFocused = false" id="email" type="text"/>
      <label :class="{active: emailFocused || email.length}" for="email">Email</label>
    </div>
    <div class="form-group">
      <input v-model="password" @focusin="passwordFocused = true" @focusout="passwordFocused = false" id="password" type="password"/>
      <label :class="{active: passwordFocused || password.length}" for="password">Hasło</label>
    </div>
    <button>Zaloguj się</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      emailFocused: false,
      password: '',
      passwordFocused: false,
    }
  },
}
</script>

<style scoped>
.top-shadow {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 32px;
  -webkit-box-shadow: inset 0 25px 25px -25px #000;
  -moz-box-shadow: inset 0 25px 25px -25px #000;
  box-shadow: inset 0 25px 25px -25px #000;
}

.logo {
  position: absolute;
  top: 10px;
  left: 20px;
}

.credentials {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  height: 400px;
  margin-left: -225px;
  margin-top: -200px;
  padding: 60px;
  background: #00000060;
  border-radius: 4px;
}

.credentials h1 {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 28px 0;
}

.credentials .form-group {
  position: relative;
  margin-bottom: 16px;
}

.credentials input {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 16px 20px 0;
  background: #333333;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 100ms;
}

.credentials label {
  position: absolute;
  top: 50%;
  color: #8c8c8c;
  left: 20px;
  margin-top: -10px;
  line-height: 20px;
  pointer-events: none;
  transition: all 100ms;
}

.credentials label.active {
  margin-top: -22px;
  font-size: 11px;
}

.credentials input:active,
.credentials input:focus {
  background: #454545;
  outline: unset;
}

.credentials button {
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  background: #e50914;
  color: #fff;
  cursor: pointer;
  transition: background 100ms;
}

.credentials button:active {
  background: #dc2d35;
}
</style>
