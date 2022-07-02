<template>
  <Lobby></Lobby>
</template>

<script>
import Lobby from "./components/Lobby.vue";

export default {
  components: {Lobby}
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #0d1117;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
}

input:active,
input:focus {
  outline: unset;
}

.spinner {
  border: 8px solid #00000047;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  z-index: 1;
  margin-left: -25px;
  margin-top: -25px;
  border-radius: 50%;
  border-bottom: 8px solid #e50914;
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}
</style>
