<template>
  <div v-if="loading" class="laoding-div-main ">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <navigations-route></navigations-route>
    <div class="container">
      <div class="padding123">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 mb-4">
            <div class="mt-lg-5">
              <h2 class="header">
                <b>Simple<br />
                  ticketing system<br />
                  for teams</b>
              </h2>
              <p class="text-muted">
                Everything you need to convert, support,<br />
                & delight your customers.
              </p>
            </div>
            <div class="d-flex gap-5">
              <div>
                <button class="btn btn-lg btn-primary border-0  btn-outline-secondary btn1" style="
                  background-color: orangered;
                  color: white;
                  padding: 10px 20px;
                  font-size: 14px;
                ">
                  FREE 15-DAYS TRAIL
                </button>
              </div>
              <div>
                <button type="button" style="
                  background-color: transparent;
                  color: #1b1d21;

                  font-size: 14px;
                " class="btn btn-lg btn-primary btn-outline-secondary">
                  WATCH A DEMO
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 mb-4">
            <img src="../../images/banner-home8.png" class="w-100" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 mb-4">
          <div class="text-center">
            <h6>
              <b>
                Free 15-Days<br />
                Use Trial</b>
            </h6>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 mb-4">
          <div class="text-center">
            <h6>
              <b>
                Flexiable Pricing<br />
                Plan To Start</b>
            </h6>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 mb-4">
          <div class="text-center">
            <h6>
              <b>
                Intergate With<br />
                Popular Software</b>
            </h6>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 mb-4">
          <div class="text-center">
            <h6>
              <b>
                Update Lifetime and<br />
                Dedicate Support</b>
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="mt-5 padding2">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 mb-4">
            <img src="../../images/tab1-home8.png" class="w-100 h-100" />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 mb-4 px-3 ">
            <h2 class="header2"><b>What you can do with Engitech’s Desk</b></h2>
            <div>
              <div class="listitem">
                <div class="icon-main"></div>
                <div>
                  <h5 class="colloborate" style="color: #1b1d21">
                    <b>COLLABORATE</b>
                  </h5>
                  <br />

                  <div>
                    <p class="text-muted">
                      Work as a team to help your customers get all the answers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="listitem">
                <div class="icon-main"></div>
                <div>
                  <h5 class="colloborate" style="color: #1b1d21">
                    <b>AUTOMATION</b>
                  </h5>
                  <br />

                  <div>
                    <p class="text-muted">
                      Automate repetitive tasks & simplify your to-do list and
                      save time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="listitem">
                <div class="icon-main"></div>
                <div>
                  <h5 class="colloborate" style="color: #1b1d21">
                    <b>COMMUNICATION</b>
                  </h5>
                  <br />

                  <div>
                    <p class="text-muted">
                      Integrate EngitechDesk with LiveChat to solve tickets and
                      talk on chat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="mt-5">
        <div class="row">
          <div class="col-lg-6 col-sm-12 mb-4 col-md-12">
            <h1 class="header3">
              “With EngitechDesk’s help,
              we’ve seen a <span style="color: orangered">15% decrease</span>
              in support volume, a
              <span style="color: orangered">30
                minute</span>
              faster response time
              and our happiness score is<span style="color: orangered">up to 95%.</span>”
            </h1>
            <div class="mt-5">
              <h6>Olivia Chee</h6>
              <p class="text-muted">CEO Founder at OceanThemes</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 mb-4">
            <img src="../../images/image2-home8.png" class="w-100 h-100" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="mt-5">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div class="row">
              <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 mb-4">
                <div class="listitem1 h-100">
                  <div class="icon-main"></div>
                  <h3 style="color: #0e314c">
                    KNOWLEDGE<br />
                    BASE
                  </h3>
                  <p class="text-muted">
                    Help your customers get all the answers
                  </p>
                  <button class="btn btn-1 btn-outline-light border-1 rounded-2"
                    style="background-color: transparent; color: #0e314c">
                    <a href="#" class="octf-btn text-decoration-none text-black text-nowrap">Go to help page</a>
                  </button>
                </div>
              </div>
              <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 mb-4">
                <div class="listitem1 h-100">
                  <div class="icon-main"></div>
                  <h3 style="color: #0e314c">LIVE CHAT</h3>
                  <p class="text-muted">
                    Professionally cultivate one-to-one find a customer service
                    with robust ideas.
                  </p>
                  <button class="btn btn-1 btn-outline-light border-1 rounded-2"
                    style="background-color: transparent; color: #0e314c">
                    <a href="#" class="octf-btn text-decoration-none text-black">Go to Live Chat</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 mb-4">
            <div class="ms-5">
              <div>
                <h1><b>No solution found?</b></h1>
              </div>
              <div>
                <div>
                  <p class="text-muted mt-4">
                    Engitech is the partner of choice for many of the world’s
                    leading enterprises, SMEs, and technology challenges. We help
                    businesses elevate their value through custom software
                    development.
                  </p>
                </div>
                <div>
                  <p class="text-muted">
                    Engitech is the partner of choice for many of the world.
                  </p>
                </div>
              </div>
              <div class="mt-5">
                <div class="d-flex gap-5">
                  <div>
                    <button type="button" class="btn btn-1 text-white border-0" style="background-color: orangered">
                      SUBMIT A TICKET
                    </button>
                  </div>

                  <div>
                    <p class="text-muted">Call Direct 24/7</p>
                    <h6>+1 (855) 969 3770</h6>
                    <h6>+91 40 4851 8336</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-5 ps-1" />
    <div class="bg-img1">
      <div class="">
        <div class="text-center">
          <h1 style="color: #0e314c" class="">
            The love from over 4,000 happy clients
          </h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div class="card shadow p-4 mt-3">
                <div class="d-flex gap-5">
                  <div>
                    <img src="../../images/testi-3.png" />
                  </div>
                  <div>
                    <h5>Soft Tech</h5>
                    <p class="text-muted">Manager of Company</p>
                  </div>
                </div>
                <div class="mt-2">
                  <p class="text-muted">
                    "Patience. Infinite patience. No shortcuts. Very well thought
                    out and articulate communication. Clear milestones, deadlines
                    and fast work. Even if the client is being careless. The best
                    part...always solving problems with great original ideas!."
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div class="card shadow sh p-4 mt-sm-3">
                <div class="d-flex gap-5">
                  <div>
                    <img src="../../images/testi-4.png" />
                  </div>
                  <div>
                    <h5>Anna Richardson</h5>
                    <p class="text-muted">Sto of Company</p>
                  </div>
                </div>
                <div class="mt-2">
                  <p class="text-muted">
                    "Patience. Infinite patience. No shortcuts. Very well thought
                    out and articulate communication. Clear milestones, deadlines
                    and fast work. Even if the client is being careless. The best
                    part...always solving problems with great original ideas!."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="d-flex justify-content-between ps-3 mt-5">
              <div>
                <!-- <div style="color: orangered; font-size: 40px" id="counter">
              {{ currentNumber }}+
            </div> -->

                <h2 style="color: #0e314c; font-size: 40px">330+</h2>

                <h6 class="">Active Clients</h6>
              </div>
              <div>
                <!-- <div style="color: orangered; font-size: 40px" id="counter">
                  {{ newCurrent }}+
                </div> -->
                <h2 style="color: #0e314c; font-size: 40px">850+</h2>
                <h6 class="">Projects Done</h6>
              </div>
              <div>
                <h2 style="color: #0e314c; font-size: 40px">25+</h2>
                <h6 class="">Team Advisors</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img2">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-12 col-sm-12 mb-4">
            <img src="../../images/bird-home8.png" class="w-75 mt-4" />
          </div>
          <div class="col-lg-7 col-md-7 col-sm-12 mb-4">
            <div class="mt-4">
              <div>
                <h1 class="text-white">Try EngitechDesk Today</h1>
              </div>
            </div>
            <div class="mt-4">
              <h6 class="text-white">
                Invite your team and explore EngitechDesk features for free
              </h6>
            </div>
            <form>
              <div class="d-flex gap-2 mt-4">
                <input type="email" class="form-control" placeholder="Enter your email" />
                <button type="button" style="background-color: #ffb933" class="btn btn-1 text-nowrap">
                  Sign up for free
                </button>
              </div>
            </form>
            <div class="mt-4 d-flex gap-5 text-white">
              <div>Free 15-Days Trial</div>
              <div>Easy Setup</div>
              <div>Share Inbox</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <footer-page></footer-page>
    </div>
  </div>
</template>
<script>
import NavigationsRoute from "../Navigation/NavigationsRoute.vue";
import FooterPage from "../FooterPage.vue";
export default {
  components: {
    NavigationsRoute,
    FooterPage,
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
<style scoped>
.padding123 {
  padding: 70px 0px 70px 0px;
}

.bg-img1 {
  background-color: #f5f8fb;
  background-position: center center;
  background-repeat: no-repeat;
  height: max-content;
  display: grid;
  place-items: center;
}

.bg-img2 {
  background-color: #0e314c;
  background-position: center center;
  background-repeat: no-repeat;
  /* height: 70vh; */
  /* display: grid;
  place-items: center; */
}

.header {
  font-family: "Nunito", Sans-serif;
  font-size: 59px;

  line-height: 80px;
  color: #1b1d21;
}

.header2 {
  font-family: "Nunito", Sans-serif;
  font-size: 48px;

  line-height: 60px;
}

.header3 {
  color: #0e314c;
  font-family: "Nunito", Sans-serif;
  font-size: 45px;
  font-weight: 400;
  line-height: 68px;
  letter-spacing: -2px;
}

.padding2 {
  padding: 0px 0px 120px 0px;
}

.btn-1 {
  border: 1px solid black;
  list-style: none;
  padding: 13px 30px;
}

.btn1:hover {
  background-color: whitesmoke;
  color: white !important;
}

.listitem {
  padding: 30px 44px;
  border: 1px solid #dee1e7;
  border-radius: 5px;
  margin-bottom: 10px;
  background: #fff;
  line-height: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;
}

.listitem:active {
  border-color: #43baff;
}

.text-muted:hover {
  color: orangered;
}

.listitem1 {
  padding: 60px 36px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  align-content: center;
}

.listitem:hover {
  border-color: #0e314c !important;
}

.btn:hover {
  background-color: #0e314c !important;
  color: white !important;
}

.card {
  transition: all 0.5s ease;
}

.card:hover {
  transform: translateY(-10%);
}

@media (min-width: 468px) and (max-width: 700.98px) {
  .header {
    font-size: 30px;
    line-height: 30px;
  }

  .header2 {
    font-size: 30px;
  }

  .header3 {
    font-size: 30px;
  }
}
</style>