<template>
  <div v-if="loading" class="laoding-div-main ">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <navigations-route></navigations-route>
    <div class="container pt-5">
      <div class="text-center">
        <h2 style="color: #0e314c"><b>Usage of RPA </b></h2>
      </div>
      <div>
        <h6 class="text-muted">
          Robotic Process Automation (RPA) is used across various industries and
          business functions to automate repetitive, rule-based tasks and
          processes.
        </h6>
      </div>

      <section>
        <div class="mt-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-sm-12 col-md-12 mb-4">
              <div class="d-flex busshover gap-3">
                <div>
                  <h6 class="text-end"><b>Web Tasks</b></h6>
                  <p class="text-muted text-end">
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
                <div>
                  <i class="ri-tv-2-line"></i>
                </div>
              </div>
              <div class="d-flex busshover gap-3 mt-4">
                <div>
                  <h6 class="text-end"><b>File Management</b></h6>
                  <p class="text-muted text-end text-end">
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
                <div>
                  <i class="ri-article-line"></i>
                </div>
              </div>
              <div class="d-flex busshover gap-3 mt-4">
                <div>
                  <h6 class="text-end"><b>Job Scheduling</b></h6>
                  <p class="text-muted text-end">
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
                <div>
                  <i class="ri-calendar-line"></i>
                </div>
              </div>
              <div class="d-flex busshover gap-3 mt-4">
                <div>
                  <h6 class="text-end"><b>Batch Processing</b></h6>
                  <p class="text-muted text-end">
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
                <div>
                  <i class="ri-settings-4-line"></i>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-12 col-md-12 mb-4">
              <img src="../../images/r1-1.png" class="w-100" />
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-12 col-md-12 mb-4">
              <div class="d-flex busshover gap-3">
                <div>
                  <i class="ri-windows-line"></i>
                </div>
                <div>
                  <h6 class=""><b>IT & System Admin</b></h6>
                  <p class="text-muted">
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
              </div>
              <div class="d-flex busshover gap-3 mt-4 busshover">
                <div>
                  <i class="ri-tools-fill"></i>
                </div>
                <div>
                  <h6 class=""><b>Business Processes</b></h6>
                  <p class="text-muted">
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
              </div>
              <div class="d-flex busshover gap-3 mt-4">
                <div>
                  <i class="ri-file-transfer-line"></i>
                </div>
                <div>
                  <h6 class=""><b>Data Transfer</b></h6>
                  <p class="text-muted">
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
              </div>
              <div class="d-flex busshover gap-3 mt-4">
                <div>
                  <i class="ri-database-2-line"></i>
                </div>
                <div>
                  <h6 class=""><b>Web Data Extraction</b></h6>
                  <p class="text-muted">
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section>
      <!-- <footer-page></footer-page> -->
      <footer-design></footer-design>
    </section>
  </div>
</template>
<style scoped>
i {
  font-size: 50px;
  color: #0e314c;
}

p {
  font-size: 13px;
}

.busshover:hover i {
  color: orangered;
}
</style>
<script>
import FooterDesign from "../FooterDesign.vue";
import NavigationsRoute from "../Navigation/NavigationsRoute.vue";
// import FooterPage from "../FooterPage.vue";

export default {
  components: {
    // FooterPage,
    FooterDesign,
    NavigationsRoute,
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