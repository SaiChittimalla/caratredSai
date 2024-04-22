<template>
    <div v-if="loading" class="laoding-div-main ">
        <div class="spinner-grow "></div>
    </div>
    <div v-if="!loading" class="loading-div">
        <Navigations-route></Navigations-route>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class=" text-center my-5  ">
                        <h2 class="heading fw-bold ">Key features of ERPNext:</h2>
                        <p class=" text-secondary mb-3">
                            Key features of ERPNext encompass modular structure, user-friendly interface, real-time
                            collaboration, mobile support, data security, seamless integration, open-source nature,
                            scalability,
                            multilingual and multi-currency support, and active community support, making it a versatile and
                            robust ERP solution for businesses of all sizes.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi  bi-grid-3x3-gap-fill EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">Modular Structure:</h6>
                        <p class="EzyCheckins-paragraph">ERPNext is organized into modules, making it easy to
                            customize and
                            configure the system based on specific business requirements. Users can enable or disable
                            modules as
                            needed.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi bi-phone-fill EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">Mobile Support:</h6>
                        <p class="EzyCheckins-paragraph">The software is responsive and works well on various devices,
                            including
                            smartphones and tablets, ensuring users can access the system while on the go.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi bi-laptop EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">Open Source:</h6>
                        <p class="EzyCheckins-paragraph">Being an open-source solution, ERPNext allows users to access the
                            source code, modify it, and contribute to the community, leading to continuous improvement and
                            flexibility.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi bi-person-dash-fill EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">Integration:</h6>
                        <p class="EzyCheckins-paragraph">It offers integration with other popular applications and services,
                            streamlining data exchange and enhancing overall business <br> processes.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi bi-bar-chart-line-fill EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">User-Friendly Interface:</h6>
                        <p class="EzyCheckins-paragraph">ERPNext can accommodate the needs of small businesses as well as
                            large
                            enterprises, making it suitable for organizations of varying<br> sizes.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi bi-people-fill EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">Support and Community:</h6>
                        <p class="EzyCheckins-paragraph">There is an active community of users and developers who contribute
                            to
                            the project and offer support to fellow<br> users.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi bi-person-fill EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">Real-time Collaboration:</h6>
                        <p class="EzyCheckins-paragraph">ERPNext supports real-time collaboration, enabling multiple users
                            to
                            work simultaneously and access up-to-date information.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi bi-telephone-outbound-fill EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">Multilingual and Multi-currency Support:</h6>
                        <p class="EzyCheckins-paragraph">It supports multiple languages and currencies, enabling businesses
                            to
                            operate globally.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi bi-people-fill EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">User-Friendly Interface:</h6>
                        <p class="EzyCheckins-paragraph">The user interface is designed to be intuitive and easy to
                            navigate,
                            allowing users to access information and perform tasks efficiently.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <div class="EzyCheckins-div mb-4">
                        <div class="empty-div"></div>
                        <span><i class="bi bi-lock-fill EzyCheckins-icon "></i></span>
                        <h6 class="card-heading fw-bold mt-3 ">Data Security:</h6>
                        <p class="EzyCheckins-paragraph">ERPNext focuses on data security and provides role-based access
                            control
                            to restrict access to sensitive information.</p>
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

.heading {
    color: #0E314C;
}

.EzyCheckins-div {
    border: 1px solid #E7E7E7;
    padding: 40px 45px;
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
    font-size: 14px;
    line-height: 24px;
    color: #6d6d6d;
}

.EzyCheckins-div:hover .EzyCheckins-paragraph {
    color: white;
}

.EzyCheckins-div:hover .EzyCheckins-paragraph1 {
    color: white;
}

.EzyCheckins-div:hover .card-heading {
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
    transition: 0.7s ease-in;
    position: absolute;
    top: 0px;
    left: 0%;
    right: 100%;
    bottom: 0px;
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


.EzyCheckins-div:hover .empty-div {
    background: #f5480c;
    width: 50px;
    height: 25px;
    position: absolute;
    top: 0px;
    left: 94%;
    border-radius: 2px 19px 0px 36px;
    transition: all 0.30s linear;
}
</style>