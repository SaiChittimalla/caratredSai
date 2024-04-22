<template>
  <div v-if="loading" class="laoding-div-main ">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <NavigationsRoute></NavigationsRoute>
    <div class="pt-5">
      <div class="container">
        <div class="text-center">
          <h1 style="color: #0e314c">Our Leadership Team</h1>
        </div>
        <p class="text-center text-muted">
          The leadership team is a group of individuals at the top of an
          organization who are responsible for making strategic decisions and
          guiding the company towards its goals and objectives.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card shadow p-3  h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered" src="../../images/21017943_1.png" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Rambabu Talluri</b>
                </p>
                <p class="text-muted fsize">CEO – Managing Director</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card shadow p-3  h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered" src="../../images/prabhakar-300x300.png" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Prabhakar Pathuri</b>
                </p>
                <p class="text-muted fsize">Director – Delivery & Support</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card  shadow h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered"
                  src="../../images/1262185f-052b-4468-8311-c9a0a158ce44-150x150.jpeg" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Priyadarshini Majumdar</b>
                </p>
                <p class="text-muted fsize">Director – Sales & Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card shadow p-3  h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered"
                  src="../../images/ramaswamy-removebg-preview-150x150.png" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Ramaswamy Venkatraman</b>
                </p>
                <p class="text-muted fsize">Regional Sales Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card shadow p-3  h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered" src="../../images/s2-150x150.jpg" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Srinivas Marella</b>
                </p>
                <p class="text-muted fsize">Lead Business Analyst – RPA</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card shadow p-3  h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered" src="../../images/ux-300x300.jpeg" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Ranjit Kodipyaka</b>
                </p>
                <p class="text-muted fsize">Lead Business Analyst – Product</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card shadow p-3  h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered"
                  src="https://staging.caratred.in/wp-content/uploads/2023/08/oie_y4peSDmyKFoy-150x150.jpg" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Bharani Kumar Kadali</b>
                </p>
                <p class="text-muted fsize">Team Lead – Tech Ops</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card shadow p-3  h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered" src="../../images/oie_qc5XaIetD5L5-150x150.jpg" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Sushma Applawad</b>
                </p>
                <p class="text-muted fsize">Inside sales Lead</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card shadow p-3  h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered" src="../../images/ganu-300x300.jpeg" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Ganesh B Reddy</b>
                </p>
                <p class="text-muted fsize">Techno Functional Consultant – ERP</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 mb-4">
          <div class="h-100">
            <div class="card shadow p-3  h-100">
              <div class="card-img-top mt-2">
                <img class="rounded-circle img-fluid centered" src="../../images/FB_IMG_1653995580991-300x300.jpg" />
              </div>
              <div class="card-body">
                <p style="color: #0e314c" class="text-center fsize">
                  <b>Sandeep Gola</b>
                </p>
                <p class="text-muted fsize">Functional Consultant – ERP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img1234 mt-5">
      <div class="container">
        <div class="">
          <h5 class="text-white">
            // We Carry More Than Just Good Coding Skills
          </h5>
          <div class="d-flex justify-content-between">
            <h1 class="text-white fs-1"><b>Let's Build Your Website!</b></h1>
            <button class="btn1"><b>Contact us</b></button>
          </div>
        </div>
      </div>
    </div>
    <section class="text-center">
      <div class="mt-5">
        <div class="bg-12345">
          <div class="text-center">
            <h6 class="text-black"><b>// OUR CLIENTS</b></h6>
            <h2><b>We are Trusted</b></h2>
            <h2><b>15+ Countries Worldwide</b></h2>
          </div>
          <div class="container">
            <!-- curosal -->
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 mt-sm-3 mb-4">
                      <div class="card shadow p-4">
                        <div class="d-flex gap-5">
                          <div>
                            <img src="../../images/testi1.png" />
                          </div>
                          <div>
                            <h5>The Park Hotels</h5>
                            <p class="text-muted">Client of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted text-center">
                            "Patience. Infinite patience. No shortcuts. Very well
                            thought out and articulate communication. Clear
                            milestones, deadlines and fast work. Even if the
                            client is being careless. The best part...always
                            solving problems with great original ideas!."
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 mt-sm-3 mb-4">
                      <div class="card shadow sh p-4">
                        <div class="d-flex gap-5">
                          <div>
                            <img src="../../images/testi1.png" />
                          </div>
                          <div>
                            <h5>Marriots Hotels</h5>
                            <p class="text-muted">Manager of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted">
                            "Patience. Infinite patience. No shortcuts. Very well
                            thought out and articulate communication. Clear
                            milestones, deadlines and fast work. Even if the
                            client is being careless. The best part...always
                            solving problems with great original ideas!."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 mt-sm-3 mb-4">
                      <div class="card shadow p-4">
                        <div class="d-flex gap-5">
                          <div>
                            <img src="../../images/testi1.png" />
                          </div>
                          <div>
                            <h5>The Park Hotels</h5>
                            <p class="text-muted">Client of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted text-center">
                            "Patience. Infinite patience. No shortcuts. Very well
                            thought out and articulate communication. Clear
                            milestones, deadlines and fast work. Even if the
                            client is being careless. The best part...always
                            solving problems with great original ideas!."
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 mt-sm-3 mb-4">
                      <div class="card shadow sh p-4">
                        <div class="d-flex gap-5">
                          <div>
                            <img src="../../images/testi1.png" />
                          </div>
                          <div>
                            <h5>Marriots Hotels</h5>
                            <p class="text-muted">Manager of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted">
                            "Patience. Infinite patience. No shortcuts. Very well
                            thought out and articulate communication. Clear
                            milestones, deadlines and fast work. Even if the
                            client is being careless. The best part...always
                            solving problems with great original ideas!."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 mt-sm-3 mb-4">
                      <div class="card shadow p-4">
                        <div class="d-flex gap-5">
                          <div>
                            <img src="../../images/IHG-Logo-removebg-preview.png" class="w-25" />
                          </div>
                          <div>
                            <h5>The Park Hotels</h5>
                            <p class="text-muted">Client of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted text-center">
                            "Patience. Infinite patience. No shortcuts. Very well
                            thought out and articulate communication. Clear
                            milestones, deadlines and fast work. Even if the
                            client is being careless. The best part...always
                            solving problems with great original ideas!."
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 mt-sm-3 mb-4">
                      <div class="card shadow sh p-4">
                        <div class="d-flex gap-5">
                          <div>
                            <img src="../../images/Shangri-La_Hotels_and_Resorts_logo.svg.png" class="w-25" />
                          </div>
                          <div>
                            <h5>Marriots Hotels</h5>
                            <p class="text-muted">Manager of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted">
                            "Patience. Infinite patience. No shortcuts. Very well
                            thought out and articulate communication. Clear
                            milestones, deadlines and fast work. Even if the
                            client is being careless. The best part...always
                            solving problems with great original ideas!."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="mt-5">
        <!-- <footer-page></footer-page> -->
        <footer-design></footer-design>
      </div>
    </section>
  </div>
</template>
<style scoped>
.fsize {
  font-size: 12px;
  text-align: center;
}

.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 50%;
  filter: drop-shadow(1px 4px 5px black);
}

.bg-img1234 {
  background: url("../../images/bg-cta1-home1.jpg");
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
}

.btn1 {
  border: 1px solid white;
  color: white;
  background: orangered;
  border-radius: 3px;
  padding: 10px 20px 10px 20px;
}

.bg-12345 {
  background-color: #f8f8f8;
  background-image: url("../../images/bg-maps-dots.jpg");
  background-position: bottom center;
  background-repeat: no-repeat;
  /* height: 100vh; */
  display: grid;
  place-items: center;
}
</style>
<script>
import NavigationsRoute from "../Navigation/NavigationsRoute.vue";
import FooterDesign from "../FooterDesign.vue";

export default {
  components: {
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