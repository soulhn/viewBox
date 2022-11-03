<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <modalAdress></modalAdress>
</template>

<script>
// @ is an alias to /src

import modalAdress from "@/components/modalAdress.vue";
export default {
  name: "HomeView",
  components: {
    modalAdress,
  },
};
</script>
