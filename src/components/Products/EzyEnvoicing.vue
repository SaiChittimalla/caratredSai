<template>
    <div v-if="loading" class="laoding-div-main ">
        <div class="spinner-grow "></div>
    </div>
    <div v-if="!loading" class="loading-div">
        <Navigations-route></Navigations-route>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="main-heading text-center">
                            <h2 class="main-txt fw-bold ">Most comprehensive software for all your e-Invoicing needs</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="icon-box mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-gear-fill icons"></i></span>
                            <h6 class="fw-bold mt-3 ">Hassle free integration:</h6>
                            <p class="paragraph-clr">Generate invoices directly through any PMS/POS system without modifying
                                existing processes</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="icon-box mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-search icons"></i></span>
                            <h6 class="fw-bold mt-3 ">Customized printing:</h6>
                            <p class="paragraph-clr">to configure custom templates as per your business need to print
                                e-Invoices
                                in a single click
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="icon-box mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-printer-fill icons"></i></span>
                            <h6 class="fw-bold mt-3 ">Hassle free integration:</h6>
                            <p class="paragraph-clr">Generate invoices directly through any PMS/POS system without modifying
                                existing processes</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="icon-box mb-3">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-arrow-left-right icons"></i></span>
                            <h6 class="fw-bold mt-3 ">Reconciliation with GSTR-1:</h6>
                            <p class="paragraph-clr">reconciliation of e-Invoice data with GSTR-1 data to take care of
                                your<br>
                                compliance needs</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="icon-box mb-3">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-cloud-minus-fill icons"></i></span>
                            <h6 class="fw-bold mt-3 ">Cloud or on-premise:</h6>
                            <p class="paragraph-clr">both on cloud or on-premise deployment models as per client convenience
                                <br>compliance needs
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="icon-box mb-3">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-layers icons"></i></span>
                            <h6 class="fw-bold mt-3 ">One click communication:</h6>
                            <p class="paragraph-clr">and Send invoices over email directly to customers the easier you can
                                make
                                it to help them find your invoice</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="main-heading text-center">
                            <h2 class="main-txt fw-bold ">e-Invoice generation process through ezyinvoicing!</h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="text-center">
                            <img class=" img-fluid " src="../../assets/products/Frame-12.svg">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="text-center">
                            <h2 class="main-txt fw-bold ">Why choose us?</h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex why-choose-div">
                            <div><i class="bi bi-shield-shaded heading-txt-icons me-4"></i></div>
                            <div>
                                <h5 class="heading-txt fw-bold mt-2 mb-3">Privacy & Security</h5>
                                <p class=" text-secondary paragraph-txt">with an SSL encryption for all our on cloud
                                    deployments
                                    & also offer 2F Authentication mechanisms</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex why-choose-div">
                            <div><i class="bi bi-telephone-forward-fill heading-txt-icons me-4"></i></div>
                            <div>
                                <h5 class="heading-txt fw-bold mt-2 mb-3">Support</h5>
                                <p class=" text-secondary paragraph-txt">24x7 in-house technical support and advisory
                                    services,
                                    dedicated
                                    key account manager and priority access to NIC</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex why-choose-div">
                            <div><i class="bi bi-shield-shaded heading-txt-icons me-4"></i></div>
                            <div>
                                <h5 class="heading-txt fw-bold mt-2 mb-3">Value for money</h5>
                                <p class=" text-secondary paragraph-txt">Affordable price, high-end product and great value.
                                    No
                                    other
                                    hidden charges</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex why-choose-div">
                            <div><i class="bi bi-lightbulb-fill heading-txt-icons me-4"></i></div>
                            <div>
                                <h5 class="heading-txt fw-bold mt-2 mb-3">Future ready</h5>
                                <p class=" text-secondary paragraph-txt">Allows integrations with multiple third party
                                    systems/partners
                                    to leverage the best out of its friendly RESTFUL API architecture
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex why-choose-div">
                            <div><i class="bi bi-shield-shaded heading-txt-icons me-4"></i></div>
                            <div>
                                <h5 class="heading-txt mt-2 fw-bold mb-3">Tech first</h5>
                                <p class=" text-secondary paragraph-txt">Best-in-class tech first company with deepest
                                    domain
                                    expertise in hospitality</p>
                            </div>
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
import NavigationsRoute from '../Navigation/NavigationsRoute.vue';
import FooterDesign from "../FooterDesign.vue";


export default {
    components: {
        NavigationsRoute,
        FooterDesign,

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

}
</script>
<style scoped>
* {
    font-family: "Montserrat", sans-serif;
}

.main-heading {
    margin: 14px 14px 14px 14px;
    padding: 10px 10px 10px 10px;
}

.main-txt {
    color: #0e314c;
    font-weight: 800;
}

.icon-box {
    border: 1px solid #E7E7E7;
    padding: 40px 45px;
    transition: all 0.3s linear;
}


.icon-box:hover {
    background-color: #0E314C;
    color: white;
}

.paragraph-clr {
    color: #a8a5a5;
    font-size: 15px;
}

.icon-box:hover .paragraph-clr {
    color: white;
}

.icons {
    font-size: 40px;
    color: #0e314c;
    transition: all 0.3s linear;
}

.icon-box:hover .icons {
    color: #ee4326;
}

.why-choose-div {
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 20px 20px 20px 20px;
}

.why-choose-div:hover .heading-txt-icons {
    color: #0e314c;
}

.heading-txt-icons {
    font-size: 40px;
    color: #EE4326;
    transition: all 0.3s linear;
}

.heading-txt {
    color: #0e314c;
}


.paragraph-txt {
    font-size: 14px;
}



.icon-box {
    background: transparent;
    position: relative;
    z-index: 1;
}

.icon-box:hover {
    /* scale: 0.9; */
    transition: (0.9s);
    animation-iteration-count: infinite;
}

.icon-box::before {
    transition: 0.5s ease-in;
    position: absolute;
    top: 0px;
    left: 0%;
    right: 100%;
    bottom: 0px;
    /* border-radius: 12px; */
    content: "";
    background-color: #0e314c;
    color: white;
}

.icon-box:hover::before {
    transition: 0.5s;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
}

.icon-box:hover .empty-div {
    background: #f5480c;
    width: 29px;
    height: 25px;
    position: absolute;
    top: 0px;
    left: 93%;
    border-radius: 0px 0px 0px 30px;
    transition: all 0.30s linear;
}
</style>