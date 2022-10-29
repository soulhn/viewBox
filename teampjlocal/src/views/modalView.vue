<template>
  <div>
    <button @click="modalControl">모달 열기</button>
    <div class="black-bg" v-if="openModal">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지내용임</p>
        <button @click="modalControl">모달 닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      openModal: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    modalControl() {
      this.openModal = !this.openModal;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
