<template>
    <div v-if="loading" class="laoding-div-main ">
        <div class="spinner-grow "></div>
    </div>
    <div v-if="!loading" class="loading-div">
        <Navigations-route></Navigations-route>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex">
                            <div>
                                <span class="icon-div me-3 "><i class="bi bi-envelope-fill icons"></i></span>
                            </div>
                            <div class="heading-div text-secondary">
                                <h6 class="heading fw-bold mt-2">Mail Here</h6>
                                <ul class=" list-unstyled lh-lg ">
                                    <li>info@caratred.com</li>
                                    <li>hr@caratred.com</li>
                                    <li>sales@caratred.com</li>
                                </ul>
                            </div>
                        </div>

                        <div class="d-flex">
                            <div>
                                <span class="icon-div me-3 "><i class="bi bi-globe icons"></i></span>
                            </div>
                            <div class="heading-div text-secondary">
                                <h6 class="heading fw-bold mt-2">Visit Here</h6>
                                <ul class=" list-unstyled lh-lg ">
                                    <li>2055 Limestone Rd STE 200-C, Wilmington, DE, New</li>
                                    <li>Castle, US, 19808</li><br>
                                    <li>305-307, Block 2, White House, SP Road, Kundan Bagh,<br> Hyderabad - 500018</li>
                                </ul>
                            </div>
                        </div>

                        <div class="d-flex">
                            <div>
                                <span class="icon-div me-3 "><i class="bi bi-telephone-fill icons"></i></span>
                            </div>
                            <div class="heading-div text-secondary">
                                <h6 class="heading fw-bold mt-2">Call Here</h6>
                                <ul class=" list-unstyled lh-lg ">
                                    <li>+1 (855) 969 3770</li>
                                    <li>+91 40 3516 9799</li><br>
                                </ul>
                            </div>
                        </div>
                        <p class=" text-secondary">Give us a call or drop by anytime, we endeavour to answer all
                            enquiries<br>
                            within 24 hours on
                            business days. We will be happy to answer your questions.</p>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 ">
                        <div class="info-div">
                            <h1 class=" fw-bold ">Ready to Get Started?</h1>
                            <p class="info-paragraph">Your email address will not be published. Required fields are marked *
                            </p>
                            <input class="input w-100 border-0 mb-3" type="text" placeholder="Your Name *"><br>
                            <input class="input w-100 border-0 mb-3" type="text" placeholder="Your Email *">
                            <input class="input-text-area w-100 border-0 mb-3" type="text" placeholder="Message....">
                            <button class="border-0 fw-semibold sent-msg-btn">SENT MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="mapouter mt-4">
                            <div class="gmap_canvas mb-4">
                                <iframe
                                    src="https://maps.google.com/maps?q=white%20house%20begumpet%20hyderabad&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                    frameborder="0" scrolling="no" style="width: 100%; height: 500px;"></iframe>
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
    font-family: "Nunito Sans", Sans-serif;
}

section {
    padding: 100px 0px 0px 0px;
}

.icons {
    font-size: 22px;
    color: #EE4326;
}

.icon-div {
    border: 3px solid #EE4326;
    padding: 10px;
    border-radius: 50%;
}

.heading {
    color: #0E314C;
}

.info-div {
    background-image: linear-gradient(90deg, #ee4326 0%, #0e314c 100%);
    padding: 60px 48px;
    color: white;
}

.info-paragraph {
    font-size: 14px;
}

.input {
    background: rgba(255, 255, 255, 0.3);
    color: white;
    padding: 10px 20px;
    outline: none;
}

.input-text-area {
    background: rgba(255, 255, 255, 0.3);
    color: white;
    padding: 10px 20px 110px;
    outline: none;
}

.sent-msg-btn {
    padding: 14px 30px 14px 30px;
    background-color: white;
    transition: all 0.3s linear;
}

.sent-msg-btn:hover {
    background-color: #0E314C;
    color: white;
}

.input::placeholder {
    color: rgb(248, 233, 233);
}

.input-text-area::placeholder {
    color: rgb(248, 233, 233);
}


.mapouter {
    position: relative;
    background: #fff;
}

.maprouter a {
    color: #fff !important;
    position: absolute !important;
    top: 0 !important;
    z-index: 0 !important;
}

.gmap_canvas {
    overflow: hidden;
}

.gmap_canvas iframe {
    position: relative;
    z-index: 2
}
</style>