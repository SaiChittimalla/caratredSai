<template>
  <div v-if="loading" class="laoding-div-main ">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <navigations-route></navigations-route>
    <div class="container pt-5">
      <div class="text-center">
        <h2 style="color: #0e314c"><b>Domains</b></h2>
      </div>
      <div>
        <h6 class="text-muted">
          ERPNext includes modules for various business functions, such as
          Accounting, Sales, Purchasing, Inventory, Manufacturing, Human
          Resources, CRM, Projects, and more, providing a comprehensive and
          integrated solution to manage all aspects of an organization.
        </h6>
      </div>
      <div class="mt-5">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-sm-12 col-md-12 mb-4">
            <div class="card h-100 card1">
              <div class="mt-3 mb-4 d-flex justify-content-center">
                <i class="ri-user-settings-line"></i>
              </div>
              <h6 class="text-center mb-4">Manufacturing</h6>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-12 col-md-12 mb-4">
            <div class="card h-100 card2">
              <div class="mt-3 mb-4 d-flex justify-content-center">
                <i class="ri-hospital-line"></i>
              </div>
              <h6 class="text-center mb-4">Healthcare</h6>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-12 col-md-12 mb-4">
            <div class="card h-100 card3">
              <div class="mt-3 mb-4 d-flex justify-content-center">
                <i class="ri-store-line"></i>
              </div>
              <h6 class="text-center mb-4">Retail</h6>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-12 col-md-12 mb-4">
            <div class="card h-100 card4">
              <div class="mt-3 mb-4 d-flex justify-content-center">
                <i class="ri-money-rupee-circle-line"></i>
              </div>
              <h6 class="text-center mb-4">Financial services</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-sm-12 col-md-12 mb-4">
            <div class="card h-100 card5">
              <div class="mt-3 mb-4 d-flex justify-content-center">
                <i class="ri-medicine-bottle-line"></i>
              </div>
              <h6 class="text-center mb-4">Pharamaceutical</h6>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-12 col-md-12 mb-4">
            <div class="card h-100 card6">
              <div class="mt-3 mb-4 d-flex justify-content-center">
                <i class="ri-tv-2-line"></i>
              </div>
              <h6 class="text-center mb-4">IT Industry</h6>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-12 col-md-12 mb-4">
            <div class="card h-100 card7">
              <div class="mt-3 mb-4 d-flex justify-content-center">
                <i class="ri-truck-line"></i>
              </div>
              <h6 class="text-center mb-4">Transportation & Logistics</h6>
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
p {
  font-size: 13px;
}

.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.card1 {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #e7e7e7;
  background-color: var(--e-global-color-secondary);
  background-image: url("../../images/output-onlinepngtools3-150x150.png");
  background-position: center center;
  opacity: 1;
}

h6 {
  color: white;
}

.card2 {
  border-width: 1px 1px 1px 1px;
  opacity: 1;
  border-color: #e7e7e7;
  background-color: var(--e-global-color-secondary);

  background-position: center center;
  background-image: url("../../images/output-onlinepngtools4.png");
}

.card3 {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  opacity: 1;
  border-color: #e7e7e7;
  background-color: var(--e-global-color-secondary);
  background-image: url("../../images/output-onlinepngtools5.png");
  background-position: center center;
}

.card4 {
  border-width: 1px 1px 1px 1px;
  opacity: 1;
  border-color: #e7e7e7;
  background-color: var(--e-global-color-secondary);
  background-image: url("../../images/output-onlinepngtools1.png");
  background-position: center center;
}

.card5 {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  opacity: 1;
  border-color: #e7e7e7;
  background-color: var(--e-global-color-secondary);
  background-image: url("../../images/output-onlinepngtools2.png");
  background-position: center center;
}

.card6 {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  opacity: 1;
  border-color: #e7e7e7;
  background-color: var(--e-global-color-secondary);
  background-image: url("../../images/output-onlinepngtools.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.card7 {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  opacity: 1;
  border-color: #e7e7e7;
  background-color: var(--e-global-color-secondary);
  background-image: url("../../images/output-onlinepngtools6-300x200.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card {
  background-color: #0e314c;

  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  /* border-radius: 12px; */
  font-weight: bold;
  position: relative;
  z-index: 0;
  border-color: white;
  animation: card ease-in-out 0.9s infinite;
}

.card::before {
  transition: 0.5s ease-in;
  position: absolute;
  top: 0px;
  left: 0%;
  right: 100%;
  bottom: 0px;
  /* border-radius: 12px; */
  content: "";
  background-color: white;
  color: #0e314c;

  /* background-image: url(https://staging.caratred.in/wp-content/uploads/2020/01/bg-icon-box5.jpg) !important; */
}

.card:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.card:hover {
  background-color: transparent !important;
  color: white !important;
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}

.card:hover i {
  color: orangered;
}

.card:hover p {
  color: #0e314c !important;
}

.card:hover h6 {
  color: #0e314c !important;
}

i {
  font-size: 50px;
}

h6 {
  font-size: 14px;
}
</style>
<script>
import FooterDesign from "../FooterDesign.vue";
import NavigationsRoute from '../Navigation/NavigationsRoute.vue';
// import FooterPage from "../FooterPage.vue";

export default {
  components: {
    FooterDesign,
    NavigationsRoute,
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