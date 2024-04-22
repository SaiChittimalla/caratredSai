<template>
    <div v-if="loading" class="laoding-div-main ">
        <div class="spinner-grow "></div>
    </div>
    <div v-if="!loading" class="loading-div">
        <Navigations-route></Navigations-route>
        <div class="container">
            <div class="main-div">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="bg-img">
                            <div class="d-flex align-items-center justify-content-center">
                                <img class="ceo-img" src="../../assets/ram-sir.png">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="bg-img1">
                            <div class="ceo-details">
                                <h1><strong>Rambabu Talluri</strong></h1>
                                <p class="ceo-role">CEO OF COMPANY</p>
                                <h6 class="mb-3"><strong>Department: </strong> Web Development</h6>
                                <h6 class="experience"><strong>Experience: </strong> 20 Years</h6>

                                <div class="social-media-div">
                                    <span><i class="bi bi-facebook"></i></span>
                                    <button class="border-0 social-media"><i class="bi bi-twitter"></i></button>
                                    <button class="border-0 social-media1">P</button>
                                    <button class="border-0 social-media2"><i class="bi bi-linkedin"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 ">
                    <div>
                        <div class="biography">
                            <h2 class="mb-3 fw-semibold ">Biography</h2>
                            <p class="text-secondary biography-paragraph">A vast majority of the app marketers mainly
                                concentrate on the post-launch
                                app marketing techniques and measures while completely missing on the pre-launch campaign.
                                This
                                prevents the app to create buzz and hype just around the time when the app is launched. As
                                and
                                when you launch the app, already a considerable number of people should expectantly look
                                forward
                                to your app and this requires long-drawn marketing efforts leading up to the app launch
                                event.
                                To create pre-launch buzz and hype about the app a mobile app development company has an
                                array
                                of marketing options like social media campaign, search engine ads, video ads, email
                                campaigns,
                                etc. Apart from online options, you can also reach out to the wider audience with
                                traditional
                                marketing options like</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-ms-12">
                    <div class="mb-4">
                        <h4>Onum Company</h4>
                        <p class="text-secondary">Web Designer, Illustrator</p>
                    </div>
                    <div>
                        <h4>Media Group</h4>
                        <p class="text-secondary">Photographer, UI Designerr</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-ms-12">
                    <div class="mb-4 ">
                        <h4>Torex Company</h4>
                        <p class="text-secondary">Motion Designer, Illustrator</p>
                    </div>
                    <div>
                        <h4>Nimkus 2000</h4>
                        <p class="text-secondary">PHP Developer, Photographer</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="d-flex align-items-center justify-content-center gap-4">
                        <div class="development d-flex align-items-center justify-content-center text-center">
                            <h1> 50%</h1>
                        </div>
                        <div>
                            <h5 class="fw-bold">Mobile Development</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="d-flex align-items-center justify-content-center gap-4">
                        <div class="development d-flex align-items-center justify-content-center ">
                            <h1> 70%</h1>
                        </div>
                        <div>
                            <h5 class="fw-bold">Wearable
                                Development</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 ">
                    <div class="hard-skills">
                        <h2 class="mb-3 fw-semibold ">Hard Skills</h2>
                        <p class="text-secondary biography-paragraph">Just as a retail business in real life is remembered
                            not
                            just for its product offerings but also
                            because of its services, support, and customer-friendliness, an app that offers a helpful
                            customer
                            support system for its valued users enjoy more traction and engagement than other apps. Great
                            brands
                            all over the globe enjoy appreciation and popularity because of their customer-friendly support
                            and
                            services.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="contact-details">
                        <div>
                            <h2 class="fw-bold">Contact Me</h2>
                            <p class="text-secondary">Your email address will not be published. Required fields are marked *
                            </p>
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-12">
                                    <input type="text" class="input-txt me-4 w-100 mb-3" placeholder="Your Name">
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12">
                                    <input type="mail" class="input-txt me-4 w-100 mb-3" placeholder="Your Email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" class="input-txt me-4 mb-3 w-100" placeholder="Website">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" class="input-txt1 me-4 mb-3 w-100" placeholder="Message...">
                                </div>
                            </div>
                            <button class="send-msg">SEND MESSAGE</button>
                        </div>
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
    font-family: "Nunito Sans", sans-serif;
}

.main-div {
    border: 1px solid #E7E7E7;
    margin: 75px 0px 0px 0px;
}

.bg-img {
    background-image: url('../../assets/bg-art-3.png');
    background-repeat: no-repeat;
    background-position: 15px 100%;
}

.bg-img1 {
    background-image: url('../../assets/bg-art-4 (1).png');
    background-position: bottom right;
    background-repeat: no-repeat;
}

.ceo-img {
    padding: 80px 0px 100px 0px;
    border-radius: 50%;
    filter: drop-shadow(2px 4px 6px black);
}

.ceo-details {
    padding: 100px 0px 0px;
    line-height: 23px;
}

.ceo-role {
    color: #0E314C;
    font-size: 14px;
    font-weight: 700;
}

.bi-facebook {
    font-size: 32px;
    color: #4661c5;
}

/* .social-media {
    padding: 7px;
    border-radius: 28px;
    margin: 10px;
} */

.social-media-div {
    padding: 64px 0px 0px 0px;
}

.social-media {
    padding: 8px 13px;
    border-radius: 28px;
    margin: 10px;
    background-color: #44b1e4;
    color: white;
}

.social-media1 {
    padding: 7px 13px;
    border-radius: 28px;
    margin: 10px;
    background-color: #ff2e2e;
    color: white;
}

.social-media2 {
    padding: 7px 13px;
    border-radius: 28px;
    margin: 10px;
    background-color: #0073B0;
    color: white;
}

.biography {
    padding: 70px 0px 0px 0px;
}

.biography-paragraph {
    font-weight: 400;
    line-height: 26px;
    padding: 0px 0px 30px 0px;
}

.development {
    height: 110px;
    width: 130px;
    border: 8px solid #ff2e2e;
    text-align: center;
    border-radius: 50%;
}

.hard-skills {
    padding: 50px 0px 0px 0px;
}

.contact-details {
    padding: 40px 50px;
    border: 1px solid #e7e7e7;
    margin: 0px 0px 70px 0px;
}

.input-txt {
    color: #b5b5b5;
    border: none;
    background: #f6f6f6;
    padding: 13px 20px;
    box-sizing: border-box;
    outline: none;
}

.input-txt1 {
    color: #b5b5b5;
    border: none;
    background: #f6f6f6;
    padding: 13px 20px 110px;
    box-sizing: border-box;
    outline: none;
}

.send-msg {
    background-color: #ee4326;
    font-size: 14px;
    padding: 14px 30px 14px 30px;
    font-weight: bold;
    color: #fff;
    border: none;
    transition: all 0.3s linear;
}

.send-msg:hover {
    background-color: #0E314C;
}
</style>