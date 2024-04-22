<template>
    <div v-if="loading" class="laoding-div-main ">
        <div class="spinner-grow "></div>
    </div>
    <div v-if="!loading" class="loading-div">
        <Navigations-route></Navigations-route>
        <div>
            <div class="container ">
                <div class="row">
                    <div class="col-2">
                    </div>
                    <div class="col-8">
                        <div class="my-5">
                            <div class="card careers-card ">
                                <div class="jobs-div">JOBs</div>
                                <div class="card-title ">
                                    <h4 class="font-clr-blue position-div">Sr. QA (Manual+Auto) (3 - 5 yrs )</h4>
                                    <div class="d-flex justify-content-center  ">
                                        <span><i class="ri-map-pin-2-fill"></i></span>
                                        <p>Hyderabad,Telangana</p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <a href="" class="details-view font-clr-blue text-decoration-none ">VIEW DETAILS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-2 "> </div>

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

<style  scoped>
.careers-card {
    background: #fff;
    border-radius: 20px;
    padding: 70px 60px 55px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.3s linear;
    border: 1.2px solid rgb(24, 24, 24);
}

.position-div {
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 25px;
    font-weight: 600;
    text-transform: none;
}

.details-view {
    border: 1px solid;
    border-radius: 10px;
    display: block;
    text-align: center;
    width: 100%;
    padding: 12px;
    text-transform: uppercase;
    font-weight: 800;
    transition: all 0.3s linear;
}

.jobs-div {
    background: #f5480c;
    width: 130px;
    height: 33px;
    line-height: 33px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -65px;
    border-radius: 0 0 30px 30px;

}

.details-view:hover {
    color: #fff !important;
    background-color: #0E314C !important;
}

.ri-map-pin-2-fill {
    color: orangered;
}
</style>