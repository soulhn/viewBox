<template>
  <div>
    <div><h2>프로젝트수정</h2></div>
    <div class="mb-3 mx-3">
      <label for="formGroupExampleInput" class="form-label">프로젝트이름</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="프로젝트 이름 입력" />
    </div>
    <div class="mb-3 mx-3">
      <label for="formGroupExampleInput2" class="form-label">프로젝트 설명</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="CK에디터 삽입" disabled />
    </div>
    <div class="mb-3 mx-3">
      <label for="formGroupExampleInput2" class="form-label">프로젝트 썸네일</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="이미지" />
    </div>
    <!-- 사진 -->
    <!-- 상품사진 -->
    <!-- <div class="mb-3"><img id="preview" /></div>
    <div class="mb-3">
      <label for="file" class="form-label">상품대표이미지</label>
      <input type="file" class="form-control" name="file" id="file" onchange="readURL(this);" />
    </div> -->
    <!-- 사진 끝 -->
    <div class="mb-3 mx-3">
      <label for="formGroupExampleInput2" class="form-label">소속부서</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="개발 부서" disabled />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectUpdate",
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
  methods: {
    //이미지 미리보기
    // readURL(input) {
    //   if (input.files && input.files[0]) {
    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //       document.getElementById("preview").src = e.target.result;
    //     };
    //     reader.readAsDataURL(input.files[0]);
    //   } else {
    //     document.getElementById("preview").src = "";
    //   }
    // },
  },
};
</script>

<style scoped></style>
