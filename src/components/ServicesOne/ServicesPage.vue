<template>
  <div v-if="loading" class="laoding-div-main ">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <navigations-route></navigations-route>
    <div class="container pt-5">
      <div class="text-center mt-2">
        <h2><b>Our Services</b></h2>
      </div>
      <div class="mt-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-4">
            <div class="card shadow h-100">
              <div class="">
                <div class="d-flex justify-content-center">
                  <div class="card-img-top mt-5">
                    <div class="profile-div m-auto">
                      <h1 style="font-size: 50px">E</h1>
                      <!-- <i class="ri-shield-user-line"></i> -->
                    </div>
                    <div>
                      <p class="text-center mt-5">ERP NEXT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-4">
            <div class="card shadow h-100">
              <div class="">
                <div class="d-flex justify-content-center">
                  <div class="card-img-top mt-5">
                    <div class="profile-div m-auto">
                      <i class="ri-robot-2-line"></i>
                      <!-- <i class="ri-shield-user-line"></i> -->
                    </div>
                    <div>
                      <p class="text-center mt-5">RPA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-4">
            <div class="card shadow h-100">
              <div class="">
                <div class="d-flex justify-content-center">
                  <div class="card-img-top mt-5">
                    <div class="profile-div m-auto">
                      <i class="ri-database-2-line"></i>
                      <!-- <i class="ri-shield-user-line"></i> -->
                    </div>
                    <div>
                      <p class="text-center mt-5">Devops and Infra Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="mt-5">
        <!-- <footer-page></footer-page> -->
        <footer-design></footer-design>
      </div>
    </section>
  </div>
</template>
<style scoped>
h2 {
  color: #0e314c;
}

.profile-div {
  width: 90px;
  background-color: #f4f2fc;
  height: 90px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-div:hover {
  background-color: orangered;
  transition: all 0.5s ease;
  color: white;
}

.card:hover .profile-div {
  background-color: orangered;
  color: white;
}

i {
  font-size: 50px;
  color: #0e314c;
}

p {
  color: #0e314c;
}

.card:hover {
  transform: translateY(-5%);
}

.card {
  transition: all 0.5s ease;
}

.card:hover i {
  /* background-color: orangered; */
  /* transition: all 0.5s ease; */
  color: white;
}

.card:hover h1 {
  color: white;
}
</style>
<script>
import FooterDesign from "../FooterDesign.vue";
import NavigationsRoute from "../Navigation/NavigationsRoute.vue";
// import FooterPage from "../FooterPage.vue";

export default {
  components: {
    NavigationsRoute,
    // FooterPage,
    FooterDesign,
  },
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
      }, 800);
    }
  },
  mounted() {
    // Simulate the loading state when the component is mounted
    this.simulateLoading();
  }
};
</script>