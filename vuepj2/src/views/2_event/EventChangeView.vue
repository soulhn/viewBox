<template>
  <div>
    <select name="" id="">
      <option value="">==도시선택==</option>
      <option value="city.code" :key="city.code" v-for="city in cityList">
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option value=""></option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cityList: [
        { cityCode: "02", title: "서울" },
        { cityCode: "051", title: "부산" },
        { cityCode: "064", title: "제주" },
      ],
      dongList: [
        { cityCode: "02", dongCode: "1", dongTitle: "서울 1동" },
        { cityCode: "02", dongCode: "2", dongTitle: "서울 2동" },
        { cityCode: "02", dongCode: "3", dongTitle: "서울 3동" },
        { cityCode: "02", dongCode: "4", dongTitle: "서울 4동" },
        { cityCode: "051", dongCode: "1", dongTitle: "부산 1동" },
        { cityCode: "051", dongCode: "2", dongTitle: "부산 2동" },
        { cityCode: "051", dongCode: "3", dongTitle: "부산 3동" },
        { cityCode: "064", dongCode: "1", dongTitle: "제주 1동" },
        { cityCode: "064", dongCode: "2", dongTitle: "제주 2동" },
        { cityCode: "064", dongCode: "3", dongTitle: "제주 3동" },
      ],
      selectedDongList: [],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
