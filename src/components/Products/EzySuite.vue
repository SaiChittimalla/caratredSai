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
                            <h2 class="main-txt fw-bold">SignEzy – Features & Benefits</h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="card-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-file-earmark-richtext-fill card-icon"></i></span>
                            <p class="card-paragraph">Give your Guest the convenience of electronically signing documents
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="card-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-file-earmark-diff-fill card-icon"></i></span>
                            <p class="card-paragraph1">Secure your docs with the legally binding, compliant free electronic
                                signatures.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="card-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-gear-fill card-icon"></i></span>
                            <p class="card-paragraph">
                                Sign EZY allows you to simplify the signing process
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="card-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-printer card-icon"></i></span>
                            <p class="card-paragraph">
                                Quickly Print and e Sign documents.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="bg-color">
                <div class="container">
                    <div class="row">
                        <div>
                            <h2 class="fw-bold text-white scan-ezy-txt text-center ">ScanEzy – Features & Benefits</h2>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="icon-div text-center mb-4">
                                <div class="empty-div"></div>
                                <span><i class="bi bi-calendar scan-ezy-icons"></i></span>
                                <p class="scan-ezy-card-txt">Faster check-in, less contact check-in</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="icon-div text-center mb-4">
                                <div class="empty-div"></div>
                                <span><i class="bi bi-images scan-ezy-icons"></i></span>
                                <p class="scan-ezy-card-txt">No copies, storage or paper necessary</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="icon-div text-center mb-4">
                                <div class="empty-div"></div>
                                <span><i class="bi bi-person-bounding-box scan-ezy-icons"></i></span>
                                <p class="scan-ezy-card-txt1">Scans passports from over all major countries.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="icon-div text-center mb-4">
                                <div class="empty-div"></div>
                                <span><i class="bi bi-file-fill scan-ezy-icons"></i></span>
                                <p class="scan-ezy-card-txt">Automatically stores an electronic copy – on an encrypted
                                    cloud.
                                    Safely and securely</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="icon-div text-center mb-4">
                                <div class="empty-div"></div>
                                <span><i class="bi bi-globe2 scan-ezy-icons"></i></span>
                                <p class="scan-ezy-card-txt">Recognizes all Indian ID proofs like Aadhar card, Voter ID and
                                    Driving license</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="icon-div text-center mb-4">
                                <div class="empty-div"></div>
                                <span><i class="bi bi-journal-text scan-ezy-icons"></i></span>
                                <p class="scan-ezy-card-txt">Once scanned the software will automatically populate all data
                                    onto the guest profile
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="icon-div text-center mb-4">
                                <div class="empty-div"></div>
                                <span><i class="bi bi-stack scan-ezy-icons"></i></span>
                                <p class="scan-ezy-card-txt">
                                    Read IDs in seconds, Update a booking or create a walk-in and no more photocopying</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="icon-div text-center mb-4">
                                <div class="empty-div"></div>
                                <span><i class="bi bi-globe scan-ezy-icons"></i></span>
                                <p class="scan-ezy-card-txt">When Guest Presents the ID , our ID scanner and Scan Ezy will
                                    do
                                    the rest</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="icon-div text-center mb-4">
                                <div class="empty-div"></div>
                                <span><i class="bi bi-tv scan-ezy-icons"></i></span>
                                <p class="scan-ezy-card-txt">Uploading C form with just a single Click is major feature of
                                    the
                                    application</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="main-heading text-center">
                            <h2 class="main-txt fw-bold">SignEzy – Features & Benefits</h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12 ">
                        <div class="EzyCheckins-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-tablet-fill EzyCheckins-icon"></i></span>
                            <p class="EzyCheckins-paragraph">Self check-in Application that works with nearly any mobile,
                                tablet
                                or desktop device</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 ">
                        <div class="EzyCheckins-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-envelope-fill EzyCheckins-icon"></i></span>
                            <p class="EzyCheckins-paragraph1">
                                Guest Receives check-in requests via email or Guest can scan the QR provided at the property
                                to
                                start check-in process</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 ">
                        <div class="EzyCheckins-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-upc-scan EzyCheckins-icon"></i></span>
                            <p class="EzyCheckins-paragraph">
                                Scan QR codes with your device's integrated camera. No app downloads needed.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="EzyCheckins-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-clock-fill EzyCheckins-icon"></i></span>
                            <p class="EzyCheckins-paragraph">Enable your guests to check-in via a dedicated URL at any time
                                they
                                need.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="EzyCheckins-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-images EzyCheckins-icon"></i></span>
                            <p class="EzyCheckins-paragraph">
                                Upload documents right from the gallery</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="EzyCheckins-div text-center mb-4">
                            <div class="empty-div"></div>
                            <span><i class="bi bi-file-earmark-ruled-fill EzyCheckins-icon"></i></span>
                            <p class="EzyCheckins-paragraph">
                                Attach COVID-19 declaration to the check-in form</p>
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
.main-heading {
    margin: 30px 30px 30px 30px;
    padding: 10px 10px 10px 10px;
}

.main-txt {
    color: #0e314c;
    font-weight: 800;
}

.card-div {
    padding: 25px 45px;
    border: 1px solid #E7E7E7;
}

.card-icon {
    font-size: 50px;
    color: #0e314c;
    transition: all 0.3s linear;
}

.card-div:hover .card-icon {
    color: #EE4326;
}

.card-paragraph {
    font-size: 14px;
    color: #6d6d6d;
    padding: 45px 0px 0px;
}

.card-paragraph1 {
    font-size: 14px;
    color: #6d6d6d;
    padding: 24px 0px 0px;
}


.card-div:hover .card-paragraph {
    color: white;
}

.card-div:hover .card-paragraph1 {
    color: white;
}



.card-div {
    background: transparent;
    position: relative;
    z-index: 1;
}

.card-div:hover {
    /* scale: 0.9; */
    transition: (0.6s);
    animation-iteration-count: infinite;
}

.card-div::before {
    transition: 0.4s ease-in;
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

.card-div:hover::before {
    transition: 0.5s;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
}



.bg-color {
    background-color: #0E314C;
    color: white;
    padding: 0px 0px 25px 0px;
}

.scan-ezy-txt {
    margin: 30px 30px 30px 30px;
    padding: 10px 10px 10px 10px;
}

.icon-div {
    border: 1px solid #E7E7E7;
    padding: 35px 45px;
    position: relative;
    overflow: hidden;
}

.scan-ezy-icons {
    font-size: 45px;
    transition: all 0.3s linear;
}

.icon-div:hover .scan-ezy-icons {
    color: #EE4326;
}

.scan-ezy-card-txt {
    font-size: 14px;
    padding: 50px 0px 0px;
}

.icon-div:hover .scan-ezy-card-txt {
    color: #0e314c;
}

.scan-ezy-card-txt1 {
    font-size: 14px;
    padding: 30px 0px 0px;
}

.icon-div:hover .scan-ezy-card-txt1 {
    color: #0e314c;
}


.icon-div {
    background: transparent;
    position: relative;
    z-index: 1;
}

.icon-div:hover {
    /* scale: 0.9; */
    transition: (0.6s);
    animation-iteration-count: infinite;
}

.icon-div::before {
    transition: 0.4s ease-in;
    position: absolute;
    top: 0px;
    left: 0%;
    right: 100%;
    bottom: 0px;
    /* border-radius: 12px; */
    content: "";
    background-color: white;
    color: #0e314c;
}

.icon-div:hover::before {
    transition: 0.5s;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
}

.EzyCheckins-div {
    border: 1px solid #E7E7E7;
    padding: 25px 45px;
    position: relative;
    overflow: hidden;
}

.EzyCheckins-icon {
    font-size: 50px;
    color: #0e314c;
}

.EzyCheckins-div:hover .EzyCheckins-icon {
    color: #EE4326;
}


.EzyCheckins-paragraph {
    padding: 45px 0px 0px 0px;
    font-size: 14px;
    color: #6d6d6d;
}

.EzyCheckins-paragraph1 {
    padding: 24px 0px 0px 0px;
    font-size: 14px;
    color: #6d6d6d;
}

.EzyCheckins-div:hover .EzyCheckins-paragraph {
    color: white;
}

.EzyCheckins-div:hover .EzyCheckins-paragraph1 {
    color: white;
}

.EzyCheckins-div {
    background: transparent;
    position: relative;
    z-index: 1;
}

.EzyCheckins-div:hover {
    /* scale: 0.9; */
    transition: (0.6s);
    animation-iteration-count: infinite;
}

.EzyCheckins-div::before {
    transition: 0.4s ease-in;
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

.EzyCheckins-div:hover::before {
    transition: 0.5s;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
}

.card-div:hover .empty-div {
    background: #f5480c;
    width: 25px;
    height: 23px;
    position: absolute;
    top: 0px;
    left: 96%;
    border-radius: 0px 0px 0px 30px;
    transition: all 0.30s linear;
}

.icon-div:hover .empty-div {
    background: #f5480c;
    width: 28px;
    height: 23px;
    position: absolute;
    top: 0px;
    left: 94%;
    border-radius: 0px 0px 0px 30px;
    transition: all 0.30s linear;
}

.EzyCheckins-div:hover .empty-div {
    background: #f5480c;
    width: 28px;
    height: 23px;
    position: absolute;
    top: 0px;
    left: 94%;
    border-radius: 0px 0px 0px 30px;
    transition: all 0.30s linear;
}</style>