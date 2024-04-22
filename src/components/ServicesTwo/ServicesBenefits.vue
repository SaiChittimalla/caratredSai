<template>
  <div v-if="loading" class="laoding-div-main ">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div"></div>
  <navigations-route></navigations-route>
  <div class="container pt-5">
    <div class="text-center">
      <h2 style="color: #0e314c"><b>Benefits</b></h2>
    </div>
    <div>
      <p class="text-muted">
        The benefits of ERPNext include streamlined business processes, improved
        data visibility and analysis, enhanced collaboration among teams,
        increased efficiency, and cost-effectiveness due to its open-source
        nature.
      </p>
    </div>
    <div class="row">
      <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
        <div class="simple-card">
          <div style="color: orangered">
            <i class="ri-file-settings-line"></i>
          </div>

          <div class="iconmain"></div>
          <p class="text-muted">Free and Open Source Software</p>
        </div>
      </div>
      <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
        <div class="simple-card">
          <div style="color: orangered">
            <i class="ri-database-2-line"></i>
          </div>

          <div class="iconmain"></div>
          <p class="text-muted">All modules on single platform</p>
        </div>
      </div>
      <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
        <div class="simple-card">
          <div style="color: orangered">
            <i class="ri-user-settings-line"></i>
          </div>

          <div class="iconmain"></div>
          <p class="text-muted">Highly customizable</p>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="row">
        <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
          <div class="simple-card">
            <div style="color: orangered">
              <i class="ri-play-line"></i>
            </div>

            <div class="iconmain"></div>
            <p class="text-muted">Integrate with 3rd party apps</p>
          </div>
        </div>
        <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
          <div class="simple-card">
            <div style="color: orangered">
              <i class="ri-money-rupee-circle-line"></i>
            </div>

            <div class="iconmain"></div>
            <p class="text-muted">Hosted on Cloud and Cost Effective</p>
          </div>
        </div>
        <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
          <div class="simple-card">
            <div style="color: orangered">
              <i class="ri-user-shared-line"></i>
            </div>

            <div class="iconmain"></div>
            <p class="text-muted">
              No limitation to number of users or amount of data
            </p>
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
</template>
<style scoped>
i {
  font-size: 50px;
}

.simple-card:hover .iconmain::after {
  transform: scaleX(1);
}

p {
  font-size: 13px;
}

.iconmain {
  height: 3px;
  width: 100%;
  background: #efefef;
  margin-bottom: 15px;
  position: relative;
}

.iconmain::after {
  content: "";
  display: block;
  right: 0;
  top: 0;
  width: 0;
  background: #7141b1;
  height: 3px;
  width: 100%;
  transition: all 0.5s ease;
  transform: scaleX(0);
  transform-origin: left;
  background: orangered;
}
</style>
<script>
import FooterDesign from '../FooterDesign.vue';
import NavigationsRoute from '../Navigation/NavigationsRoute.vue';
// import FooterPage from "../FooterPage.vue";

export default {
  components: {
    FooterDesign,
    NavigationsRoute
    // FooterPage,
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