<template>
  <div v-if="loading" class="laoding-div-main">
    <div class="spinner-grow"></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <navigations-route></navigations-route>
    <div class="bg-img1">
      <div class="padding1">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4">
              <div class="mt-1">
                <div>
                  <h4 class="text-white text-center">
                    // For Over 15 Years. For Millions of Users
                  </h4>
                </div>
                <div class="header text-center">
                  <b> Enterprise Apps Development</b>
                </div>
                <div>
                  <h6 class="text-white mt-2 li text-center">
                    We are 100+ professional software engineers with more than
                    10 years of experience in delivering superior products.
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4">
              <div class="mt-1">
                <img
                  src="../../images/image-banner-home5.png"
                  class="img-fluid h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4 mt-4">
          <div class="card shadow bor">
            <div class="card1"><i class="ri-tv-2-line"></i></div>
            <h5 class="text-white">
              Customer Support<br />
              Development
            </h5>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4 mt-4">
          <div class="card shadow bor">
            <div class="card1"><i class="ri-bar-chart-grouped-fill"></i></div>
            <h5 class="text-white">
              Outsource<br />
              Development
            </h5>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4 mt-4">
          <div class="card shadow bor">
            <div class="card1"><i class="ri-edit-line"></i></div>
            <h5 class="text-white">
              Software Product<br />
              Development
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div>
        <p>// OUR SERVICES</p>
        <h2><b>We Offer a Wide</b></h2>
        <h2><b>Variety of IT Services</b></h2>
      </div>
    </div>
    <div class="container">
      <div class="row mt-3">
        <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
          <div class="card h-100 shadow cardbg">
            <div class="">
              <div class="card-img w-25 center">
                <svg
                  class="svghover"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="card-title text-center">
                <h5>Web Development</h5>
              </div>
              <div class="card-body">
                <p class="text-center">
                  Turn to our experts to perform comprehensive, multi-stage
                  testing and auditing of your software.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
          <div class="card h-100 shadow cardbg1">
            <div class="">
              <div class="card-img w-25 center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="card-title text-center">
                <h5>Mobile Development</h5>
              </div>
              <div class="card-body">
                <p class="text-center">
                  Create complex enterprise software, ensure reliable software
                  integration, modernise your legacy system.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
          <div class="card h-100 shadow cardbg2">
            <div class="">
              <div class="card-img w-25 center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M8.58579 17H3V15H21V17H15.4142L18.6569 20.2426L17.2426 21.6569L13 17.4142V20H11V17.4142L6.75736 21.6569L5.34315 20.2426L8.58579 17ZM5 3H19C19.5523 3 20 3.44772 20 4V14H4V4C4 3.44772 4.44772 3 5 3ZM6 5V12H18V5H6Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="card-title text-center">
                <h5>UI/UX Design</h5>
              </div>
              <div class="card-body">
                <p class="text-center">
                  Build the product you need on time with an experienced team
                  that uses a clear and effective design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
          <div class="card h-100 shadow cardbg3">
            <div class="">
              <div class="card-img w-25 center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M11 19V9H4V19H11ZM11 7V4C11 3.44772 11.4477 3 12 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H11ZM13 5V19H20V5H13ZM5 16H10V18H5V16ZM14 16H19V18H14V16ZM14 13H19V15H14V13ZM14 10H19V12H14V10ZM5 13H10V15H5V13Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="card-title text-center">
                <h5>QA & Testing</h5>
              </div>
              <div class="card-body">
                <p class="text-center">
                  Turn to our experts to perform comprehensive, multi-stage
                  testing and auditing of your software.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
          <div class="card h-100 shadow cardbg4">
            <div class="">
              <div class="card-img w-25 center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="card-title text-center">
                <h5>IT Counsultancy</h5>
              </div>
              <div class="card-body">
                <p class="text-center">
                  Trust our top minds to eliminate workflow pain points,
                  implement new tech, and consolidate app.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
          <div class="card h-100 shadow cardbg5">
            <div class="">
              <div class="card-img w-25 center">
                <svg
                  class="svghover5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="card-title text-center">
                <h5>Dedicated Team</h5>
              </div>
              <div class="card-body">
                <p class="text-center">
                  Over the past decade, our customers succeeded by leveraging
                  Intellectsoft’s process of building, motivating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="" style="background-color: #f8f8f8; height: 100px">
      <div class="container">
        <div class="row mt-5">
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
              <img class="w-100 img-123" src="../../images/wp2 (1).png" />
            </div>
          </div>
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
              <img class="w-100 img-123" src="../../images/wp2.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-img">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4 mt-5">
              <h6 class="text-white">// EXPERIENCE. EXECUTION. EXCELLENCE.</h6>
              <h1 class="text-white"><b>What We Actually Do</b></h1>
              <div class="d-flex gap-3 space">
                <div class="textbox"><i class="ri-javascript-line"></i></div>
                <div class="textbox"><i class="ri-bootstrap-line"></i></div>
                <div class="textbox"><i class="ri-css3-line"></i></div>
                <div class="textbox"><i class="ri-reactjs-line"></i></div>
              </div>
              <div>
                <h5 class="text-white mt-3">
                  <b> PHP Website Development Services</b>
                </h5>
                <p class="text-white">
                  Engitech is the partner of choice for many of the world’s
                  leading enterprises, SMEs and technology challengers. We help
                  businesses elevate their value through custom software
                  development, product design, QA and consultancy services
                </p>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4 mt-5">
              <img src="../../images/image1-home5.png" class="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="mt-3">
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
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="card shadow h-100">
                <div class="card-img p-5">
                  <div class="d-flex justify-content-center">
                    <img
                      class="img-fluid w-50 rounded-circle"
                      src="../../images/21017943_1.png"
                    />
                  </div>

                  <h6 class="text-center mt-2"><b>RamBabu Talluri</b></h6>
                  <h6 class="text-center text-muted">
                    CEO – Managing Director
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="card shadow h-100">
                <div class="card-img p-5">
                  <div class="d-flex justify-content-center">
                    <img
                      class="img-fluid w-50 rounded-circle"
                      src="../../images/prabhakar-300x300.png"
                    />
                  </div>

                  <h6 class="text-center mt-2"><b>Prabhakar Pathuri</b></h6>
                  <h6 class="text-center text-muted">
                    Director – Delivery & Support
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="card shadow h-100">
                <div class="card-img p-5">
                  <div class="d-flex justify-content-center">
                    <img
                      class="img-fluid w-50 rounded-circle"
                      src="../../images/1262185f-052b-4468-8311-c9a0a158ce44-150x150.jpeg"
                    />
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
    <section class="text-center">
      <div class="mt-5">
        <div class="bg-12345">
          <div class="text-center text-white mt-4">
            <h6 class=""><b>// OUR CLIENTS</b></h6>
            <h2><b>We are Trusted</b></h2>
            <h2><b>15+ Countries Worldwide</b></h2>
          </div>
          <div class="container">
            <!-- curosal -->
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
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
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
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
            <div class="row">
              <div class="col-lg-6 mb-4">
                <div class="mt-5">
                  <div class="boxsizing">
                    <img
                      src="../../images/image-box1.jpg"
                      class="w-100 img12"
                    />
                    <div class="centered1">
                      <h4 class="text-nowrap text-white">Our Mission</h4>
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <div class="boxsizing">
                    <img
                      src="../../images/image-box3.jpg"
                      class="w-100 img12"
                    />
                    <div class="centered1">
                      <h4 class="text-nowrap text-white">Our Philosphy</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-3 mb-4">
                <div class="mt-5">
                  <div class="boxsizing">
                    <img
                      src="../../images/image-box2.jpg"
                      class="w-100 img12"
                    />
                    <div class="centered1">
                      <h4 class="text-nowrap text-white">Our Vision</h4>
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <div class="boxsizing">
                    <img
                      src="../../images/image-box4.jpg"
                      class="w-100 img12"
                    />
                    <div class="centered1">
                      <h4 class="text-nowrap text-white">Our Stratagey</h4>
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
      <div class="bg-color">
        <div class="container">
          <div class="mt-3">
            <div class="d-flex justify-content-between">
              <div>
                <p>// OUR RECENT NEWS</p>
                <h1><b>Read Our Latest News</b></h1>
              </div>
              <div><button class="btn btn-1">ALL NEWS</button></div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
                <div class="card shadow">
                  <div class="card-body">
                    <p>_ July 6, 2023_ Rambabu</p>
                    <h3>DeveOps & Infra Management</h3>
                    <div class="mt-1 d-flex gap-3">
                      <div><i class="ri-arrow-right-line"></i></div>
                      <div class="mt-3" style="color: orangered">
                        Learn more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
                <div class="card shadow">
                  <div class="card-body">
                    <p>_ March 4, 2023_ Rambabu</p>
                    <h3>Hello world!</h3>
                    <div class="mt-1 d-flex gap-3">
                      <div><i class="ri-arrow-right-line"></i></div>
                      <div class="mt-3" style="color: orangered">
                        Learn more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 mb-4">
                <div class="card shadow">
                  <div class="card-body">
                    <p>_ December 20, 2021_ Rambabu</p>
                    <h3>Hello world!</h3>
                    <div class="mt-1 d-flex gap-3">
                      <div><i class="ri-arrow-right-line"></i></div>
                      <div class="mt-3" style="color: orangered">
                        Learn more
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
      <div class="mt-5">
        <footer-page></footer-page>
      </div>
    </section>
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
<style scoped>
.padding1 {
  padding: 155px 0px 170px 0px;
}

.bg-color {
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
}

.img12 {
  z-index: 1;
  opacity: 0.7;
}

.img12:hover {
  z-index: 1;
  opacity: 1;
}

.textbox {
  padding: 10px 15px 10px 15px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: rgba(255, 255, 255, 0.3);
}

.textbox:hover {
  background-color: orangered;
  color: white !important;
}

.textbox:hover i {
  color: white;
}

.card {
  transition: all 0.5s ease;
}

.card:hover {
  transform: translateY(-5%);
}

.bg-img {
  background-color: #0e314c;
  background-image: url("../../images/bg-art-5.png");
  background-repeat: no-repeat;

  opacity: 1;
  /* height: 100vh; */
}

.boxsizing {
  box-sizing: inherit;
  position: relative;
  text-align: center;
  color: white;
  padding: 10px 10px;
}

.centered1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

p {
  font-size: 14px;
}

.bg-12345 {
  background-color: #0e314c;
  display: grid;
  place-items: center;
}

.img-123 {
  opacity: 0.7;
  z-index: 1;
}

.img-123:hover {
  opacity: 1;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.card1 {
  width: 77px;
  height: 89px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 21%;
  position: absolute;
  top: -20px;
  right: -30px;
  display: flex;
  justify-content: center;
  margin-right: 19px;
  /* margin-top: 20px; */
}

.bor:hover i {
  color: white;
}

.cardbg {
  background-color: white;

  background-repeat: no-repeat;
  background-size: cover;
  color: #0e314c;

  border-radius: 12px;
  font-weight: bold;
  position: relative;
  z-index: 1;
  animation: cardbg ease-in-out 0.9s infinite;
}

.cardbg::before {
  transition: 0.5s ease-in;
  position: absolute;
  top: 0px;
  left: 0%;
  right: 100%;
  bottom: 0px;
  border-radius: 12px;
  content: "";

  background-image: url("../../images/bg-icon-box1.jpg") !important;
}

.cardbg:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.cardbg:hover {
  background-color: transparent !important;
  color: white;
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}

.bg-img1 {
  background-color: #0e0a31;
  background-image: url("../../images/bg-banner-home5.png");
  background-position: bottom center;
  background-repeat: no-repeat;
  /* height: 100vh; */
}

.header {
  font-size: 60px;
  color: white;
  text-align: center;
}

.bor {
  padding: 30px 40px 30px 40px;
  border-style: solid;
  border-width: 0px 0px 0px 0px;
  background-color: transparent;
  background-image: linear-gradient(110deg, #ee4326 0%, #0e314c 100%);
  box-shadow: 15px 15px 38px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

i {
  font-size: 35px;
  color: #ee4326;
  margin-top: 20px;
}

.btn-1 {
  border: 1px solid orangered;
  background: orangered;
  color: white;
  padding: 15px 25px 15px 25px;
}

@media (max-width: 767px) {
  .header {
    font-size: 28px;
    line-height: 40px;
  }

  h4 {
    font-size: 14px;
    text-align: center;
  }
}

@media (min-width: 768px) and (max-width: 1800px) {
  .bor {
    margin-top: -50px;
  }
}

.cardbg1 {
  background-color: white;

  background-repeat: no-repeat;
  background-size: cover;
  color: #0e314c;

  border-radius: 12px;
  font-weight: bold;
  position: relative;
  z-index: 1;
  animation: cardbg1 ease-in-out 0.9s infinite;
}

.cardbg1::before {
  transition: 0.5s ease-in;
  position: absolute;
  top: 0px;
  left: 0%;
  right: 100%;
  bottom: 0px;
  border-radius: 12px;
  content: "";

  background-image: url("../../images/bg-icon-box2.jpg") !important;
}

.cardbg1:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.cardbg1:hover {
  background-color: transparent !important;
  color: white;
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}

.cardbg2 {
  background-color: white;

  background-repeat: no-repeat;
  background-size: cover;
  color: #0e314c;

  border-radius: 12px;
  font-weight: bold;
  position: relative;
  z-index: 1;
  animation: cardbg2 ease-in-out 0.9s infinite;
}

.cardbg2::before {
  transition: 0.5s ease-in;
  position: absolute;
  top: 0px;
  left: 0%;
  right: 100%;
  bottom: 0px;
  border-radius: 12px;
  content: "";

  background-image: url("../../images/bg-icon-box3.jpg") !important;
}

.cardbg2:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.cardbg2:hover {
  background-color: transparent !important;
  color: white;
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}

.cardbg3 {
  background-color: white;

  background-repeat: no-repeat;
  background-size: cover;
  color: #0e314c;

  border-radius: 12px;
  font-weight: bold;
  position: relative;
  z-index: 1;
  animation: cardbg3 ease-in-out 0.9s infinite;
}

.cardbg3::before {
  transition: 0.5s ease-in;
  position: absolute;
  top: 0px;
  left: 0%;
  right: 100%;
  bottom: 0px;
  border-radius: 12px;
  content: "";

  background-image: url("../../images/bg-icon-box4.jpg") !important;
}

.cardbg3:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.cardbg3:hover {
  background-color: transparent !important;
  color: white;
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}

.cardbg4 {
  background-color: white;

  background-repeat: no-repeat;
  background-size: cover;
  color: #0e314c;

  border-radius: 12px;
  font-weight: bold;
  position: relative;
  z-index: 1;
  animation: cardbg4 ease-in-out 0.9s infinite;
}

.cardbg4::before {
  transition: 0.5s ease-in;
  position: absolute;
  top: 0px;
  left: 0%;
  right: 100%;
  bottom: 0px;
  border-radius: 12px;
  content: "";

  background-image: url("../../images/bg-icon-box5.jpg") !important;
}

.cardbg4:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.cardbg4:hover {
  background-color: transparent !important;
  color: white;
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}

.cardbg5 {
  background-color: white;

  background-repeat: no-repeat;
  background-size: cover;
  color: #0e314c;

  border-radius: 12px;
  font-weight: bold;
  position: relative;
  z-index: 1;
  animation: cardbg1 ease-in-out 0.9s infinite;
}

.cardbg5::before {
  transition: 0.5s ease-in;
  position: absolute;
  top: 0px;
  left: 0%;
  right: 100%;
  bottom: 0px;
  border-radius: 12px;
  content: "";

  background-image: url("../../images/bg-icon-box5.jpg") !important;
}

.cardbg5:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.cardbg5:hover {
  background-color: transparent !important;
  color: white;
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}
@media (max-width: 500.98px) {
  .space {
   display: flex;
   justify-content: center;
  }
}
</style>