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
                            <h2 class="main-txt fw-bold ">EzyCLBS – Overview & Features</h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box text-center mb-3">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <img src="../../assets/products/flipbox3.jpg" class=" img-fluid" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">01</span>
                                    <h5 class="img-txt fw-bold ">Directly Integrated with EzyInvoicing Solution</h5>
                                </div>
                                <div class="flip-box-back text-center ">
                                    <p class="flip-txt">Additional Invoice uploads not required .</p>
                                    <span class="number-box">01</span>
                                    <h6 class="icon-txt"><i class=" bi bi-arrow-right me-3 "></i>LEARN MORE</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box text-center mb-3">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <img src="../../assets/products/flipbox2.jpg" class="img-fluid" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">02</span>
                                    <h5 class="img-txt fw-bold ">Instant City Ledger Summary generation with all supporting
                                        documents in
                                        just few clicks and minutes</h5>
                                </div>
                                <div class="flip-box-back text-center ">
                                    <p class="flip-txt">Extract Guest Name and Room Number information from transaction line
                                        items from PMS
                                        Invoices to generate rooming List by stay .</p>
                                    <span class="number-box">02</span>
                                    <h6 class="icon-txt"><i class=" bi bi-arrow-right me-3 "></i>LEARN MORE</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-3">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <img src="../../assets/products/flipbox.jpg" class="img-fluid" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">03</span>
                                    <h5 class="img-txt fw-bold ">Multiple location and multi contact support for each GST
                                    </h5>
                                </div>
                                <div class="flip-box-back text-center ">
                                    <p class="flip-txt">Additional hardware not required to extent this functionally</p>
                                    <span class="number-box">03</span>
                                    <h6 class="icon-txt"><i class=" bi bi-arrow-right me-3 "></i>LEARN MORE</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-3">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <img src="../../assets/products/bg-icon-box1.jpg" class="img-fluid" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">04</span>
                                    <h5 class="img-txt fw-bold ">Detailed Activity and email Logs</h5>
                                </div>
                                <div class="flip-box-back text-center ">
                                    <p class="flip-txt">Support multiple summary formats .</p>
                                    <span class="number-box">04</span>
                                    <h6 class="icon-txt"><i class=" bi bi-arrow-right me-3 "></i>LEARN MORE</h6>
                                </div>
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
                            <h2 class="main-txt fw-bold mt-4">EzyCLBS – Benefits</h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="main-div">
                            <span><i class="bi bi-gear-fill icons"></i></span>
                            <h6 class="mt-3">Fully Automated</h6>
                            <div class="line-box"></div>
                            <p class="paragraph">Less Manual Intervention</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="main-div">
                            <span><i class="bi bi-clock-fill icons"></i></span>
                            <h6 class="mt-3">Time Efficient</h6>
                            <div class="line-box"></div>
                            <p class="paragraph">Generate Summaries in less than 2 minutes</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="main-div">
                            <span><i class="bi bi-option icons"></i></span>
                            <h6 class="mt-3">Digital Signature</h6>
                            <div class="line-box"></div>
                            <p class="paragraph">Digitally sign the summaries</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="main-div">
                            <span><i class="bi bi-diagram-2-fill icons"></i></span>
                            <h6 class="mt-3">Custom Templates</h6>
                            <div class="line-box"></div>
                            <p class="paragraph">Supports multiple summary formats</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="main-div">
                            <span><i class="bi bi-file-earmark-minus icons"></i></span>
                            <h6 class="mt-3">Supporting Documents</h6>
                            <div class="line-box"></div>
                            <p class="paragraph">Attach Supporting documents like Bills, POs etc</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="main-div">
                            <span><i class="bi bi-file-earmark-text icons"></i></span>
                            <h6 class="mt-3">Summary Repository</h6>
                            <div class="line-box"></div>
                            <p class="paragraph">Summaries are stored for future purpose</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="main-div">
                            <span><i class="bi bi-envelope-fill icons"></i></span>
                            <h6 class="mt-3">Send Email</h6>
                            <div class="line-box"></div>
                            <p class="paragraph">Send Email instantly with summaries and supporting documents attached</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="main-div">
                            <span><i class="bi bi-shield-fill-check icons"></i></span>
                            <h6 class="mt-3">Vendor portal Automation</h6>
                            <div class="line-box"></div>
                            <p class="paragraph">The summary generated can be automatically uploaded to the vendor portals
                            </p>
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
.flip-box {
    background-color: transparent;
    width: 300px;
    height: 200px;
    perspective: 1000px;
}

.flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-box-front {
    background-color: #bbb;
    color: black;
}

.flip-box-back {
    background-color: #0E314C;
    color: white;
    transform: rotateY(180deg);
}

.icon-txt {
    color: #EE4326;
}

.flip-txt {
    font-size: 14px;
    color: #aeaacb;
    padding: 50px 10px 20px 20px;
}

.img-txt {
    position: absolute;
    bottom: 20px;
    color: white;
}

.main-heading {
    margin: 14px 14px 14px 14px;
    padding: 10px 10px 10px 10px;
}

.main-txt {
    color: #0e314c;
    font-weight: 800;
}

.main-div {
    margin: 20px 20px 20px 20px;
    padding: 10px 10px 10px 10px;
}

.icons {
    font-size: 40px;
    color: #EE4326;
}

.paragraph {
    color: #6d6d6d;
    font-size: 14px;
    line-height: 22px;
}

.line-box {
    height: 3px;
    width: 100%;
    background: #efefef;
    margin-bottom: 15px;
    position: relative;
}

.main-div:hover .line-box {
    background-color: #EE4326;
}

.number-box {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 100px;
    line-height: 1;
    position: absolute;
    bottom: 23px;
    right: 15px;
    color: rgba(255, 255, 255, 0.2);
}
</style>