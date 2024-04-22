<template>
  <div class="top-div">
    <div class="container-fluid">
      <div class="d-flex justify-content-between">
        <div class="mt-1">
          <a href="#" class="text-decoration-none font-clr-blue fw-bold">in</a>
        </div>
        <div class="mb-0 mt-1">
          <ul class="d-inline-flex list-unstyled gap-5 mb-0">
            <li class="d-flex">
              <i class="bi bi-telephone-fill d-flex align-items-center me-2"></i>+1 (855) 9693770
            </li>
            <li class="d-flex">
              <i class="bi bi-telephone-fill d-flex align-items-center me-2"></i>
              +91 40 3516 9799
            </li>
            <li class="d-flex">
              <i class="bi bi-telephone-fill d-flex align-items-center me-2"></i>info@caratred.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="main-section">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" class="navbar-brand"><img src="../../assets/Logofinal.jpg" alt="logo"
            class=" img-fluid logo " /></router-link>
        <div>
          <span class="me-3 navbar-toggler border-0">
            <i class="ri-search-line fs-3"></i>
          </span>
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight" aria-expanded="false" aria-controls="offcanvasRight">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn btn-white" data-bs-dismiss="offcanvas" aria-label="Close">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div class="offcanvas-body">
            <div class="navbar-collapse" id="offcanvasRight">
              <div class="offcanvas-body canvasbody">
                <ul class="navbar-nav text-nowrap">
                  <li class="nav-item" :class="{
                    'nav-item': true,
                    active: isChildRouteActive([
                      '/HomePage',
                      '/ItAgency',
                      '/softwarecompany',
                      '/WebDevelopment',
                      '/startuphome',
                      '/DatasciencePage',
                      '/SaasApp',
                      '/helpdesk',
                    ]),
                  }">
                    <div class="nav-link">
                      <div class="dropdown">
                        <router-link to="/" exact :class="{
                          'route-link': true,
                          'active-link': $route.path === '/HomePage'
                        }" class="text-decoration-none route-link font-clr-blue"><button
                            :class="{ 'route-link': true, 'active-link': $route.path === '/HomePage' || $route.path === '/ItAgency' || $route.path === '/softwarecompany' || $route.path === '/WebDevelopment' || $route.path === '/startuphome' || $route.path === '/DatasciencePage' || $route.path === '/SaasApplanding' || $route.path === '/helpdesk' }"
                            class="dropbtn font-clr-blue dropdown-toggle">
                            Home
                          </button></router-link>
                        <div class="dropdown-content">
                          <ul class="list-unstyled">
                            <li exact :class="{ active: $route.path === '/HomePage' }">
                              <router-link to="/HomePage" exact :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/HomePage'
                              }" class="clr-hover"><span class="slash-effect">//</span> Main
                                Home</router-link>
                            </li>
                            <li :class="{ active: $route.path === '/HomePage' }">
                              <router-link to="/ItAgency" :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/ItAgency',
                              }" class="clr-hover"><span class="slash-effect">//</span> IT
                                Agency</router-link>
                            </li>
                            <li :class="{ active: $route.path === '/HomePage' }">
                              <router-link to="/softwarecompany" :class="{
                                'clr-hover': true,
                                'active-link':
                                  $route.path === '/softwarecompany',
                              }" class="clr-hover"><span class="slash-effect">//</span> Software
                                Company</router-link>
                            </li>
                            <li :class="{
                              active: $route.path === '/WebDevelopment'
                            }">
                              <router-link to="/WebDevelopment" :class="{
                                'clr-hover': true,
                                'active-link':
                                  $route.path === '/WebDevelopment'
                              }" class="clr-hover"><span class="slash-effect">//</span> Web
                                Development</router-link>
                            </li>
                            <li :class="{ active: $route.path === '/HomePage' }">
                              <router-link to="/startuphome" :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/startuphome'
                              }" class="clr-hover"><span class="slash-effect">//</span> Startup
                                Home</router-link>
                            </li>
                            <li :class="{ active: $route.path === '/HomePage' }">
                              <router-link to="/DatasciencePage" :class="{
                                'clr-hover': true,
                                'active-link':
                                  $route.path === '/DatasciencePage'
                              }" class="clr-hover"><span class="slash-effect">//</span> Data
                                Science</router-link>
                            </li>
                            <li :class="{ active: $route.path === '/HomePage' }">
                              <router-link to="/SaasApplanding" :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/SaasApplanding',
                              }" class="clr-hover"><span class="slash-effect">//</span> SaaS App
                                Landing</router-link>
                            </li>
                            <li :class="{ active: $route.path === '/HomePage' }">
                              <router-link to="helpdesk" :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/helpdesk'
                              }" class="clr-hover"><span class="slash-effect">//</span> Help
                                Desk</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item" :class="{
                    'nav-item': true,
                    active: isChildRouteActive([
                      '/aboutus',
                      '/whychoose',
                      '/ourteam',
                      '/CeoBiography',
                    ]),
                  }">
                    <div class="nav-link">
                      <div class="dropdown">
                        <router-link to="/aboutus" exact :class="{
                          'route-link': true,
                          'active-link': $route.path === '/aboutus'
                        }" class="text-decoration-none route-link font-clr-blue"><button
                            :class="{ 'route-link': true, 'active-link': $route.path === '/aboutus' || $route.path === '/whychooseus' || $route.path === '/ourteam' || $route.path === '/CeoBiography' }"
                            class="dropbtn font-clr-blue dropdown-toggle">
                            About us
                          </button></router-link>
                        <div class="dropdown-content">
                          <ul class="list-unstyled">
                            <li exact :class="{ active: $route.path === '/aboutus' }">
                              <router-link to="/aboutus" exact :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/aboutus',
                              }" class="clr-hover"><span class="slash-effect">//</span> About
                                Us</router-link>
                            </li>
                            <li exact :class="{
                              active: $route.path === '/whychooseus',
                            }">
                              <router-link to="/whychooseus" exact :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/whychooseus',
                              }" class="clr-hover"><span class="slash-effect">//</span> Why Choose
                                Us</router-link>
                            </li>
                            <li exact :class="{ active: $route.path === '/ourteam' }">
                              <router-link to="ourteam" exact :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/ourteam',
                              }" class="clr-hover"><span class="slash-effect">//</span> Our
                                Team</router-link>
                            </li>
                            <li exact :class="{
                              active: $route.path === '/CeoBiography',
                            }">
                              <router-link to="CeoBiography" exact :class="{
                                'clr-hover': true,
                                'active-link':
                                  $route.path === '/CeoBiography',
                              }" class="clr-hover"><span class="slash-effect">//</span> CEO
                                Biography</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item" :class="{
                    'nav-item': true,
                    active: isChildRouteActive([
                      '/EzyEnvoicing',
                      '/EzySuite',
                      '/ezygst',
                      '/EzyClbs',
                    ]) ||
                      $route.path === '/productpage',
                  }">
                    <div class="nav-link">
                      <div class="dropdown">
                        <router-link to="/productpage" :class="{
                          'route-link': true,
                          'active-link': $route.path === '/productpage'
                        }" class="text-decoration-none route-link font-clr-blue"><button
                            :class="{ 'route-link': true, 'active-link': $route.path === '/productpage' || $route.path === '/EzyEnvoicing' || $route.path === '/EzySuite' || $route.path === '/ezygst' || $route.path === '/EzyClbs' }"
                            class="dropbtn font-clr-blue dropdown-toggle">
                            Products
                          </button></router-link>
                        <div class="dropdown-content">
                          <ul class="list-unstyled">
                            <li :class="{ active: $route.path === '/Products' }">
                              <router-link to="EzyEnvoicing" :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/EzyEnvoicing',
                              }" class="clr-hover"><span class="slash-effect">//</span> Ezy
                                Invoicing
                              </router-link>
                            </li>
                            <li :class="{ active: $route.path === '/Products' }">
                              <router-link to="/EzySuite" :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/EzySuite',
                              }" class="clr-hover"><span class="slash-effect">//</span> Ezy
                                Suite
                              </router-link>
                            </li>
                            <li :class="{ active: $route.path === '/Products' }">
                              <router-link to="/ezygst" :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/ezygst',
                              }" class="clr-hover"><span class="slash-effect">//</span> Ezy Gst
                              </router-link>
                            </li>
                            <li :class="{ active: $route.path === '/Products' }">
                              <router-link to="/EzyClbs" :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/EzyClbs',
                              }" class="clr-hover"><span class="slash-effect">//</span> Ezy
                                CLBS
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item" :class="{
                    'nav-item': true,
                    active: isChildRouteActive([
                      '/ErpSolution',
                      '/roboticautomations',
                      '/devopsinfra',
                      '/IntroductionPage',
                      '/domains',
                      '/ModulePage',
                      '/benefits'
                    ]) ||
                      $route.path === '/servicespage',

                  }">
                    <div class="nav-link">
                      <div class="dropdown">
                        <router-link to="/servicespage" :class="{
                          'route-link': true,
                          'active-link': $route.path === '/servicespage',
                        }" class="text-decoration-none route-link font-clr-blue">
                          <button :class="{
                            'route-link': true,
                            'active-link': $route.path === '/servicespage' ||
                              $route.path === '/ErpSolution' || $route.path === '/roboticautomations' || $route.path === '/devopsinfra' || $route.path === '/IntroductionPage' || $route.path === '/domains' || $route.path === '/ModulePage' || $route.path === '/benefits',
                          }" class="dropbtn font-clr-blue dropdown-toggle">
                            Services
                          </button></router-link>
                        <div class="dropdown-content">
                          <ul class="list-unstyled">
                            <li class="solution" exact :class="{
                              active: $route.path === '/ErpSolution'
                            }">
                              <router-link to="ErpSolution" exact :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/ErpSolution' || $route.path === '/IntroductionPage' || $route.path === '/domains' || $route.path === '/ModulePage' || $route.path === '/benefits',
                              }" class="clr-hover"><span class="slash-effect">//</span> ERP
                                Solution for SME
                              </router-link>
                              <div class="second-drp">
                                <ul class="list-unstyled font-clr-blue">
                                  <li :class="{
                                    active: $route.path === '/IntroductionPage'
                                  }">
                                    <router-link to="/IntroductionPage" :class="{
                                      'clr-hover': true,
                                      'active-link':
                                        $route.path === '/IntroductionPage',
                                    }" class="clr-hover"><span class="slash-effect">//</span>
                                      Introduction
                                    </router-link>
                                  </li>
                                  <li :class="{
                                    active: $route.path === '/domains'
                                  }">
                                    <router-link to="/domains" :class="{
                                      'clr-hover': true,
                                      'active-link':
                                        $route.path === '/domains'
                                    }" class="clr-hover"><span class="slash-effect">//</span>
                                      Domains
                                    </router-link>
                                  </li>
                                  <li :class="{
                                    active: $route.path === '/ModulePage'
                                  }">
                                    <router-link to="/ModulePage" :class="{
                                      'clr-hover': true,
                                      'active-link':
                                        $route.path === '/ModulePage'
                                    }" class="clr-hover"><span class="slash-effect">//</span>
                                      Modules
                                    </router-link>
                                  </li>
                                  <li :class="{
                                    active: $route.path === '/benefits'
                                  }">
                                    <router-link to="/benefits" :class="{
                                      'clr-hover': true,
                                      'active-link':
                                        $route.path === '/benefits'
                                    }" class="clr-hover"><span class="slash-effect">//</span>
                                      Benefits
                                    </router-link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li :class="{
                              active: $route.path === '/servicespage',
                            }">
                              <router-link to="/roboticautomations" :class="{
                                'clr-hover': true,
                                'active-link':
                                  $route.path === '/roboticautomations',
                              }" class="clr-hover"><span class="slash-effect">//</span> Robotic
                                Process Automations
                              </router-link>
                            </li>
                            <li :class="{
                              active: $route.path === '/servicespage',
                            }">
                              <router-link to="/devopsinfra" :class="{
                                'clr-hover': true,
                                'active-link': $route.path === '/devopsinfra',
                              }" class="clr-hover"><span class="slash-effect">//</span> DevOps &
                                Infra Management
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item" :class="{
                    'nav-item': true,
                    active: $route.path === '/CareersPage',
                  }">
                    <div class="nav-link" href="#">
                      <div class="dropdown">
                        <router-link to="/CareersPage" exact :class="{
                          'route-link': true,
                          'active-link': $route.path === '/CareersPage',
                        }" class="text-decoration-none route-link font-clr-blue">
                          <button :class="{
                            'route-link': true,
                            'active-link': $route.path === '/CareersPage',
                          }" class="dropbtn font-clr-blue">
                            Careers
                          </button></router-link>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item" :class="{
                    'nav-item': true,
                    active: $route.path === '/ContactUs',
                  }">
                    <div class="nav-link" href="#">
                      <div class="dropdown">
                        <router-link to="/ContactUs" exact :class="{
                          'route-link': true,
                          'active-link': $route.path === '/ContactUs',
                        }" class="text-decoration-none route-link font-clr-blue">
                          <button :class="{
                            'route-link': true,
                            'active-link': $route.path === '/ContactUs',
                          }" class="dropbtn font-clr-blue">
                            Contacts Us
                          </button></router-link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button class="btn btn-white fs-3 leftcanvas" type="button" data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                      <i class="bi bi-grid"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <router-link to="/ContactUs"> <button class="btn btn1 text-white" type="button">
                  GET IN TOUCH
                </button></router-link>
            </div>
          </div>
        </div>
      </nav>
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <div class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <img src="../../assets/Logofinal.jpg" alt="image" />
          </div>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <p class="side-canvas-p">
            Over 5+ years we help companies reach their financial and branding
            goals. Engitech is a values-driven technology agency dedicated.
          </p>
          <h4>Conatacts</h4>
          <div>

            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <div class="d-flex justify-content-center align-items-center h-100">
                  <span>
                    <i class="bi bi-geo-alt-fill"></i>
                  </span>
                </div>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10">
                <p>
                  2055 Limestone Rd STE 200-C, Wilmington, DE, New Castle, US,
                  19808<br />
                  305-307, Block-2, White House, SP Road, Kundan Bagh, Hyderabad
                  - 500018
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <div class="d-flex justify-content-center align-items-center h-100">
                  <span>
                    <i class="bi bi-envelope-fill"></i>
                  </span>
                </div>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10">
                <p>info@caratred.com</p>
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <div class="d-flex justify-content-center align-items-center h-100">
                  <span>
                    <i class="bi bi-telephone-fill"></i>
                  </span>
                </div>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10">
                <p>+1 (855) 969 3770</p>
                <p>+91 40 3516 9799</p>
              </div>
            </div>
          </div>
          <div>
            <span>
              <i class="bi bi-linkedin fs-4 font-clr-blue linked-in"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="mainline">
      <div class="innerline w-0" :style="{ width: innerlineWidth }"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      innerlineWidth: '0',
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      this.innerlineWidth = scrollPercentage + '%';
    },
    isChildRouteActive(childRoutes) {
      return childRoutes.some((route) => this.$route.path.startsWith(route));
    },
  },

};
</script>
<style scoped>
.mainline {
  width: 100%;
  height: 0.18rem;
  left: 0;
  bottom: 0;
  position: absolute;
  border: 0 solid #e5e7eb;
  background-color: #fff;
  opacity: 0.5;
}

.innerline {
  background-image: linear-gradient(90deg, rgb(253, 142, 101), red);
  background-size: 100vw !important;
  height: 100%;
  width: 0%;
  transition: width 0.3s ease;

}

@keyframes scrolln {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 991px) {
  .main-section {
    height: 75px !important;
  }
}

@media (max-width: 768px) {

  .dropdown-content {
    position: relative !important;
    top: 0 !important;
    left: 0 !important;

  }

  .second-drp {
    left: 80px !important;
    top: 35px !important;

  }
}



.side-canvas-p {
  color: #6d6d6d;
  padding: 0px 0px 20px 0px;
  margin: 0 0 20px;
}

.main-section {
  height: 95px;
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 4px 4px 30px 0px rgba(42, 67, 113, 0.15);
  z-index: 10 !important;
  font-family: "Nunito Sans", sans-serif !important;
}

.dropbtn {
  padding: 27px 25px 26px 5px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  font-weight: bold;
}

.nav-link::after {
  content: "";
  display: block;
  height: 3px;
  width: 100%;
  background-color: orangered;
  transform: scaleX(0);
  transition: transform 0.5s ease;
  transform-origin: left;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.dropdown {
  position: relative;
  display: inline-block;
  transition: all 0.3s ease-in-out;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 280px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 80px;
  transition: all 0.3s ease-in-out;
  opacity: 0;

}

.dropdown-content li a {
  color: #0e314c;
  padding: 10px 14px 3px 35px;
  text-decoration: none;
  display: block;
  background-color: white;
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
  text-align: left;
  transition: all 0.3s linear;
}

.nav-item:hover .dropdown-content {
  display: block !important;
  opacity: 1 !important;

}

.second-drp {
  display: none;
  position: absolute;
  min-width: 260px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transition: all 5s ease-in-out;
  top: 0;
  background-color: #ffffff;
  left: 260px;
  min-width: 260px;
}

.second-drp li {
  color: #0e314c;
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
  text-align: left;
  transition: all 0.3s linear;
}

.second-drp ul .li:hover {
  color: orangered;
}

.solution {
  transition: all 5s ease;
}

.solution:hover .second-drp {
  display: block;
  transition: all 5s ease;
}

.nav-item:hover .route-link .dropbtn {
  color: orangered !important;
}

.btn1 {
  background: orangered;
  transition: all 0.3s linear;
  border-radius: 0px;
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
  color: #fff;
  outline: none;
}

.btn1:hover {
  background-color: #0e314c;
}

.navbar-collapse {
  justify-content: space-evenly;
}

.leftcanvas {
  border: 0;
  padding: 20px 10px 10px 10px;


}

.leftcanvas:focus {
  border: 0;
}

.clr-hover:hover {
  color: orangered !important;
}

.slash-effect {
  opacity: 0;
  width: 14px;
  transition: all 0.5s ease;
}

.clr-hover:hover .slash-effect {
  opacity: 1;
  padding-left: 10px;
}

.top-div {
  height: 30px;
  background-color: #e7e8e9;
  font-size: 14px;
}

@media (max-width: 992px) {
  .top-div {
    display: none;
  }
}

@media (min-width: 320px) and (max-width: 1024px) {


  .dropbtn {
    padding: 7px 10px 7px 10px;
  }

  .leftcanvas {
    display: none;
  }



}


@media (min-width: 992px) and (max-width: 1290px) {
  .btn1 {
    padding: 10px 25px 10px 25px;

  }

  .dropbtn {
    padding: 26px 5px 26px 3px;
  }
}



.active {
  color: orangered !important;
}

.active .active-link {
  color: orangered !important;
}

.active-link .slash-effect {
  opacity: 1;
  padding-left: 10px;
}

.active .nav-link::after {
  color: orangered;
  transform: scale(1) !important;
}

.active .bropbtn {
  color: orangered !important;
}
</style>