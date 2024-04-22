<template>
  <div v-if="loading" class=" laoding-div-main">
    <div class=" position-relative ">
      <div class="white-bg"></div>
      <img src="./assets/Logofinal.jpg" alt="">
    </div>
  </div>
  <div v-if="!loading" class="loading-div">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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

      }, 2000);
    },
  },
  mounted() {
    // Simulate the loading state when the component is mounted
    this.simulateLoading();
  }
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  /* font-family: "Nunito Sans", sans-serif; */

}

i {
  font-weight: 200;
}

.white-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.575);
  animation: downtoTop 1s infinite;

}

@keyframes downtoTop {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-50px);
  }
}



::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: orangered;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}

.laoding-div-main {
  background-color: rgba(255, 255, 255, 0.553);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.font-clr-blue {
  color: #0E314C !important;
}

.bg-clr-blue {
  background-color: #0E314C !important;
}

.font-clr-org {
  color: #EF5350;
}

.fw-weight-800 {
  font-weight: 800;
}

.para-clr {
  color: #222222;
}

.font-size-h6 {
  font-size: 20px;
}

.font-h3 {
  font-size: 30px;
}

.font-h2 {
  font-size: 36px;
}

.heading-slash {
  font-size: 14px;
  font-weight: 800;
  color: #EF5350;
  position: relative;
  display: inline-block;
  margin-bottom: 2px;
  text-transform: uppercase;
}

.heading-slash-white {
  font-size: 14px;
  font-weight: 800;
  color: #ffffff;
  position: relative;
  display: inline-block;
  margin-bottom: 2px;
  text-transform: uppercase;
}
</style>
