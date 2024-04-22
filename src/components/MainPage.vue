<template>
  <div v-if="loading" class=" laoding-div-main">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "MainPage",
  data() {
    return {
      loading: false
    }
  },
  methods: {
    simulateLoading() {
      this.loading = true;

      // Simulate a delay for 3 seconds (adjust as needed)
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  },
  mounted() {
    // Simulate the loading state when the component is mounted
    this.simulateLoading();
  }

};
</script>
<style scoped>
.laoding-div-main {
  background-color: rgba(255, 255, 255, 0.553);
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .viewComps {
  min-height: 100dvh;
  overflow: auto;
} */
</style>