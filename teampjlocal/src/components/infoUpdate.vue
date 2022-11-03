<template>
  <div><h2>정보수정</h2></div>
  <div class="mb-3 mx-3">
    <label for="formGroupExampleInput" class="form-label">이름</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="이름을 입력해주세요" />
  </div>
  <div class="mb-3 mx-3">
    <label for="formGroupExampleInput2" class="form-label">사용자 ID(Email)</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="GD123@nate.com" disabled />
  </div>
  <div class="mb-3 mx-3">
    <label for="formGroupExampleInput2" class="form-label">전화번호</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="전화번호를 입력해주세요" />
  </div>
  <div class="mb-3 mx-3">
    <label for="formGroupExampleInput2" class="form-label">소속부서</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="개발 부서" disabled />
  </div>
</template>

<script>
export default {
  name: "infoUpdate",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped>
.mb-3 {
  text-align: left;
}
</style>
