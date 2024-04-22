<template>
  <div v-if="loading" class="laoding-div-main ">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <navigations-route></navigations-route>
    <div class="container pt-5 ">
      <div class="text-center">
        <h2 style="color: #0e314c">Technology</h2>
      </div>
      <div>
        <p class="text-muted">
          DevOps and infrastructure management involve the integration of
          development and operations teams to automate and streamline the process
          of deploying and managing IT infrastructure, enabling faster and more
          reliable software delivery.
        </p>
      </div>
      <div class="mt-4">
        <div class="row">
          <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6">
            <div class="d-flex gap-5 align-items-center cardhover">
              <div class="mb-4">
                <i class="ri-sort-alphabet-desc"></i>
              </div>
              <div>
                <h6><b>Language & Framework</b></h6>
                <p class="text-muted">Python, Frappe, Angular, React</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6">
            <div class="d-flex gap-5 align-items-center cardhover">
              <div class="mb-4">
                <i class="ri-database-2-line"></i>
              </div>
              <div>
                <h6><b>Database</b></h6>
                <p class="text-muted">MongoDB, SQL, MariaDB</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6">
            <div class="d-flex gap-5 align-items-center cardhover">
              <div class="mb-4">
                <i class="ri-store-line"></i>
              </div>
              <div>
                <h6><b>ai/ML</b></h6>
                <p class="text-muted">Machine Learning, OCR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="row">
          <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6">
            <div class="d-flex gap-5 align-items-center cardhover">
              <div class="mb-4">
                <i class="ri-settings-3-line"></i>
              </div>
              <div>
                <h6><b>ERP Solution</b></h6>
                <p class="text-muted">Frappe, ERPNext</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6">
            <div class="d-flex gap-5 align-items-center cardhover">
              <div class="mb-4">
                <i class="ri-list-settings-line"></i>
              </div>
              <div>
                <h6><b>Automation</b></h6>
                <p class="text-muted">RPA, Selenium, TagUI</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6">
            <div class="d-flex gap-5 align-items-center cardhover">
              <div class="mb-4">
                <i class="ri-user-settings-line"></i>
              </div>
              <div>
                <h6><b>DevOps</b></h6>
                <p class="text-muted">G Cloud, AWS, Azure</p>
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
p {
  font-size: 14px;
}

i {
  font-size: 45px;
  color: #0e314c;
}

h6 {
  color: #0e314c;
}

.cardhover:hover h6 {
  color: orangered;
}

.cardhover:hover i {
  color: orangered;
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