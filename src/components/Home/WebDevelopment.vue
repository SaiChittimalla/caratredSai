<template>
    <div v-if="loading" class=" laoding-div-main">
        <div class="spinner-grow "></div>
    </div>
    <div v-if="!loading" class="loading-div">
        <navigations-route></navigations-route>
        <div>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel"
                data-interval="2000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../assets/slide1-home4.jpg" class="d-block w-100" alt="">

                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="development-tag">Development 2.0</h5>
                            <div class=" text-start ">
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
                            <div class="text-start ">
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
                            <p class="main-head-para">In the era of smart products, how can you ensure that your product is
                                the
                                one that customers will
                                love? Understand the nuances of smart product development and create products with
                                intelligence
                                & addictive UX.
                            </p>
                            <div class="text-start">
                                <button type="button" class=" btn btn-danger callback-btn ">Request a call back</button>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/slide2-home4.jpg" class="d-block w-100" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="development-tag">// We Create Leading Digital Products</h5>
                            <div class=" text-start ">
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
                            <div class="text-start ">
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
                            <p class="main-head-para">We are 50+ proffessional software engineers with more then 5 years of
                                experience in delivering superior product
                            </p>
                            <div class="text-start">
                                <button type="button" class=" btn btn-danger callback-btn ">LEARN MORE</button>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/slide3-home4.jpg" class="d-block w-100" alt="">
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="development-tag">// Only High-Quality Services</h5>
                            <div class=" text-start ">
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
                            <div class="text-start ">
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
                            <p class="main-head-para ">We are 50+ proffessional software engineers with more then 5 years of
                                experience in delivering superior product
                            </p>
                            <div class="text-start">
                                <button type="button" class=" btn btn-danger callback-btn ">LEARN MORE</button>
                            </div>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev control-prev-top" type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next control-next-top" type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
            <div class="letter-cards">
                <div class="letter-cards-div2">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="client-card-div">
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div class=" position-relative ">
                                                <div class="shadow-card"></div>
                                                <div class="card client-single-card border-0 ">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <img src="../../assets/b-image.png" alt="">
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <h6 class="card-text-head font-clr-blue">Business & Finance</h6>
                                                            <p class="card-para-latter">
                                                                The global economy is moving towards a new identity. In
                                                                order to
                                                                remain competitive and profitable, the banking and finance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div class=" position-relative ">
                                                <div class="shadow-card"></div>
                                                <div class="card client-single-card border-0 ">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <img src="../../assets/g-image.png" alt="">
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <h6 class="card-text-head font-clr-blue">Business & Finance</h6>
                                                            <p class="card-para-latter">
                                                                The global economy is moving towards a new identity. In
                                                                order to
                                                                remain competitive and profitable, the banking and finance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div class=" position-relative ">
                                                <div class="shadow-card"></div>
                                                <div class="card client-single-card border-0 ">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <img src="../../assets/r-image.png" alt="">
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <h6 class="card-text-head font-clr-blue">Business & Finance</h6>
                                                            <p class="card-para-latter">
                                                                The global economy is moving towards a new identity. In
                                                                order to
                                                                remain competitive and profitable, the banking and finance.
                                                            </p>
                                                        </div>
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
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div class=" position-relative ">
                                                <div class="shadow-card"></div>
                                                <div class="card client-single-card border-0 ">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <img src="../../assets/t-image.png" alt="">
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <h6 class="card-text-head font-clr-blue">Business & Finance</h6>
                                                            <p class="card-para-latter">
                                                                The global economy is moving towards a new identity. In
                                                                order to
                                                                remain competitive and profitable, the banking and finance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div class=" position-relative ">
                                                <div class="shadow-card"></div>
                                                <div class="card client-single-card border-0 ">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <img src="../../assets/b-image.png" alt="">
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <h6 class="card-text-head font-clr-blue">Business & Finance</h6>
                                                            <p class="card-para-latter">
                                                                The global economy is moving towards a new identity. In
                                                                order to
                                                                remain competitive and profitable, the banking and finance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div class=" position-relative ">
                                                <div class="shadow-card"></div>
                                                <div class="card client-single-card border-0 ">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <img src="../../assets/g-image.png" alt="">
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <h6 class="card-text-head font-clr-blue">Business & Finance</h6>
                                                            <p class="card-para-latter">
                                                                The global economy is moving towards a new identity. In
                                                                order to
                                                                remain competitive and profitable, the banking and finance.
                                                            </p>
                                                        </div>
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
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div class=" position-relative ">
                                                <div class="shadow-card"></div>
                                                <div class="card client-single-card border-0 ">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <img src="../../assets/r-image.png" alt="">
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <h6 class="card-text-head font-clr-blue">Business & Finance</h6>
                                                            <p class="card-para-latter">
                                                                The global economy is moving towards a new identity. In
                                                                order to
                                                                remain competitive and profitable, the banking and finance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div class=" position-relative ">
                                                <div class="shadow-card"></div>
                                                <div class="card client-single-card border-0 ">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <img src="../../assets/t-image.png" alt="">
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <h6 class="card-text-head font-clr-blue">Business & Finance</h6>
                                                            <p class="card-para-latter">
                                                                The global economy is moving towards a new identity. In
                                                                order to
                                                                remain competitive and profitable, the banking and finance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <div class=" position-relative ">
                                                <div class="shadow-card"></div>
                                                <div class="card client-single-card border-0 ">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <img src="../../assets/g-image.png" alt="">
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <h6 class="card-text-head font-clr-blue">Business & Finance</h6>
                                                            <p class="card-para-latter">
                                                                The global economy is moving towards a new identity. In
                                                                order to
                                                                remain competitive and profitable, the banking and finance.
                                                            </p>
                                                        </div>
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
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next client-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span aria-hidden="true"><i class="ri-arrow-right-line text-dark fs-1 "></i></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
            <div>
                <div class="your-partner-one position-relative ">
                    <div class="partner-right-bg"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src="../../assets/image1-home4.png" alt="" class="img-fluid ">
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class=" pb-3 ">
                                    <span class="font-clr-blue  about ">// ABOUT COMPANY</span>
                                    <h2 class="font-clr-blue fw-weight-800 partner font-h2 ">Your Partner for <br>
                                        Software Innovation</h2>
                                    <p class="partner-para">Engitech is the partner of choice for many of the world’s
                                        leading enterprises, SMEs
                                        and technology challengers. We help businesses elevate their value through custom
                                        software development, product design, QA and consultancy services.</p>
                                    <p class="partner-para text-dark"> <strong>We can help to maintain and modernize your IT
                                            infrastructure and solve
                                            various infrastructure-specific issues a business may face.</strong></p>
                                </div>
                                <div class="element-div">
                                    <div class="elementor-widget">
                                        <div class="video-popup position-relative w-auto">
                                            <div class="inner">
                                                <div class="outer">
                                                </div>
                                            </div>
                                            <div class="video-div">
                                                <div class=" btn-inner">
                                                    <a href="https://www.youtube.com/watch?v=lfDZJqSrIuk"
                                                        class="btn-play  d-flex align-items-center justify-content-center ">
                                                        <i class="bi bi-play-fill m-0"></i>
                                                    </a>
                                                </div>
                                                <span class=" fw-bold ms-4">video Showcase</span>
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
                <div class="offer-div">
                    <div class="container ">
                        <div>
                            <div class=" pb-4 text-center  ">
                                <span class=" fw-weight-800 service-tag">// OUR SERVICE</span>
                                <h2 class=" text-white  fw-weight-800 font-h2 ">Your Partner for <br>
                                    Software Innovation</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class=" col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                                <div>
                                    <div class="card bg-clr-blue service-cards position-relative ">
                                        <div class="service-circle">
                                        </div>
                                        <span class="icon-desk"><i class="ri-mac-fill text-white fs-1"></i></span>
                                        <h5 class="cus-service-tag text-white ">Custom Software <br>Development</h5>
                                        <div class="card-body">
                                            <p class="service-p-tag">We help businesses elevate their value through custom
                                                software development,
                                                product design, QA and consultancy.</p>
                                            <ul class=" list-unstyled ">
                                                <li class="active"><span class="slash-effect">//</span>ECOMMERCE SOLUTIONS
                                                </li>
                                                <li><span class="slash-effect">//</span>GAMIFICATION SOFTWARE</li>
                                                <li><span class="slash-effect">//</span>CLIENT MOBILE APPS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                                <div>
                                    <div class="card bg-clr-blue service-cards position-relative ">
                                        <div class="service-circle">
                                        </div>
                                        <span class="icon-desk"><i class="ri-mac-fill text-white fs-1"></i></span>
                                        <h5 class="cus-service-tag text-white ">Custom Software <br>Development</h5>
                                        <div class="card-body">
                                            <p class="service-p-tag">We help businesses elevate their value through custom
                                                software development,
                                                product design, QA and consultancy.</p>
                                            <ul class=" list-unstyled ">
                                                <li class="active"><span class="slash-effect">//</span>ECOMMERCE SOLUTIONS
                                                </li>
                                                <li><span class="slash-effect">//</span>GAMIFICATION SOFTWARE</li>
                                                <li><span class="slash-effect">//</span>CLIENT MOBILE APPS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                                <div>
                                    <div class="card bg-clr-blue service-cards position-relative ">
                                        <div class="service-circle">
                                        </div>
                                        <span class="icon-desk"><i class="ri-mac-fill text-white fs-1"></i></span>
                                        <h5 class="cus-service-tag text-white ">Custom Software <br>Development</h5>
                                        <div class="card-body">
                                            <p class="service-p-tag">We help businesses elevate their value through custom
                                                software development,
                                                product design, QA and consultancy.</p>
                                            <ul class=" list-unstyled ">
                                                <li class="active"><span class="slash-effect">//</span>ECOMMERCE SOLUTIONS
                                                </li>
                                                <li><span class="slash-effect">//</span>GAMIFICATION SOFTWARE</li>
                                                <li><span class="slash-effect">//</span>CLIENT MOBILE APPS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="hotel-img-div">
                    <div class="container ">
                        <div class="row text-center ">
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                                <div class=" img-div d-flex  align-items-center  justify-content-center ">

                                    <img src="../../assets/wp2.png" alt="image" class=" img-fluid hotel-logos">
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                                <div class=" img-div d-flex  align-items-center  justify-content-center ">

                                    <img src="../../assets/wp4.png" alt="image" class=" img-fluid hotel-logos">
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                                <div class=" img-div d-flex  align-items-center  justify-content-center ">

                                    <img src="../../assets/wp5.svg" alt="image" class=" img-fluid hotel-logos">
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                                <div class=" img-div d-flex  align-items-center  justify-content-center ">

                                    <img src="../../assets/wp2.png" alt="image" class=" img-fluid hotel-logos">
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                                <div class=" img-div d-flex  align-items-center  justify-content-center ">

                                    <img src="../../assets/wp4.png" alt="image" class=" img-fluid hotel-logos">
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3">
                                <div class=" img-div d-flex  align-items-center  justify-content-center ">

                                    <img src="../../assets/wp5.svg" alt="image" class=" img-fluid hotel-logos">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div class="service-wide">
                    <div class="wide-div"></div>
                    <div class="container">
                        <div class="pb-4">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class=" pb-3 ">
                                        <span class="font-clr-blue  about ">// OUR SERVICE</span>
                                        <h2 class="font-clr-blue fw-weight-800 partner font-h2 ">We Offer a Wide <br>
                                            Variety of IT Services</h2>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class=" text-end d-flex align-items-end justify-content-end h-100 ">
                                        <button type="button" class="btn btn-primary all-service-btn">
                                            ALL SERVICES
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
                                    <div>
                                        <div class="card service-two-cards">
                                            <div class="square-top"></div>
                                            <div class="text-center">
                                                <span><i class="ri-code-box-line  "></i></span>
                                            </div>
                                            <div class=" card-body text-center  ">
                                                <p>We carry more than just good coding skills. Our experience makes us stand
                                                    out from other web development.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
                                    <div>
                                        <div class="card service-two-cards">
                                            <div class="square-top"></div>
                                            <div class="text-center">
                                                <span><i class="bi bi-phone"></i></span>
                                            </div>
                                            <div class=" card-body text-center  ">
                                                <p>We carry more than just good coding skills. Our experience makes us stand
                                                    out from other web development.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
                                    <div>
                                        <div class="card service-two-cards">
                                            <div class="square-top"></div>
                                            <div class="text-center">
                                                <span><i class="ri-code-box-line  "></i></span>
                                            </div>
                                            <div class=" card-body text-center  ">
                                                <p>We carry more than just good coding skills. Our experience makes us stand
                                                    out from other web development.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
                                    <div>
                                        <div class="card service-two-cards">
                                            <div class="square-top"></div>
                                            <div class="text-center">
                                                <span><i class="ri-code-box-line  "></i></span>
                                            </div>
                                            <div class=" card-body text-center  ">
                                                <p>We carry more than just good coding skills. Our experience makes us stand
                                                    out from other web development.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
                                    <div>
                                        <div class="card service-two-cards">
                                            <div class="square-top"></div>
                                            <div class="text-center">
                                                <span><i class="ri-code-box-line  "></i></span>
                                            </div>
                                            <div class=" card-body text-center  ">
                                                <p>We carry more than just good coding skills. Our experience makes us stand
                                                    out from other web development.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
                                    <div>
                                        <div class="card service-two-cards">
                                            <div class="square-top"></div>
                                            <div class="text-center">
                                                <span><i class="ri-code-box-line  "></i></span>
                                            </div>
                                            <div class=" card-body text-center  ">
                                                <p>We carry more than just good coding skills. Our experience makes us stand
                                                    out from other web development.</p>
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
                    <div class="counting-div">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <div class=" text-center ">
                                    <div class="ot-counter">
                                        <div>
                                            <span class="num">{{ counter }}</span>
                                            <span class="ps-1">+</span>
                                        </div>
                                        <h6>
                                            ACTIVE CLIENTS
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <div class=" text-center ">
                                    <div class="ot-counter">
                                        <div>
                                            <span class="num">850</span>
                                            <span class="ps-1">+</span>
                                        </div>
                                        <h6>
                                            PROJECTS DONE
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <div class=" text-center ">
                                    <div class="ot-counter">
                                        <div>
                                            <span class="num">25</span>
                                            <span class="ps-1">+</span>
                                        </div>
                                        <h6>
                                            TEAM ADVISORS
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <div class=" text-center ">
                                    <div class="ot-counter">
                                        <div>
                                            <span class="num">10</span>
                                            <span class="ps-1">+</span>
                                        </div>
                                        <h6>
                                            GLORIOUS YEARS
                                        </h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="project-intro-div">
                        <div class="text-center ">
                            <div class=" pb-3 ">
                                <span class="font-clr-blue  about ">// LATEST CASE STUDIES</span>
                                <h2 class=" fw-weight-800 partner font-h2 ">Introduce Our Projects
                                </h2>
                                <p>Software development outsourcing is just a tool to achieve business goals. But there is
                                    no way
                                    to get worthwhile results without cooperation and trust between a client company.</p>
                            </div>
                        </div>


                    </div>
                    <div class="pb-5">
                        <div class=" pb-5 ">
                            <ul class="project-filter list-unstyled ">
                                <li><a href="#" class="selected"> All </a></li>
                                <li><a href="#"> Design </a></li>
                                <li><a href="#"> Development </a></li>
                                <li><a href="#"> Ideas </a></li>
                                <li><a href="#"> Technology </a></li>
                            </ul>
                        </div>
                        <div class="py-5 ">
                            <div class=" text-end d-flex align-items-center justify-content-center h-100 ">
                                <button type="button" class="btn btn-primary all-project-btn">
                                    ALL SERVICES
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="improve-div">
                    <div class=" container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4 ">
                                <div class=" pb-3 ">
                                    <span class="text-white  about  ">// LATEST CASE STUDIES</span>
                                    <h2 class=" fw-weight-800 text-white  pb-3 partner font-h2 ">Improve and Innovate <br>
                                        with the Tech Trends
                                    </h2>
                                    <p class=" text-white">Our team can assist you in transforming your business through
                                        latest tech
                                        capabilities to stay ahead of the curve.
                                    </p>
                                </div>
                                <div>
                                    <ul class=" list-unstyled  ">
                                        <li class=" fw-bold text-white "><span class="list-items"><i
                                                    class="ri-check-line fs-3 checked-icon"></i></span>Over 2
                                            Bilions Unique Data
                                            Collections</li>
                                        <li class=" fw-bold text-white "><span class="list-items"><i
                                                    class="ri-check-line fs-3 checked-icon"></i></span>Analys
                                            Data
                                            By Experts</li>
                                        <li class=" fw-bold text-white "><span class="list-items"><i
                                                    class="ri-check-line fs-3 checked-icon"></i></span>Easy to
                                            Import & Export Data
                                        </li>
                                        <li class=" fw-bold text-white "><span class="list-items"><i
                                                    class="ri-check-line fs-3 checked-icon"></i></span>Intergate
                                            With Popular
                                            Softwares</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4">
                                <div class="row">
                                    <div class=" col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div class=" mb-4">
                                            <div class="card deliver-cards">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <i class="ri-mac-fill deliver-icons "></i>
                                                    </div>

                                                    <h5>WEB</h5>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div class=" col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div class=" mb-4">
                                            <div class="card deliver-cards">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <i class="ri-mac-fill deliver-icons "></i>
                                                    </div>

                                                    <h5>ANDROID</h5>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div class=" col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div class=" mb-4">
                                            <div class="card deliver-cards">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <i class="ri-mac-fill deliver-icons "></i>
                                                    </div>

                                                    <h5>IOS</h5>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div class=" col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div class=" mb-4">
                                            <div class="card deliver-cards">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <i class="ri-mac-fill deliver-icons "></i>
                                                    </div>

                                                    <h5>IOT</h5>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div class=" col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div class=" mb-4">
                                            <div class="card deliver-cards">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <i class="ri-mac-fill deliver-icons "></i>
                                                    </div>

                                                    <h5>WEARALABLE</h5>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div class=" col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div class=" mb-4">
                                            <div class="card deliver-cards">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <i class="ri-mac-fill deliver-icons "></i>
                                                    </div>

                                                    <h5>TV</h5>
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
                <div class="latest-news-div">
                    <div class=" container ">
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class=" pb-3 ">
                                        <span class="font-clr-blue  about ">// OUR RECENT NEWS</span>
                                        <h2 class="font-clr-blue fw-weight-800 partner font-h2 ">Read Our Latest News
                                        </h2>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class=" text-end d-flex align-items-end justify-content-end h-100 ">
                                        <button type="button" class="btn btn-primary all-service-btn">
                                            ALL NEWS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="down-cards-div">
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div class=" card down-cards">
                                        <span class="uncategorized">
                                            <a href="" class=" text-decoration-none ">UNCATEGORIZED</a>
                                        </span>
                                        <div class=" d-flex  mb-2">
                                            <span class="font-clr-blue news-date">_JULY 6,2023</span>
                                            <span class="ms-2 font-clr-blue news-name">Rambabu</span>
                                        </div>
                                        <h3 class="entry-title">
                                            <a href="#" class=" domains-line ">DevOps & Infra <br> Management</a>
                                        </h3>
                                        <div class="learn-absolute  ">
                                            <a href="#" class="learn font-clr-org text-decoration-none fw-bold  "><i
                                                    class="bi bi-arrow-right fw-bold mb-2  "></i>
                                                <span class="learn-hover  ">LEARN MORE</span></a>
                                        </div>


                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div class=" card down-cards">
                                        <span class="uncategorized">
                                            <a href="" class=" text-decoration-none ">UNCATEGORIZED</a>
                                        </span>
                                        <div class=" d-flex  mb-2">
                                            <span class="font-clr-blue news-date">_JULY 6,2023</span>
                                            <span class="ms-2 font-clr-blue news-name">Rambabu</span>
                                        </div>
                                        <h3 class="entry-title">
                                            <a href="#" class=" domains-line ">Hello world!</a>
                                        </h3>
                                        <div class="learn-absolute  ">
                                            <a href="#" class="learn font-clr-org text-decoration-none fw-bold  "><i
                                                    class="bi bi-arrow-right fw-bold mb-2  "></i>
                                                <span class="learn-hover  ">LEARN MORE</span></a>
                                        </div>


                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div class=" card down-cards">
                                        <span class="uncategorized">
                                            <a href="" class=" text-decoration-none ">UNCATEGORIZED</a>
                                        </span>
                                        <div class=" d-flex  mb-2">
                                            <span class="font-clr-blue news-date">_JULY 6,2023</span>
                                            <span class="ms-2 font-clr-blue news-name">Rambabu</span>
                                        </div>
                                        <h3 class="entry-title">
                                            <a href="#" class=" domains-line ">Hello world!</a>
                                        </h3>
                                        <div class="learn-absolute  ">
                                            <a href="#" class="learn font-clr-org text-decoration-none fw-bold  "><i
                                                    class="bi bi-arrow-right fw-bold mb-2  "></i>
                                                <span class="learn-hover  ">LEARN MORE</span></a>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </div>
        <div class="mt-5">
            <footer-design></footer-design>
        </div>
    </div>
</template>
<script>
import NavigationsRoute from '../Navigation/NavigationsRoute.vue';
import FooterDesign from "../FooterDesign.vue";

export default {
    name: "HomePage",
    data() {
        return {
            counter: 0,
            targetValue: 330,
            animationDuration: 2000,
            loading: false,
        }

    },
    components: {
        NavigationsRoute,
        FooterDesign,

    },
    mounted() {
        let currentCount = 0;
        const increment = Math.ceil(this.targetValue / (this.animationDuration / 100));
        const timer = setInterval(() => {
            if (currentCount + increment >= this.targetValue) {
                clearInterval(timer);
                this.counter = this.targetValue;
            } else {
                currentCount += increment;
                this.counter = currentCount;
            }
        }, 300);
        this.simulateLoading();
    },
    methods: {
        simulateLoading() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 800);
        }
    },


}
</script>
<style scoped>
@media (min-width: 320px) and (max-width: 767px) {
    .carousel-caption {
        top: 0px !important;

    }

}

@media (min-width: 768px) and (max-width: 992px) {
    .carousel-caption {
        top: 15px !important;
    }

    .main-head-para {
        font-size: 10px;
    }
}

@media (min-width: 992px) and (max-width: 1198px) {
    .carousel-caption {
        top: 50px !important;

    }


}

.learn-hover {
    margin-left: 5px;
}

.learn:hover .learn-hover {
    margin-left: 0px !important;
    transition: all 0.5s ease;
}

.news-date {
    text-transform: capitalize;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 14px;
}

.news-name {
    font-weight: 600;
    font-size: 14px;
}

.entry-title {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin-bottom: 20px;
}

.entry-title a {
    color: #1b1d21;
}

.uncategorized {
    position: absolute;
    top: -18px;
}

.uncategorized a {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1;
    display: inline-block;
    color: #fff;
    padding: 10px;
    margin-right: 6px;
    background-color: orangered;
}

.down-cards {
    padding: 35px;
    position: relative;
    border-radius: 0;
    transition: all 0.3s linear;
    border: 1px solid #e7e7e7;
    height: 100%;

}

.entry-title .domains-line {
    text-decoration: none;
    transition: all 0.3s linear;

}

.down-cards:hover {
    border: 1px solid #e7e7e700;
    box-shadow: 15px 15px 38px 0px rgba(0, 0, 0, 0.1);
}

.entry-title:hover .domains-line {
    text-decoration: underline;

}

.news-date {
    transition: all 0.3s linear;

}

.news-name {
    transition: all 0.3s linear;

}

.news-date:hover {
    color: orangered !important;
}

.news-name:hover {
    color: orangered !important;
}

.latest-news-div {
    padding: 110px 0px 110px 0px;
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
    color: #FFFFFF;
}

.improve-div {
    background-image: url(../../assets/bg-s1-home4.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 123px 0px 123px 0px;

}

.list-items {
    padding-right: 15px;
}

.checked-icon {
    color: #E53935;
    transition: color 0.3s;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
}

.all-project-btn {

    font-size: 14px;
    padding: 14px 30px 14px 30px;
    line-height: 1.42857143;
    display: inline-block;
    margin-bottom: 0;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    vertical-align: middle;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    color: #fff !important;
    outline: none;
    background-color: orangered;
    transition: all 0.3s ease;
    border-radius: 0;
}

.all-project-btn:hover {
    background-color: #0E314C;

}

.project-filter {
    position: relative;
    width: 100%;
    text-align: center !important;
    margin-bottom: 30px;
    padding-left: 0;
}

.project-filter li {
    display: inline !important;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 5px;
}

.project-filter li a {
    position: relative;
    display: inline-block;
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    text-align: center !important;
    outline: none;
    color: #0E314C !important;
    padding-bottom: 10px;
    transition: all 0.3s linear;
    text-decoration: none;
}

.project-filter li a::after {
    position: absolute;
    height: 3px;
    width: 0%;
    right: 0px;
    bottom: 0px;
    background: #0e314c;
    content: "";
    display: block;
    border-radius: 1.5px;
    -webkit-border-radius: 1.5px;
    -moz-border-radius: 1.5px;
    transition: all 0.3s ease;
}

.project-filter li a.selected::after {
    opacity: 1;
    left: 0;
    right: auto;
    width: 100%;
}

.project-filter li a:hover:after,
.project-filter li {
    opacity: 1;
    left: 0;
    right: auto;
    width: 100%;
}

.project-intro-div {
    padding: 110px 0px 0px 0px;
}

.project-intro-div p {
    color: #6d6d6d;
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
    line-height: 1.875;
    font-weight: 400;
    padding: 0px 0px 30px 0px;
}

.ot-counter span {
    font-size: 48px;
    line-height: 1;
    color: #FFFFFF;
    padding-left: 20px;
    font-weight: 800;
    display: inline-block;
    text-align: left;
}

.ot-counter h6 {
    font-family: "Nunito Sans", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 13px;
    margin-bottom: 0;
    padding-left: 20px;
    letter-spacing: 1px;
    display: inline-block;
    position: relative;
}

.ot-counter h6::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    left: 0;
    top: 50%;
    margin-top: -4px;
    color: #FFFFFF;
    background-color: #FFFFFF;
    border-radius: 50%;
}

.counting-div {
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin-top: -125px;
    margin-bottom: 0px;
    padding: 82px 60px 82px 60px;
    background-color: transparent;
    background-image: linear-gradient(90deg, #EE4326 0%, #0E314C 100%);
}

.square-top {
    width: 50px;
    height: 50px;
    background-color: orangered;
    position: absolute;
    transform: rotate(45deg);
    opacity: 0;
    right: -40px;
    top: -40px;
    transition: all 0.3s linear;

}

.service-two-cards span i {
    font-size: 50px;
    transition: all 0.3s linear;

}

.service-two-cards p {
    color: #6d6d6d;
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
    line-height: 1.875;
    font-weight: 400;
}

.service-two-cards {
    padding: 40px 45px;
    position: relative;
    overflow: hidden;
    border: none;
    border-radius: 0;
    transition: all 0.3s linear;
}

.service-two-cards:hover {
    background: transparent !important;
    box-shadow: 15px 15px 38px 0 rgba(0, 0, 0, 0.1);
}

.service-two-cards:hover .square-top {
    opacity: 1;
    right: -30px;
    top: -30px;
}

.service-two-cards:hover span {
    color: orangered;
}

.all-service-btn {
    font-size: 14px;
    padding: 14px 30px 14px 30px;
    line-height: 1.42857143;
    display: inline-block;
    margin-bottom: 0;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    vertical-align: middle;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    color: #fff !important;
    outline: none;
    background-color: #0E314C;
    transition: all 0.3s ease;
    border-radius: 0;
}

.all-service-btn:hover {
    background-color: orangered;
    border: none;
}

.service-wide {
    padding: 110px 0px 205px 0px;
    position: relative;
    background-image: url(../../assets/bg-art3-home4.png);
    background-repeat: no-repeat;
    opacity: 1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

.wide-div {
    background-image: url(../../assets/bg-art3-home4.png);
    background-position: bottom right;
    background-repeat: no-repeat;
    opacity: 1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
}

.hotel-img-div {
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 45px 0px 45px 0px;
}

.hotel-logos {
    height: auto;
    max-width: 100%;
    filter: contrast(0%);
    opacity: 0.7;
    transition: all 0.3s linear;

}

.img-div {
    height: 100%;
}

.hotel-logos:hover {
    filter: none;
    opacity: 1;

}

.icon-desk {
    position: absolute;
    right: 10px;
    top: 10px;
}

.service-circle {
    border-radius: 50%;
    background-color: orangered;
    position: absolute;
    top: -88px;
    right: -88px;
    width: 188px;
    height: 188px;
}

.service-cards li.active {
    background: #325A78;
}

.service-cards li:hover {
    color: orangered;
    padding: 0 20px;
    background: #325A78;

}

.service-cards li:hover .slash-effect {
    opacity: 1;
}

.service-cards li.active {
    color: orangered;
    padding: 0 20px;
}

.service-cards li.active .slash-effect {
    opacity: 1;

}

.service-cards ul li {

    line-height: 40px;
    position: relative;
    color: #FFFFFF;
    transition: all 0.3s linear;
}

.service-cards {
    overflow: hidden;
    position: relative;
    padding: 40px 40px 35px;
    background: #fff;
    transition: all 0.3s linear;
    border: 1px solid #46416B;
    border-radius: 0;
}

.service-cards:hover {
    transform: translateY(-8px);
}

.slash-effect {
    opacity: 0;
}

.service-p-tag {
    color: #E7E8E9;
}

.cus-service-tag {
    font-size: 22px;
    line-height: 36px;
    font-weight: bold;
    padding-right: 60px;
    margin-bottom: 10px;
}

.service-tag {
    color: #8E88B8;
}

.offer-div {
    background-color: #0E314c;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 120px 0px 130px 0px;
    background-image: linear-gradient(90deg, rgba(34, 35, 40, 0.63) 0%, rgba(34, 35, 40, 0) 100%);
    opacity: 1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

.element-div {
    width: 100%;
    margin-top: 50px;
    margin-left: 20px;
    padding-bottom: 40px;
}

.video-popup .btn-inner {
    display: inline-block;
    border-radius: 50%;
}

.video-popup a {
    color: #FFFFFF;
    background: #EE4326;
    position: relative;
    width: 65px;
    height: 65px;
    display: inline-block;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    text-align: center;
}

.video-popup a span {
    border-color: #EE4326;
}



.video-popup a i {
    margin-left: 8%;
}

.partner-para {
    color: #6d6d6d;
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
    line-height: 1.875;
    font-weight: 400;
}

.video-div {
    margin-top: -57px;
    margin-left: -7px;
}

.outer {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid orangered;
    animation: example 1.5s infinite;
}

.inner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid orangered;
    animation: example 1.5s infinite;

}

@keyframes example {
    0% {
        scale: 1;
        opacity: 1;
    }



    100% {
        scale: 1.8;
        opacity: 0;
    }
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

.partner-right-bg {
    background-image: url(../../assets/bg-art-2.png);
    background-position: center right;
    background-repeat: no-repeat;
    opacity: 1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    height: 100%;
    width: 100%;
    position: absolute;
}

.your-partner-one {
    background-image: url(../../assets/bg-art-home4.png);
    background-position: bottom left;
    background-repeat: no-repeat;

}

.client-single-card {
    background: #fff;
    padding: 40px;
    margin-bottom: 40px;
    box-shadow: 15px 15px 38px 0 rgba(0, 0, 0, 0.1);
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

.card-para-latter {
    color: #6d6d6d;
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
    line-height: 1.875;
    font-weight: 400;
}

.card-text-head {
    font-weight: 800;
    margin-bottom: 15px;
}

.letter-cards {
    padding: 55px 0px 0px 0px;
}

.letter-cards-div2 {
    padding: 20px 0px 0px 0px;
}

.control-prev-top {
    height: 100px;
    width: 2%;
    top: 50%;
    border: 1px solid white;
    font-size: 23px;
    color: #fff;
    display: block;
    text-align: center;
    opacity: 0;
    transition: opacity .15s ease;
}

.control-next-top {
    height: 100px;
    width: 2%;
    top: 50%;
    border: 1px solid white;
    font-size: 23px;
    color: #fff;
    display: block;
    text-align: center;
    opacity: 0;
    transition: opacity .15s ease;

}

.control-next-top:hover {
    background-color: orangered;
    border: none;
    opacity: 1;
}

.control-prev-top:hover {
    background-color: orangered;
    border: none;
    opacity: 1;
}

.carousel-caption {
    position: absolute;
    top: 200px;

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
}

.main-heading-smart {
    text-align: left;
    line-height: 30px;
    letter-spacing: 0px;
    font-weight: 900;
    font-size: 30px;
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
    transform: translate(0px, 0px);
    visibility: visible;
    border-width: 0px;
    border-radius: 0px;
}
</style>
