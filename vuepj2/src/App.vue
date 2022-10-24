<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding/string">문자열바인딩</router-link> |
    <router-link to="/databinding/html">HTML바인딩</router-link> |
    <router-link to="/databinding/input">Input 양방향 바인딩</router-link> |
    <router-link to="/databinding/select">select 사용! </router-link> |
    <router-link to="/databinding/check">CheckBox 사용! </router-link> |
    <router-link to="/databinding/radio">라디오 사용! </router-link> |
    <router-link to="/databinding/attr">속성 변경! </router-link> |
    <router-link to="/databinding/list">배열 바인딩! </router-link> |
    <router-link to="/databinding/class">클래스 바인딩! </router-link> |
  </nav>
  <router-view />
</template>

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
