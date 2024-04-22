
<template>
  <div v-if="loading" class="laoding-div-main">
    <div class=" spinner-grow ">

    </div>
  </div>
  <div v-if="!loading" class="loading-div">
    <navigations-route></navigations-route>
    <div>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
            class="active indicator-btn" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="indicator-btn"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="indicator-btn"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item carousel-bottom-line active">
            <img src="../../assets/slidehome.jpg" class="d-block w-100" alt="" />

            <div class="carousel-caption d-none d-md-block">
              <div class="text-start text-head">
                <h5 class="development-tag">Development 2.0</h5>
              </div>
              <div class="text-start text-head">
                <span class="main-heading-smart">S</span>
                <span class="main-heading-smart">M</span>
                <span class="main-heading-smart">A</span>
                <span class="main-heading-smart">R</span>
                <span class="main-heading-smart">T</span>
                &nbsp;
                <span class="main-heading-smart">P</span>
                <span class="main-heading-smart">R</span>
                <span class="main-heading-smart">O</span>
                <span class="main-heading-smart">D</span>
                <span class="main-heading-smart">U</span>
                <span class="main-heading-smart">C</span>
                <span class="main-heading-smart">T</span>
                &nbsp;
                <span class="main-heading-smart">D</span>
                <span class="main-heading-smart">E</span>
                <span class="main-heading-smart">V</span>
                <span class="main-heading-smart">E</span>
                <span class="main-heading-smart">L</span>
                <span class="main-heading-smart">O</span>
                <span class="main-heading-smart">P</span>
                <span class="main-heading-smart">M</span>
                <span class="main-heading-smart">E</span>
                <span class="main-heading-smart">N</span>
                <span class="main-heading-smart">T</span>
              </div>
              <div class="text-start text-head">
                <span class="main-heading-smart">A</span>
                <span class="main-heading-smart">D</span>
                <span class="main-heading-smart">D</span>
                <span class="main-heading-smart">I</span>
                <span class="main-heading-smart">C</span>
                <span class="main-heading-smart">T</span>
                <span class="main-heading-smart">I</span>
                <span class="main-heading-smart">V</span>
                <span class="main-heading-smart">E</span>
                &nbsp;
                <span class="main-heading-smart">U</span>
                <span class="main-heading-smart">X</span>
              </div>
              <div class="text-start text-head">
                <p class="main-head-para">
                  In the era of smart products, how can you ensure that your
                  product is the one that customers will love? Understand the
                  nuances of smart product development and create products with
                  intelligence & addictive UX.
                </p>
              </div>
              <div class="text-start">
                <button type="button" class="btn btn-danger callback-btn">
                  Request a call back
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-bottom-line">
            <img src="../../assets/slide2-home1.jpg" class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <div class="text-head text-start">
                <h5 class="development-tag">
                  // We Create Leading Digital Products
                </h5>
              </div>
              <div class="text-start text-head">
                <span class="main-heading-smart">E</span>
                <span class="main-heading-smart">N</span>
                <span class="main-heading-smart">D</span>
                <span class="main-heading-smart">-</span>
                <span class="main-heading-smart">T</span>
                <span class="main-heading-smart">O</span>
                <span class="main-heading-smart">-</span>
                <span class="main-heading-smart">E</span>
                <span class="main-heading-smart">N</span>
                <span class="main-heading-smart">D</span>
              </div>
              <div class="text-start text-head">
                <span class="main-heading-smart">D</span>
                <span class="main-heading-smart">E</span>
                <span class="main-heading-smart">V</span>
                <span class="main-heading-smart">E</span>
                <span class="main-heading-smart">L</span>
                <span class="main-heading-smart">O</span>
                <span class="main-heading-smart">P</span>
                <span class="main-heading-smart">M</span>
                <span class="main-heading-smart">E</span>
                <span class="main-heading-smart">N</span>
                <span class="main-heading-smart">T</span>
              </div>
              <div class="text-start text-head">
                <p class="main-head-para">
                  We are 50+ proffessional software engineers with more then 5
                  years of experience in delivering superior product
                </p>
              </div>
              <div class="text-start text-head">
                <button type="button" class="btn btn-danger callback-btn">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-bottom-line">
            <img src="../../assets/slide3-home1.jpg" class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <div class="text-head text-start">
                <h5 class="development-tag">// Only High-Quality Services</h5>
              </div>
              <div class="text-start text-head">
                <span class="main-heading-smart">S</span>
                <span class="main-heading-smart">O</span>
                <span class="main-heading-smart">F</span>
                <span class="main-heading-smart">T</span>
                <span class="main-heading-smart">W</span>
                <span class="main-heading-smart">A</span>
                <span class="main-heading-smart">R</span>
                <span class="main-heading-smart">E</span>
                &nbsp;
                <span class="main-heading-smart">I</span>
                <span class="main-heading-smart">T</span>
              </div>
              <div class="text-start text-head">
                <span class="main-heading-smart">O</span>
                <span class="main-heading-smart">U</span>
                <span class="main-heading-smart">T</span>
                <span class="main-heading-smart">S</span>
                <span class="main-heading-smart">O</span>
                <span class="main-heading-smart">U</span>
                <span class="main-heading-smart">R</span>
                <span class="main-heading-smart">C</span>
                <span class="main-heading-smart">I</span>
                <span class="main-heading-smart">N</span>
                <span class="main-heading-smart">G</span>
              </div>
              <div class="text-head text-start">
                <p class="main-head-para">
                  We are 50+ proffessional software engineers with more then 5
                  years of experience in delivering superior product
                </p>
              </div>
              <div class="text-start text-head">
                <button type="button" class="btn btn-danger callback-btn">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> -->
      </div>
    </div>
    <div class="main-about-div">
      <div class="container">
        <div class="pt-5">
          <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12">
              <div class="pb-3">
                <span class="font-clr-org about">// ABOUT COMPANY</span>
                <h2 class="font-clr-blue fw-weight-800 partner font-h2">
                  Your Partner for <br />
                  Software Innovation
                </h2>
              </div>
              <p class="para-clr para-spe">
                At caratRED we develop customized software, build
                datawarehouses, deliver insights and create exciting content. We
                partner with Enterprises, SMEs and Leading Edge Startups across
                the globe and apply our Software Driven Thinking to solve their
                technical challenges
              </p>
              <p class="para-clr para-spe">
                We have built many scalable products having high traffic
                challenges on consumer side and complex workflows on enterprise
                front covering areas including Web, Cloud, Big data, Mobility,
                Payments in domains covering Media, Advertising, Education,
                Health & Travel.
              </p>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="card two-cards border-0 text-start">
                    <div>
                      <span><i class="ri-award-fill font-clr-org"></i></span>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">Experience</h4>
                      <div class="line-box"></div>
                      <p class="card-text card-para">
                        Our great team of more than 50 software experts.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="card two-cards border-0 text-start">
                    <div>
                      <span><i class="bi bi-gear font-clr-org bi-gear"></i></span>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">Experience</h4>
                      <div class="line-box"></div>
                      <p class="card-text card-para">
                        Our great team of more than 50 software experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12">
              <img src="../../assets/image1-home1.png" alt="" class="img-fluid" />
              <div class="learn-absolute">
                <a href="#" class="learn font-clr-org text-decoration-none fw-bold"><i
                    class="bi bi-arrow-right fw-bold mb-2"></i>
                  <span class="learn-hover">LEARN MORE ABOUT US</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="concept-div">
      <section class="section-div d-flex justify-content-center">
        <div class="container">
          <div class="d-grid justify-content-center">
            <span class="heading-slash d-flex justify-content-center">// WHY CHOOSE US</span>
            <h3 class="fw-weight-800 font-h3 design-heading text-center">
              Design the Concept <br />
              of Your Business Idea Now
            </h3>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="mb-3 h-100">
                <div class="serv-box-2">
                  <div class="card card-box">
                    <div><span class="big-number">01</span></div>
                    <div class="card-body content-box">
                      <h5 class="card-heading">Products</h5>
                      <div class="cards-matter">
                        Hospitality products encompass a diverse range of goods
                        and amenities specifically tailored to meet the comfort,
                        convenience, and service needs of guests in the
                        hospitality industry, including hotels, resorts,
                        restaurants, and other establishments.
                      </div>
                    </div>
                    <a href="#" class="learn font-clr-org text-decoration-none fw-bold"><i
                        class="bi bi-arrow-right fw-bold mb-2"></i>
                      <span class="learn-hover">LEARN MORE </span></a>
                    <div class="icon-box-div">
                      <i class="ri-building-4-fill icon-box"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="mb-3 h-100">
                <div class="serv-box-2">
                  <div class="card card-box">
                    <div><span class="big-number">02</span></div>
                    <div class="card-body content-box">
                      <h5 class="card-heading">RPA</h5>
                      <div class="cards-matter">
                        Robotic Process Automation (RPA) is a technology that
                        uses software robots to automate repetitive tasks,
                        improve efficiency, and reduce human intervention in
                        business processes.
                      </div>
                    </div>
                    <a href="#" class="learn font-clr-org text-decoration-none fw-bold"><i
                        class="bi bi-arrow-right fw-bold mb-2"></i>
                      <span class="learn-hover">LEARN MORE </span></a>
                    <div class="icon-box-div">
                      <i class="ri-building-4-fill icon-box"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="mb-3 h-100">
                <div class="serv-box-2">
                  <div class="card card-box">
                    <div><span class="big-number">03</span></div>
                    <div class="card-body content-box">
                      <h5 class="card-heading">Infrastructure</h5>
                      <div class="cards-matter">
                        Infrastructure refers to the fundamental physical and
                        organizational structures, facilities, and systems that
                        support the functioning of a society or organization,
                        including transportation, communication, utilities, and
                        buildings.
                      </div>
                    </div>
                    <a href="#" class="learn font-clr-org text-decoration-none fw-bold"><i
                        class="bi bi-arrow-right fw-bold mb-2"></i>
                      <span class="learn-hover">LEARN MORE </span></a>
                    <div class="icon-box-div">
                      <i class="ri-building-4-fill icon-box"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="mb-3 h-100">
                <div class="serv-box-2">
                  <div class="card card-box">
                    <div><span class="big-number">04</span></div>
                    <div class="card-body content-box">
                      <h5 class="card-heading">ERP</h5>
                      <div class="cards-matter">
                        ERPNext is an open-source, web-based Enterprise Resource
                        Planning (ERP) software designed to help businesses
                        manage their operations efficiently across various
                        functions, from accounting and inventory management to
                        sales, purchasing, and more.
                      </div>
                    </div>
                    <a href="#" class="learn font-clr-org text-decoration-none fw-bold"><i
                        class="bi bi-arrow-right fw-bold mb-2"></i>
                      <span class="learn-hover">LEARN MORE </span></a>
                    <div class="icon-box-div">
                      <i class="ri-building-4-fill icon-box"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
      <div class="container">
        <div class="bg-img-build position-relative">
          <div class="image-cta">
            <div class="div-bg">
              <div class="row">
                <div class="col-lg-8 col-md-12 col-sm-12">
                  <div>
                    <span class="build-small-head">// We Carry More Than Just Good Coding Skills</span>
                    <h2 class="build-heading fw-weight-800">
                      Let's Build Your Website!
                    </h2>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                  <div class="text-center">
                    <router-link to="/contactus">
                      <button type="button" class="btn btn-danger contact">

                        contact

                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="deliver-solution">
      <div class="container">
        <div class="deliver-main-div">
          <div class="text-center text-white">
            <span class="text-center heading-slash-white">//TECHNOLOGY INDEX</span>
            <h2 class="text-center deliver-heading fw-weight-800 font-h2">
              We Deliver Solution with<br />
              the Goal of Trusting Relationships
            </h2>
          </div>
          <div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-12">
                <div class="mb-4">
                  <div class="card deliver-cards">
                    <div class="card-body">
                      <div class="card-title">
                        <i class="ri-mac-fill deliver-icons"></i>
                      </div>

                      <h5>WEB</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <div class="mb-4">
                  <div class="card deliver-cards">
                    <div class="card-body">
                      <div class="card-title">
                        <i class="ri-mac-fill deliver-icons"></i>
                      </div>

                      <h5>WEB</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <div class="mb-4">
                  <div class="card deliver-cards">
                    <div class="card-body">
                      <div class="card-title">
                        <i class="ri-mac-fill deliver-icons"></i>
                      </div>

                      <h5>WEB</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <div class="mb-4">
                  <div class="card deliver-cards">
                    <div class="card-body">
                      <div class="card-title">
                        <i class="ri-mac-fill deliver-icons"></i>
                      </div>

                      <h5>WEB</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <div class="mb-4">
                  <div class="card deliver-cards">
                    <div class="card-body">
                      <div class="card-title">
                        <i class="ri-mac-fill deliver-icons"></i>
                      </div>

                      <h5>WEB</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <div class="mb-4">
                  <div class="card deliver-cards">
                    <div class="card-body">
                      <div class="card-title">
                        <i class="ri-mac-fill deliver-icons"></i>
                      </div>

                      <h5>WEB</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dots-div">
      <div class="container">
        <div class="clients-div">
          <div class="d-grid justify-content-center">
            <span class="heading-slash d-flex justify-content-center">// Our Clients</span>
            <h3 class="fw-weight-800 font-h3 font-clr-blue text-center">
              Our Clients
            </h3>
          </div>
        </div>
        <div>
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="client-card-div">
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div class="position-relative">
                        <div class="shadow-card"></div>
                        <div class="card client-single-card border-0">
                          <div class="d-inline-flex">
                            <img src="../../assets/Shangri-LaHotels.png" alt="" class="card-image" />
                            <div class="card-title">
                              <h6 class="font-size-h6 font-clr-blue fw-bold">
                                SHANGARI-LA HOTELS & RESORTS
                              </h6>
                              <p class="company-tag">Manager Of Company</p>
                            </div>
                          </div>
                          <div class="card-body">
                            <span class="company-description">"Very well thought out and articulate
                              communication. Clear milestones, deadlines and
                              fast work. Patience. Infinite patience. No
                              shortcuts. Even if the client is being careless.
                              The best part...always solving problems with great
                              original ideas!."
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div class="position-relative">
                        <div class="shadow-card"></div>
                        <div class="card client-single-card border-0">
                          <div class="d-inline-flex">
                            <img src="../../assets/Shangri-LaHotels.png" alt="" class="card-image" />
                            <div class="card-title">
                              <h6 class="font-size-h6 font-clr-blue fw-bold">
                                SHANGARI-LA HOTELS & RESORTS
                              </h6>
                              <p class="company-tag">Manager Of Company</p>
                            </div>
                          </div>
                          <div class="card-body">
                            <span class="company-description">"Very well thought out and articulate
                              communication. Clear milestones, deadlines and
                              fast work. Patience. Infinite patience. No
                              shortcuts. Even if the client is being careless.
                              The best part...always solving problems with great
                              original ideas!."
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="client-card-div">
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div class="position-relative">
                        <div class="shadow-card"></div>
                        <div class="card client-single-card border-0">
                          <div class="d-inline-flex">
                            <img src="../../assets/Shangri-LaHotels.png" alt="" class="card-image" />
                            <div class="card-title">
                              <h6 class="font-size-h6 font-clr-blue fw-bold">
                                SHANGARI-LA HOTELS & RESORTS
                              </h6>
                              <p class="company-tag">Manager Of Company</p>
                            </div>
                          </div>
                          <div class="card-body">
                            <span class="company-description">"Very well thought out and articulate
                              communication. Clear milestones, deadlines and
                              fast work. Patience. Infinite patience. No
                              shortcuts. Even if the client is being careless.
                              The best part...always solving problems with great
                              original ideas!."
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div class="position-relative">
                        <div class="shadow-card"></div>
                        <div class="card client-single-card border-0">
                          <div class="d-inline-flex">
                            <img src="../../assets/Shangri-LaHotels.png" alt="" class="card-image" />
                            <div class="card-title">
                              <h6 class="font-size-h6 font-clr-blue fw-bold">
                                SHANGARI-LA HOTELS & RESORTS
                              </h6>
                              <p class="company-tag">Manager Of Company</p>
                            </div>
                          </div>
                          <div class="card-body">
                            <span class="company-description">"Very well thought out and articulate
                              communication. Clear milestones, deadlines and
                              fast work. Patience. Infinite patience. No
                              shortcuts. Even if the client is being careless.
                              The best part...always solving problems with great
                              original ideas!."
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="client-card-div">
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div class="position-relative">
                        <div class="shadow-card"></div>
                        <div class="card client-single-card border-0">
                          <div class="d-inline-flex">
                            <img src="../../assets/Shangri-LaHotels.png" alt="" class="card-image" />
                            <div class="card-title">
                              <h6 class="font-size-h6 font-clr-blue fw-bold">
                                SHANGARI-LA HOTELS & RESORTS
                              </h6>
                              <p class="company-tag">Manager Of Company</p>
                            </div>
                          </div>
                          <div class="card-body">
                            <span class="company-description">"Very well thought out and articulate
                              communication. Clear milestones, deadlines and
                              fast work. Patience. Infinite patience. No
                              shortcuts. Even if the client is being careless.
                              The best part...always solving problems with great
                              original ideas!."
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div class="position-relative">
                        <div class="shadow-card"></div>
                        <div class="card client-single-card border-0">
                          <div class="d-inline-flex">
                            <img src="../../assets/Shangri-LaHotels.png" alt="" class="card-image" />
                            <div class="card-title">
                              <h6 class="font-size-h6 font-clr-blue fw-bold">
                                SHANGARI-LA HOTELS & RESORTS
                              </h6>
                              <p class="company-tag">Manager Of Company</p>
                            </div>
                          </div>
                          <div class="card-body">
                            <span class="company-description">"Very well thought out and articulate
                              communication. Clear milestones, deadlines and
                              fast work. Patience. Infinite patience. No
                              shortcuts. Even if the client is being careless.
                              The best part...always solving problems with great
                              original ideas!."
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev client-prev" type="button" data-bs-target="#carouselExample"
              data-bs-slide="prev">
              <span aria-hidden="true"><i class="ri-arrow-left-line text-dark fs-1"></i></span>
              <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next client-next" type="button" data-bs-target="#carouselExample"
              data-bs-slide="next">
              <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
              <span aria-hidden="true"><i class="ri-arrow-right-line text-dark fs-1"></i></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <footer-design></footer-design>
    </div>
  </div>
</template>

<script>
import NavigationsRoute from "../Navigation/NavigationsRoute.vue";
import FooterDesign from "../FooterDesign.vue";


export default {
  name: "HomePage",
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
  },

  components: {
    NavigationsRoute,
    FooterDesign,

  },
};
</script>

<style  scoped>
@media (max-width: 576px) {
  .build-small-head {
    font-size: 13px !important;
  }

  .build-heading {
    font-size: 24px !important;
  }

  .div-bg {
    padding: 25px 50px 25px 50px !important;
  }

  .contact {
    padding: 10px 25px 10px 25px !important;
  }

  .main-about-div {
    padding: 10px 0px 40px 0px !important;

  }

  .deliver-heading {
    font-size: 25px !important;
  }
}

.carousel-bottom-line::after {
  content: "";
  display: block;
  height: 4px;
  width: 100%;
  background-color: orangered;
  /* transform: scaleX(0); */
  animation: lefttoright 7s ease;
  transform-origin: left !important;
}

@keyframes lefttoright {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}

.callback-btn {
  z-index: 11;
  background-color: rgb(239, 83, 80);
  height: auto;
  width: auto;
  color: rgb(255, 255, 255);
  text-decoration: none;
  white-space: nowrap;
  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  text-align: left;
  line-height: 18px;
  letter-spacing: 0px;
  font-weight: 700;
  font-size: 14px;
  padding: 20px 35px;
  backdrop-filter: none;
  filter: none;
  transform-origin: 50% 50%;
  opacity: 1;
  visibility: visible;
  border-width: 0px;
  border-radius: 0px;
  transition: all 0.8s ease;
  display: inline-block;
  animation: slideRightTotop 3s ease;
}

.callback-btn:hover {
  background-color: #0e314c;
  color: #ffffff;
}

.main-head-para {
  z-index: 10;
  height: auto;
  color: rgb(255, 255, 255);
  text-decoration: none;
  white-space: normal;
  width: 862px;
  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  text-align: left;
  line-height: 30px;
  letter-spacing: 0px;
  font-weight: 400;
  font-size: 18px;
  backdrop-filter: none;
  filter: none;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible;
  display: inline-block;
  animation: slideRightToLeft 3s ease;
}

.development-tag {
  z-index: 8;
  height: auto;
  width: auto;
  color: rgb(255, 255, 255);
  text-decoration: none;
  white-space: nowrap;
  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  text-align: left;
  line-height: 36px;
  letter-spacing: 0px;
  font-weight: 400;
  font-size: 20px;
  backdrop-filter: none;
  filter: none;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible;
  display: inline-block;
  animation: slideRightTotop 2s ease;
}

.text-head {
  white-space: nowrap;
  /* Prevent text from wrapping */
  overflow: hidden;
  /* Hide overflowing text */
}

.main-heading-smart {
  text-align: left;
  line-height: 30px;
  letter-spacing: 0px;
  font-weight: 900;
  font-size: 30px;
}

.main-heading-smart {
  display: inline-block;
  animation: slideRightToLeft 2s ease;
  /* Adjust duration and animation type as needed */
}

@keyframes slideRightTotop {
  0% {
    transform: translateY(-100px);
    /* Start from the right */
  }

  100% {
    transform: translateY(0px);
    /* Move to the left */
  }
}

@keyframes slideRightToLeft {
  0% {
    transform: translateX(100px);
    /* Start from the right */
  }

  100% {
    transform: translateX(0%);
    /* Move to the left */
  }
}

.carousel-caption {
  position: absolute;
  top: 200px;
}

@media (min-width: 320px) and (max-width: 767px) {
  .carousel-caption {
    top: 0px;

  }

}

@media (min-width: 768px) and (max-width: 992px) {
  .carousel-caption {
    top: 15px;
  }
}

@media (min-width: 992px) and (max-width: 1198px) {
  .carousel-caption {
    top: 50px;
  }
}





.main-about-div {
  padding: 125px 0px 80px 0px;
}

.para-spe {
  font-size: 16px;
  line-height: 1.875;
  font-weight: 400;
}

.about {
  font-size: 14px;
  font-weight: 800;
  position: relative;
  display: inline-block;
}

.partner {
  line-height: 48px;
}

.learn-hover {
  margin-left: 5px;
}

.learn:hover .learn-hover {
  margin-left: 0px !important;
  transition: all 0.5s ease;
}

.indicator-btn {
  border: 3px solid #ff3a2d !important;
  border-radius: 50% !important;
  cursor: pointer;
  box-sizing: content-box;
  background-color: black !important;
  width: 12px !important;
  height: 10px !important;
}

.carousel-indicators .active {
  background-color: white !important;
}

.ri-award-fill {
  font-size: 45px;
}

.bi-gear {
  font-size: 45px;
}

.line-box {
  height: 3px;
  width: 100%;
  background: #efefef;
  margin-bottom: 15px;
  position: relative;
}

.line-box::after {
  content: "";
  display: block;
  height: 3px;
  width: 100%;
  background-color: orangered;
  transform: scaleX(0);
  transition: transform 0.5s ease;
  transform-origin: left;
}

.two-cards:hover .line-box::after {
  transform: scaleX(1);
}

.card-para {
  font-size: 16px;
  line-height: 1.875;
  font-weight: 400;
}

.concept-div {
  background-color: #0e314c;
}

.section-div {
  padding: 60px 0px 160px 0px;
}

.design-heading {
  color: #ffffff;
}

/* .loading-div {
  min-height: 100vh !important;
  overflow: auto !important;
} */

.big-number {
  font-size: 100px;
  font-weight: 800;
  color: #325a78;
  position: absolute;
  left: -10px;
  top: -34px;
}

.card-heading {
  line-height: 30px;
  color: #fff;
  margin-bottom: 10px;
}

.cards-matter {
  line-height: 22px;
  color: #aeaacb;
}

.icon-box {
  font-size: 35px;
  position: absolute;
  top: 30px;
  left: 53px;
  color: white;
}

.icon-box-div {
  width: 188px;
  height: 188px;
  border-radius: 50%;
  background: #325a78;
  position: absolute;
  bottom: -95px;
  right: -80px;
}

.card-box {
  background-color: #0e314c;
  padding: 43px 30px 65px;
  height: 100% !important;
  border-radius: 0px;
  border: 1px solid #464168;
  transition: all 0.3s linear;


}

.serv-box-2 {
  overflow: hidden;
  position: relative;
  /* padding: 43px 30px 65px; */
  margin: 10px 10px !important;
  height: 100%;
  transition: all 0.3s linear;


}

.content-box {
  height: 100%;
  position: relative;
  z-index: 1;
}

.serv-box-2:hover .card-box {
  background-color: #ffffff;
  border: 1px solid white;
}

.serv-box-2:hover .big-number {
  color: #ffffff;
}

.serv-box-2:hover .card-heading {
  color: black;
}

.serv-box-2:hover .cards-matter {
  color: #6d6d6d;
}

.image-cta {
  width: 100%;
  background-image: url(../../assets/bg-cta1-home1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.div-bg {
  margin-top: -120px;
  margin-bottom: 0px;
  padding: 50px 65px 200px 65px;
}

.build-heading {
  color: #ffffff;
  font-size: 48px;
  line-height: 60px;
}

.build-small-head {
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 5px;
}

.contact {
  font-family: "Nunito Sans", Sans-serif;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  fill: #ffffff;
  color: #ffffff;
  background-color: #ee4326;
  border-style: solid;
  border-width: 0px 0px 0px 0px;
  border-color: #ffffff;
  border-radius: 0px 0px 0px 0px;
  padding: 21px 35px 21px 35px;
  transition: all 0.3s linear;
}

.contact:hover {
  background-color: #0e314c;
}

.deliver-solution {
  background-image: url(../../assets/bg-tech-home1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.deliver-main-div {
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 120px 0px 120px 0px;
}

.deliver-cards {
  background-color: transparent;
  display: block;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 40px 15px 30px;
  border-radius: 0px;
  text-align: center;
}

.deliver-cards:hover {
  background-color: #ee4326;
  color: #fff;
  transition: all 0.3s linear;
}

.deliver-icons {
  font-size: 32px;
  color: #ffffff;
}

.dots-div {
  background-image: url(../../assets/bgmaps-dots.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.clients-div {
  padding: 110px 0px 50px 0px;
}

.card-image {
  width: 100px;
}

.company-tag {
  color: #9f9f9f;
}

.company-description {
  color: #0e314c;
  font-size: 14px;
  margin-top: 23px;
}

.client-single-card {
  background: #fff;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 3px 3px 13px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px;
}

.shadow-card {
  background: #f8f8f8;
  position: absolute;
  left: 30px;
  bottom: -20px;
  width: calc(100% - 55px);
  height: 100%;
  z-index: 0;
  box-shadow: 3px 3px 13px 0px rgba(0, 0, 0, 0.1);
}
</style>