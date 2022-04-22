<template>
    <div>
      <van-search
  shape="round"
  background="#cbf"
  placeholder="请输入搜索关键词"
/>
<tit></tit>
<van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in images" :key="image">
    <img :src="image" />
  </van-swipe-item>
</van-swipe>
    </div>
</template>
<script>
import tit from "@/components/title.vue";
export default {
  components: { tit },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped >
</style>

