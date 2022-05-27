<template>
  <Lobby></Lobby>
</template>

<script>
import Lobby from "./components/Lobby.vue";
import Config from "./config";

const axios = require('axios').default;

export default {
  components: {Lobby},
  mounted() {
    axios.get(Config.apiUrl + '/login', {
      params: {
        ID: 12345
      },
      withCredentials: true
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
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
}
</style>
