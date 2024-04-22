<template>
  <div v-if="loading" class="laoding-div-main">
    <div class="spinner-grow"></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <navigations-route></navigations-route>
    <section>
      <div class="bg-img">
        <!-- <div class="software-main"> -->
        <div class="container">
          <div class="text-center">
            <div class="mt-3">
              <h4 class="text-white text-center">
                // For Over 15 Years. For Millions of Users
              </h4>
              <h1 class="text-center fs1" style="color: white">
                <b>
                  POWERFUL<br />
                  DIGITAL SOLUTIONS</b>
              </h1>
            </div>
          </div>
          <div class="mt-4">
            <div class="row">
              <div class="col-lg-2 col-xl-2 col-md-4 col-sm-12 mb-4">
                <div class="border1">
                  <div class="text-center">
                    <i class="ri-bar-chart-grouped-fill"></i>
                  </div>
                  <h5 class="text-center text-white">
                    Data<br />
                    Analytics
                  </h5>
                </div>
              </div>
              <div class="col-lg-2 col-xl-2 col-md-4 col-sm-12 mb-4">
                <div class="border1">
                  <div class="text-center">
                    <i class="ri-bar-chart-grouped-fill"></i>
                  </div>

                  <h5 class="text-center text-white">
                    Web<br />
                    Development
                  </h5>
                </div>
              </div>
              <div class="col-lg-2 col-xl-2 col-md-4 col-sm-12 mb-4">
                <div class="border1">
                  <div class="text-center">
                    <i class="ri-bar-chart-grouped-fill"></i>
                  </div>

                  <h5 class="text-center text-white">
                    UI/UX<br />
                    Design
                  </h5>
                </div>
              </div>
              <div class="col-lg-2 col-xl-2 col-md-4 col-sm-12 mb-4">
                <div class="border1">
                  <div class="text-center">
                    <i class="ri-bar-chart-grouped-fill"></i>
                  </div>

                  <h5 class="text-center text-white">
                    QA&<br />
                    Testing
                  </h5>
                </div>
              </div>
              <div class="col-lg-2 col-xl-2 col-md-4 col-sm-12 mb-4">
                <div class="border1">
                  <div class="text-center">
                    <i class="ri-bar-chart-grouped-fill"></i>
                  </div>

                  <h5 class="text-center text-white">
                    Dedicated<br />
                    Team
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </section>
    <section>
      <div class="bg-img1">
        <div class="software-main2">
          <div class="he mt-5">
            <div class="">
              <div>
                <h6 class="text-center" style="color: #0e314c">
                  // WE ARE ENGITECH
                </h6>
                <h5 class="text-center" style="font-size: 40px; color: #0e314c">
                  We are Trusted
                </h5>
                <h5 class="text-center" style="font-size: 40px; color: #0e314c">
                  15+ Countries Worldwide
                </h5>
              </div>
              <img class="sideimg" src="../../images/image1-home3.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="">
        <div class="row">
          <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
            <div class="card shadow">
              <div class="d-flex justify-content-around mt-4 mb-3">
                <div><i class="ri-check-line"></i></div>
                <div>
                  <h6>Machine Learning</h6>
                  <h6 class="text-muted">Support and Evolution</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
            <div class="card shadow">
              <div class="d-flex justify-content-around mt-4 mb-3">
                <div><i class="ri-check-line"></i></div>
                <div>
                  <h6>Artificial Intelligence</h6>
                  <h6 class="text-muted">Support and Evolution</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
            <div class="card shadow">
              <div class="d-flex justify-content-around mt-4 mb-3">
                <div><i class="ri-check-line"></i></div>
                <div>
                  <h6>Augmented Reality</h6>
                  <h6 class="text-muted">Support and Evolution</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="bg-img2 mt-3">
        <div class="software-main3">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 ">
                <div class="bottom">
                  <div class="mt-3 ps-3">
                    <p class="text-white">// TECHNOLOGY INDEX</p>
                    <h1 class="text-white">
                      Improve and Innovate<br />
                      with the Tech Trends
                    </h1>
                    <p class="text-white">
                      We hire and build your own remote dedicated development
                      teams tailored to your specific needs. Get professional
                      fulltime developers who work exclusively for you as a part
                      of your company. We handle all the practical aspects
                      related to hiring and hosting your team at our premises,
                      thus saving you half a cost and a lot of efforts.
                    </p>
                  </div>
                </div>
                <div class="d-flex justify-content-between ps-3">
                  <div>
                    <div style="color: orangered; font-size: 40px" id="counter">
                      {{ currentNumber }}+
                    </div>

                    <!-- <h2 style="color: orangered">330+</h2> -->

                    <h6 class="text-white">Active Clients</h6>
                  </div>
                  <div>
                    <!-- <div style="color: orangered; font-size: 40px" id="counter">
                  {{ newCurrent }}+
                </div> -->
                    <h2 style="color: orangered; font-size: 40px">850+</h2>
                    <h6 class="text-white">Projects Done</h6>
                  </div>
                  <div>
                    <h2 style="color: orangered; font-size: 40px">25+</h2>
                    <h6 class="text-white">Team Advisors</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 ">
                <div class="row">
                  <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 mb-4">
                    <div class="mt-5">
                      <div class="boxsizing">
                        <img src="../../images/image-box1.jpg" class="w-100 img12" />
                        <div class="centered">
                          <h4 class="text-white">Our Mission</h4>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5">
                      <div class="boxsizing">
                        <img src="../../images/image-box3.jpg" class="w-100 img12" />
                        <div class="centered">
                          <h4 class="text-white">Our Philosphy</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-3 mb-4">
                    <div class="mt-5">
                      <div class="boxsizing">
                        <img src="../../images/image-box2.jpg" class="w-100 img12" />
                        <div class="centered">
                          <h4 class="text-white">Our Vision</h4>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5">
                      <div class="boxsizing">
                        <img src="../../images/image-box4.jpg" class="w-100 img12" />
                        <div class="centered">
                          <h4 class="text-white">Our Stratagey</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="col-2 mb-4">
            <div>
              <img class="w-100 img-123" src="../../images/wp4.png" />
            </div>
          </div>
          <div class="col-2 mb-4">
            <div>
              <img class="w-100 img-123" src="../../images/wp5.svg" />
            </div>
          </div>
          <div class="col-2 mb-4">
            <div>
              <img class="w-100 img-123" src="../../images/wp4.png" />
            </div>
          </div>
          <div class="col-2 mb-4">
            <div>
              <img class="w-100 img-123" src="../../images/wp2.png" />
            </div>
          </div>
          <div class="col-2 mb-4">
            <div>
              <img class="w-100 img-123" src="../../images/wp5.svg" />
            </div>
          </div>
          <div class="col-2 mb-4">
            <div>
              <img class="w-100 img-123" src="../../images/wp2.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-12">
        <div class="software-main4">
          <div class="text-center">
            <h6 class="text-black"><b>// OUR SERVICE</b></h6>
            <h1><b>We Offer a Wide</b></h1>
            <h1><b>Variety of IT Services</b></h1>
          </div>
          <div class="container">
            <div class="mt-5">
              <div class="row">
                <div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 mb-4">
                  <div class="card shadow cardposition">
                    <div class="card1"><i class="ri-tv-2-line"></i></div>
                    <div class="mt-5 mb-3">
                      <h4 class="p-3">
                        <b>Custom Software<br />
                          Development</b>
                      </h4>
                      <p class="text-muted ps-3">
                        We help businesses elevate their value through custom
                        software development, product design, QA and
                        consultancy.
                      </p>
                      <ul class="ps-3">
                        <li><b>ECOMMERCE SOLUTIONS</b></li>
                        <li><b>GAMIFICATION SOFTWARE</b></li>
                        <li>
                          <b>CLIENT MOBILE APPS</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 mb-4">
                  <div class="card shadow cardposition">
                    <div class="card1"><i class="ri-tv-2-line"></i></div>
                    <div class="mt-5 mb-3">
                      <h4 class="p-3">
                        <b>Outsoursing <br />Development</b>
                      </h4>
                      <p class="text-muted ps-3">
                        We help businesses elevate their value through custom
                        software development, product design, QA and
                        consultancy.
                      </p>
                      <ul class="ps-3">
                        <li><b>DEVELOPMENT PROCESS</b></li>
                        <li><b>CHANGE MANAGEMENT</b></li>
                        <li>
                          <b>APPLICATION SUPPORT</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 mb-4">
                  <div class="card shadow cardposition">
                    <div class="card1"><i class="ri-tv-2-line"></i></div>

                    <div class="mt-5 mb-3">
                      <h4 class="p-3">
                        <b>
                          Software Product<br />
                          Development</b>
                      </h4>
                      <p class="text-muted ps-3">
                        We help businesses elevate their value through custom
                        software development, product design, QA and
                        consultancy.
                      </p>
                      <ul class="ps-3">
                        <li><b>DESKTOP APPLICATIONS</b></li>
                        <li><b>SOFTWARE-AS-A-SERVICE</b></li>
                        <li>
                          <b>MOBILE APPS</b>
                        </li>
                      </ul>
                    </div>
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
                <h1 class="text-white fs-1">
                  <b>Let's Build Your Website!</b>
                </h1>
                <button class="btn1"><b>Contact us</b></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="mt-5">
        <div class="text-center">
          <h6 class="text-black"><b>// OUR SERVICE</b></h6>
          <h3><b>Our Leadership Team</b></h3>
          <p class="text-muted">
            We help businesses elevate their value through custom software
            development,<br />
            product design, QA and consultancy services.
          </p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 mb-4">
              <div class="card shadow h-100">
                <div class="card-img p-5">
                  <div class="d-flex justify-content-center">
                    <img class="img-fluid w-50 rounded-circle" src="../../images/21017943_1.png" />
                  </div>
                  <h6 class="text-center mt-2"><b>RamBabu Talluri</b></h6>
                  <h6 class="text-center text-muted">
                    CEO – Managing Director
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 mb-4">
              <div class="card shadow h-100">
                <div class="card-img p-5">
                  <div class="d-flex justify-content-center">
                    <img class="img-fluid w-50 rounded-circle" src="../../images/prabhakar-300x300.png" />
                  </div>
                  <h6 class="text-center mt-2"><b>Prabhakar Pathuri</b></h6>
                  <h6 class="text-center text-muted">
                    Director – Delivery & Support
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 mb-4">
              <div class="card shadow h-100">
                <div class="card-img p-5">
                  <div class="d-flex justify-content-center">
                    <img class="img-fluid w-50 rounded-circle"
                      src="../../images/1262185f-052b-4468-8311-c9a0a158ce44-150x150.jpeg" />
                  </div>
                  <h6 class="text-center mt-2">
                    <b>Priyadarshini Majumdar</b>
                  </h6>
                  <h6 class="text-center text-muted">
                    Director – Sales & Admin
                  </h6>
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div class="card shadow">
              <div class="card-img">
                <img class="img-fluid" src="../../images/member4.jpg" />
                <h4 class="text-center"><b>Robert Cooper</b></h4>
                <h6 class="text-center text-muted">CEO OF COMPANY</h6>
              </div>
            </div>
          </div> -->
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="mt-5">
        <div class="bg-img44">
          <div class="pad1">
            <div class="text-center text-white">
              <h5 class="text-white">
                // Drop us a line! We are here to answer your questions 24/7
              </h5>
              <h1 class="text-white" style="font-size: 40px">
                NEED A CONSULTATION?
              </h1>
              <button style="
                  border: none;
                  border-radius: 5px;
                  background-color: orangered;
                  padding: 10px 20px 10px 20px;
                  color: white;
                ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center">
      <div class="mt-5">
        <div class="bg-12345">
          <div class="text-center">
            <h6 class="text-black"><b>// OUR CLIENTS</b></h6>
            <h2><b>We are Trusted</b></h2>
            <h2><b>15+ Countries Worldwide</b></h2>
          </div>
          <div class="container">
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
                            <h5>Soft Tech</h5>
                            <p class="text-muted">Manager of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted">
                            "Patience. Infinite patience. No shortcuts. Very
                            well thought out and articulate communication. Clear
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
                            <h5>Monkle ltd</h5>
                            <p class="text-muted">Client of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted">
                            "Patience. Infinite patience. No shortcuts. Very
                            well thought out and articulate communication. Clear
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
                            <h5>Soft Tech</h5>
                            <p class="text-muted">Manager of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted">
                            "Patience. Infinite patience. No shortcuts. Very
                            well thought out and articulate communication. Clear
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
                            <h5>Monkle ltd</h5>
                            <p class="text-muted">Client of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted">
                            "Patience. Infinite patience. No shortcuts. Very
                            well thought out and articulate communication. Clear
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
                            <h5>Soft Tech</h5>
                            <p class="text-muted">Manager of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted">
                            "Patience. Infinite patience. No shortcuts. Very
                            well thought out and articulate communication. Clear
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
                            <h5>Monkle ltd</h5>
                            <p class="text-muted">Client of Company</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-muted">
                            "Patience. Infinite patience. No shortcuts. Very
                            well thought out and articulate communication. Clear
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
    <div class="mt-5">
      <footer-design></footer-design>
    </div>
  </div>
</template>
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
      targetNumber: 250, // Adjusted targetNumber
      animationDuration: 2000,

      currentNumber: 0,
      increment: 0,
      newTarget: 850,
      newCurrent: 0,
      newIncrement: 10,
      loading: false,
    };
  },
  methods: {
    startAnimation() {
      this.increment = this.targetNumber / (this.animationDuration / 16);
      this.updateCounter();
    },
    newAnimation() {
      this.newIncrement = this.newTarget / (this.animationDuration / 16);
      this.newUpdateCounter(); // Corrected method name
    },
    updateCounter() {
      this.currentNumber += this.increment;
      if (this.currentNumber < this.targetNumber) {
        requestAnimationFrame(this.updateCounter);
      }
    },
    newUpdateCounter() {
      // Corrected method name
      this.newCurrent += this.newIncrement;
      if (this.newCurrent < this.newTarget) {
        requestAnimationFrame(this.newUpdateCounter);
      }
    },
    simulateLoading() {
      this.loading = true;

      // Simulate a delay for 3 seconds (adjust as needed)
      setTimeout(() => {
        this.loading = false;
      }, 800);
    },
  },
  mounted() {
    this.startAnimation();
    this.newAnimation(); // Corrected method name
    this.simulateLoading();
  },
};
</script>
<style scoped>
.software-main {
  padding: 220px 0px 205px 0px;
}

.software-main2 {
  padding: 140px 0px 125px 0px;
}

.software-main3 {
  padding: 130px 0px 130px 0px;
}

/* .software-main4 {
  padding: 55px 65px 200px 65px;
} */

.sh {
  box-shadow: 3px 3px 13px 0px rgba(0, 0, 0, 0.1);
}

.pad1 {
  padding: 130px 0px 130px 0px;
}

.card1 {
  position: absolute;
  top: -3px;
  right: -57px;
  width: 100px;
  height: 65px;
  color: #fff;
  background-color: #0E314C !important;
  border-radius: 9%;

  display: flex;
  justify-content: center;
  margin-right: 19px;
}

.cardposition {
  position: relative;
  overflow: hidden;
}

i {
  color: white;
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

.bg-img44 {
  background-image: url("../../images/bg-cta-home2.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  display: grid;
  place-items: center;
}

.bg-img1234 {
  background: url("../../images/bg-cta1-home1.jpg");
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
}

.boxsizing {
  box-sizing: inherit;
  position: relative;
  text-align: center;
  color: white;
}

li {
  font-size: 14px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn1 {
  font-family: "Nunito Sans", Sans-serif;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  fill: #0e314c;
  color: #0e314c;
  background-color: rgba(67, 186, 255, 0);
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #ffffff;
  border-radius: 0px 0px 0px 0px;
  padding: 21px 35px 21px 35px;
}

.bg-img {
  background-image: url("../../images/banner-home3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 120px 0px 105px 0px;
}

li {
  list-style: none;
}

.bg-img1 {
  background-image: url("../../images/bg-s1-home3.png");
  background-position: 50% 165px;
  background-repeat: no-repeat;
}

.bg-img2 {
  background-color: #0e314c;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-12 {
  background-color: #f8f8f8;
  /* height: max-content; */
  padding: 100px 0px 290px 0px;

}

.border1 {
  background-color: transparent;
  border: 0.1px solid white;
  height: 140px;
  color: white;
  margin-left: 20px;
  transition: all 0.3s linear;
}

.border1:hover {
  background-color: #0e314c;
  border-color: orangered;
}

.ri-bar-chart-grouped-fill {
  color: orangered;
  font-size: 40px;
  /* text-align: center; */
}

.ri-check-line {
  font-size: 30px;
  background: orangered;
  color: white;
  border-radius: 15px;
}

/* .ri-check-line:hover {
 
} */
.sideimg {
  height: auto;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.card:hover {
  box-shadow: 15px 15px 38px 0 rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 15px 15px 38px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 15px 15px 38px 0 rgba(0, 0, 0, 0.1);
  border-color: transparent;
  /* background: #0e314c; */
}

.bottom {
  align-content: center;
  align-items: center;
  margin-top: 72px;
}

h5 {
  font-size: 15px;
}

.img12 {
  z-index: 1;
  opacity: 0.5;
  background: rgba(16, 120, 165, 0.2);
}

.img12:hover {
  z-index: 1;
  opacity: 1;
  background: rgba(16, 120, 165, 0.2);
}

.img-123 {
  opacity: 0.7;
  z-index: 1;
}

.img-123:hover {
  opacity: 1;
}

.ri-tv-2-line {
  font-size: 40px;
  text-align: end;
  margin-right: 30px;
  /* background: #0e314c; */
}

p {
  font-size: 13px;
}

.fs1 {
  font-size: 60px;
}

li {
  line-height: 45px;
}

.card {
  transition: all 0.5s ease;
}

.card:hover {
  transform: translateY(-5%);
}

@media (max-width: 764.98px) {
  .fs1 {
    font-size: 28px;
  }

  h4 {
    font-size: 14px;
  }

  h5 {
    font-size: 25px;
  }

  /* .bg-12345 {
    /* height: max-content; */
  /* }
  .bg-img1234 {
    height: 100vh;
  }
  .bg-img44 {
    height: 150vh;
  } */
  /* .bg-img {
    height: min-content;
  } */
  /* .bg-img2 {
    height: min-content;
  } */
}
</style>