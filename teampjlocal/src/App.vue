<template>
  <nav>
    <MyHearder />
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/modal">Modal</router-link>
  </nav>
  <button type="button" class="btn btn-primary">Primary</button>
  <router-view />
</template>

<script>
import MyHearder from "./components/Header.vue";

export default {
  name: "Header",
  components: {
    MyHearder,
  },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    apiAddress
      .getAdress("address")
      .then((response) => {
        this.addressBook = response.data;
      })
      .catch(function (e) {
        console.log(e);
        console.log("Adress를 호출하는 중 오류");
      });
  },
  unmounted() {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
