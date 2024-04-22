<template>
  <div v-if="loading" class="laoding-div-main">
    <div class="spinner-grow"></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <Navigations-route></Navigations-route>
    <div class="pt-5">
      <div class="container">
        <div class="padding1">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="p-lg-5 p-sm-3">
                <div class="heading">
                  <h2 style="color: #0e314c"><b>About Us</b></h2>
                </div>
                <div class="subheading pt-3">
                  <p class="text-muted">
                    CaratRED Technologies is an Indian IT consulting and
                    software development company that offers services such as
                    software development, RPA, Data Analytics, and Cloud
                    solutions. Specializing in the hospitality domain, the
                    company has established a strong reputation by delivering
                    gh-quality, cost-effective solutions to over 400 top hotels
                    in India from various international and domestic brands.
                    With a team of over 50 skilled professionals experienced in
                    the latest technologies, CaratRED Technologies is committed
                    to providing innovative solutions that help its clients stay
                    ahead of their competition. The company serves as a reliable
                    technology partner that businesses can count on to achieve
                    their goals and grow their businesses
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4">
              <div class="row">
                <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 mb-4">
                  <div class="boxsizing">
                    <img
                      src="../../images/image-box1.jpg"
                      class="w-100 img12"
                    />
                    <div class="centered">
                      <h4>Our Mission</h4>
                    </div>
                  </div>

                  <div class="boxsizing mt-5">
                    <img
                      src="../../images/image-box3.jpg"
                      class="w-100 img12"
                    />
                    <div class="centered">
                      <h4>Our Philosphy</h4>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-3 mb-4">
                  <div class="boxsizing">
                    <img
                      src="../../images/image-box2.jpg"
                      class="w-100 img12"
                    />
                    <div class="centered">
                      <h4>Our Vision</h4>
                    </div>
                  </div>

                  <div class="boxsizing mt-5">
                    <img
                      src="../../images/image-box4.jpg"
                      class="w-100 img12"
                    />
                    <div class="centered">
                      <h4>Our Stratagey</h4>
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
      <div class="bg-img">
        <div class="padding12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 mt-5">
                <img src="../../images/mission.png" class="w-100" />
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 mt-5">
                <h6 class="text-white">
                  // EXPERIENCE. EXECUTION. EXCELLENCE.
                </h6>
                <h1 class="text-white"><b>What We Actually Do</b></h1>
                <div class="d-flex justify-content-between">
                  <div class="textbox"><i class="ri-javascript-line"></i></div>
                  <div class="textbox"><i class="ri-bootstrap-line"></i></div>
                  <div class="textbox"><i class="ri-css3-line"></i></div>
                  <div class="textbox"><i class="ri-reactjs-line"></i></div>
                </div>
                <div>
                  <h5 class="text-white mt-3">
                    <b> PHP Website Development Services</b>
                  </h5>
                  <p class="text-white subheading">
                    At caratRED Technologies, our mission is to empower hotels
                    and hospitality businesses with innovative software
                    solutions that streamline operations, enhance guest
                    experiences, and increase profitability. We are dedicated to
                    providing personalized service and delivering
                    state-of-the-art technology that is intuitive, reliable, and
                    secure. Our ultimate goal is to be the preferred software
                    partner for hotels worldwide, helping them to achieve their
                    goals,exceed their customers’ expectations, and stay ahead
                    of the competition
                  </p>
                </div>
                <div class="mt-5 d-flex gap-3">
                  <div><i class="ri-arrow-right-line"></i></div>
                  <div class="mt-3" style="color: orangered">Learn more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="text-center mt-2">
          <h3 style="color: #0e314c"><b>Values</b></h3>
          <p class="text-muted text-center">
            We help businesses elevate their value through custom software
            development,<br />
            product design, QA and consultancy services.
          </p>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
            <div class="card h-100">
              <div class="card-img-top">
                <div class="profile-div m-1">
                  <i class="ri-user-follow-line"></i>
                </div>
              </div>
              <div class="card-body">
                <h4 style="color: #0e314c" class=""><b>Integrity</b></h4>
                <p class="text-muted" style="font-size: 14px">
                  The company values honesty and ethical behavior in all its
                  dealings, both internally and externally.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
            <div class="card h-100">
              <div class="card-img-top">
                <div class="profile-div m-1">
                  <i class="ri-lightbulb-line"></i>
                </div>
              </div>
              <div class="card-body">
                <h4 style="color: #0e314c" class=""><b>Innovation</b></h4>
                <p class="text-muted" style="font-size: 14px">
                  The company values creativity, experimentation, and a
                  willingness to take risks to develop new products, services,
                  or processes.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
            <div class="card h-100">
              <div class="card-img-top">
                <div class="profile-div m-1">
                  <i class="ri-shield-user-line"></i>
                </div>
              </div>
              <div class="card-body">
                <h4 style="color: #0e314c" class=""><b>Accountability</b></h4>
                <p class="text-muted" style="font-size: 14px">
                  ElabThe company values taking responsibility for its actions,
                  holding itself accountable to its stakeholders, and delivering
                  on its commitments.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-4">
            <div class="card h-100">
              <div class="card-img-top">
                <div class="profile-div m-1">
                  <i class="ri-user-follow-line"></i>
                </div>
              </div>
              <div class="card-body">
                <h4 style="color: #0e314c" class=""><b>Integrity</b></h4>
                <p class="text-muted" style="font-size: 14px">
                  The company values honesty and ethical behavior in all its
                  dealings, both internally and externally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="bg-imgnew">
          <div class="bgimg-pad m-3">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h1 class="text-white"><b>330+</b></h1>

                <h4 class="text-white">Active Clients</h4>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h1 class="text-white"><b>50+</b></h1>

                <h4 class="text-white">Projects Done</h4>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h1 class="text-white"><b>25+</b></h1>

                <h4 class="text-white">Team Advisors</h4>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <h1 class="text-white"><b>5+</b></h1>

                <h4 class="text-white">Glorious Years</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-4">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4">
            <div class="mt-5">
              <h6 style="color: #0e314c">// TECHNOLOGY INDEX</h6>
              <h1 style="color: #0e314c">
                <b> Improve and Innovate with the Tech Trends</b>
              </h1>
              <p class="text-muted">
                We hire and build your own remote dedicated development teams
                tailored to your specific needs.
              </p>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <p><b>Mobile Development</b></p>
                <p><b>70%</b></p>
              </div>

              <div class="progress">
                <div
                  id="progress"
                  class="progress-bar"
                  role="progressbar"
                  style="width: 75%; background-color: orangered"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <p><b>WEB DEVELOPMENT</b></p>
                <p><b>90%</b></p>
              </div>

              <div class="progress">
                <div
                  id="progress"
                  class="progress-bar"
                  role="progressbar"
                  style="width: 90%; background-color: orangered"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <p><b>UI/UX DESIGN</b></p>
                <p><b>60%</b></p>
              </div>

              <div class="progress">
                <div
                  id="progress"
                  class="progress-bar"
                  role="progressbar"
                  style="width: 60%; background-color: orangered"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4">
            <div class="d-flex justify-content-center align-items-center mt-5">
              <img
                src="https://staging.caratred.in/wp-content/uploads/2023/03/young-man-working-at-desk-2.svg"
              />
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
.bg-imgnew {
  background-color: transparent;
  background-image: linear-gradient(90deg, #ee4326 0%, #0e314c 100%);
}

.bgimg-pad {
  padding: 82px 0px 82px 0px;
}

.profile-div {
  width: 90px;
  background-color: rgb(0, 0, 8);
  height: 90px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-div:hover {
  background-color: white;
  transition: all 0.5s ease;
}

.ri-user-follow-line {
  color: white;
  font-size: 50px;
}

.ri-lightbulb-line {
  color: white;
  font-size: 50px;
}

.ri-shield-user-line {
  color: white;
  font-size: 50px;
}

.profile-div:hover .ri-user-follow-line {
  color: orangered;
}

.profile-div:hover .ri-lightbulb-line {
  color: orangered;
}

.profile-div:hover .ri-shield-user-line {
  color: orangered;
}

.padding12 {
  padding: 130px 0px 120px 0px;
}

.subheading {
  font-weight: 400;
  line-height: 22px;
  font-size: 15px;
}

.padding1 {
  padding: 100px 0px 95px 0px;
}

.boxsizing {
  box-sizing: inherit;
  position: relative;
  text-align: center;
  color: white;
}

.centered1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.img12 {
  z-index: 1;
  /* opacity: 0.8; */
  background: rgba(16, 120, 165, 0.2);
  filter: grayscale(300%);
  transition: all 0.5s ease;
}

.img12:hover {
  z-index: 1;
  /* opacity: 1; */
  filter: grayscale(0%);
  background: rgba(16, 120, 165, 0.2);
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.textbox {
  padding: 10px 15px 10px 15px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 30px;
}

.textbox:hover {
  background-color: orangered;
  color: white !important;
}

.bg-img {
  background-color: #0e314c;
  background-image: url("../../images/bg-art-5.png");
  background-repeat: no-repeat;

  opacity: 1;
}

.icon {
  border-radius: 100px;
}
</style>
<script>
import FooterDesign from "../FooterDesign.vue";
import NavigationsRoute from "../Navigation/NavigationsRoute.vue";

export default {
  components: {
    NavigationsRoute,
    FooterDesign,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    simulateLoading() {
      this.loading = true;

      // Simulate a delay for 3 seconds (adjust as needed)
      setTimeout(() => {
        this.loading = false;
      }, 800);
    },
  },
  mounted() {
    // Simulate the loading state when the component is mounted
    this.simulateLoading();
  },
};
</script>