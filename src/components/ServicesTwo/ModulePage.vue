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
                        <div class=" py-3 ">
                            <h2 class=" fw-bold text-center heading">ERPNext Modules</h2>
                            <p class="text-secondary heading-paragraph">ERPNext includes modules for various business
                                functions,
                                such as
                                Accounting, Sales, Purchasing,
                                Inventory, Manufacturing, Human Resources, CRM, Projects, and more, providing a
                                comprehensive
                                and integrated solution to manage all aspects of an organization.</p>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-4">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bgiconbox1.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">01</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Finanace & Accounting</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Journals and payments
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Tax Compliance</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Billing and pricing</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Stock Reports</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Maintaining Warehouses
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Automatic Re-order
                                            Levels
                                        </li>
                                        <span class="number-box">01</span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-4">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-icon-box2.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">02</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">HRM & Payroll</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Talent Acquisition</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Employee Repository</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Employee Training</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Automated Payroll</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Expense Management</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Automatic attendance
                                        </li>
                                        <span class="number-box">02</span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-4">
                            <div class="flip-box-inner  shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-icon-box3.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">03</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Helpdesk & Support</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Automate Ticket
                                            Assignments
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Customer Portal</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Team Excellence</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Knowledge Base</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Service Level Agreement
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Scheduling Maintenance
                                            Visits</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-4">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-icon-box-4.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">04</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">SRM</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>360 -Degree View Of Your
                                            Business</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Omnichannel Interactions
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Sales Team Efficiency
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Sales Pipeline</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Crisp, Beautiful
                                            Quotations
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Digital Marketing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-4">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-img5.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">05</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Sales & Purchase Management</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Manage Lots</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Knowledge Base</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Multi-Channel Sales</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Powerful Marketing Tools
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Journals And Payments
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Accounts Receivable
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-4">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-img6.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">06</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Project Management</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Profitability Analysis
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Emails</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Document Storage</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Real-Time Chat</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> To-Do List</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Agile
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-4">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-img7.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">07</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Manufacturing</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Bill of material (BOM)
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Shop floor management
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Stock replenishment</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Capacity planning</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Material resource
                                            planning
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Serialized inventory
                                            Visits</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-4">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-img8.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">08</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Warehousing</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Split Or Move Batches
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Stock Picking</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Stock Reconciliation
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Stock Entry</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Quality Inspection</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Link Accounts To
                                            Warehouses
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box mb-4">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-img9.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">09</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Inventory & Stock</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Batched Inventory</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Quality Inspection</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Landed Cost Voucher</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Stock Aging</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Serialized inventory</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Control And Fetch Pricing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-img10.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">10</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Asset Management</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Asset Reporting</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Selling Assets</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Asset Value Adjustment
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Purchasing Assets</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Scrapping Assets</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Asset Inventory
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-img11.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">11</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Ecommerce & Website</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Bill of material (BOM)
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Responsive Websites</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Ecommerce</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Search Engine
                                            Optimization
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>One-Click Web Forms</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Blogging Visits</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 ">
                        <div class="flip-box">
                            <div class="flip-box-inner shadow-lg">
                                <div class="flip-box-front">
                                    <img src="../../assets/m-images/bg-img12.jpg" alt="Paris"
                                        style="width:300px;height:200px">
                                    <span class="number-box">12</span>
                                    <h5 class="img-txt text-center w-100 fw-bold ">Reports & Dashboard</h5>
                                </div>
                                <div class="flip-box-back">
                                    <ul class=" list-unstyled ul-tag">
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Module to Module
                                            Dashboard
                                        </li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Report Filters</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Customized Reports</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i>Script Report</li>
                                        <li class="flip-txt"><i class="bi bi-check flip-icons"></i> Query Report</li>
                                    </ul>
                                </div>
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
.heading {
    color: #0E314C;
    padding: 15px 15px 15px 15px;
}

.heading-paragraph {
    font-size: 15px;
    margin: 0 0 20px;
}

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
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
}

.flip-box-front {
    background-color: #bbb;
    color: black;
}

.img-txt {
    position: absolute;
    bottom: 20px;
    color: white;
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
    background-color: white;
    color: #0E314C;
    transform: rotateY(180deg);
}

.flip-txt {
    font-size: 12px;
    line-height: 0px;
}

.flip-txt:hover {
    color: #EE4326;
}

.icon-txt {
    color: #EE4326;
}

.flip-txt:hover .flip-icons {
    color: #EE4326;
}

.flip-icons {
    color: #0E314C;
    font-size: 22px;
}

.ul-tag {
    padding: 25px 0px 0px 70px;
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