<template>
  <div v-if="loading" class="laoding-div-main ">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <NavigationsRoute></NavigationsRoute>
    <div class="text-center pt-5" style="color: #0e314c">
      <h3>Why Choose Us</h3>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-12 col-md-12 col-xl-8 mb-4">
          <img src="../../images/man1.png" class="w-75" />
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div class="d-flex gap-5">
            <div><i class="ri-tv-line"></i></div>
            <div>
              <p class="fs" style="color: #0e314c">
                Our company's unique skill lies is the ability to combine software
                development, data warehousing, insights delivery, and content
                creation. Through this, we provide comprehensive solutions to our
                clients, catering to their various unique needs and requirements.
                We strongly believe that this flexibility is essential in the
                fast-paced and ever-changing tech industry.
              </p>
            </div>
          </div>
          <div class="d-flex gap-5 mt-4">
            <div><i class="ri-git-repository-line"></i></div>
            <div>
              <p class="fs" style="color: #0e314c">
                Applying "Software Driven Thinking" as our problem-solving
                approach helps us demonstrate our proactive and innovative
                mindset. This approach involves utilizing cutting-edge software
                technologies and methodologies, which allows us to tackle
                technical challenges effectively and efficiently.Our experience in
                building scalable products and handling high-traffic challenges on
                the consumer side showcases our capability to manage large user
                bases and maintain smooth performance even during peak usage.
              </p>
            </div>
          </div>
          <div class="d-flex gap-5 mt-4">
            <div><i class="ri-macbook-line"></i></div>
            <div>
              <p class="fs" style="color: #0e314c">
                Overall, our portfolio and client-focused mindset position us as a
                valuable and sought-after partner for enterprises, SMEs, and
                startups seeking advanced solutions to their technology and
                data-related challenges. Our commitment to innovation and
                proficiency in various domains make us a reliable choice for
                clients looking to achieve their business goals effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="mt-5">
        <!-- <footer-page></footer-page> -->
        <footer-design></footer-design>
      </div>
    </section>
  </div>
</template>
<style scoped>
.fs {
  font-size: 13px;
}

i {
  font-size: 45px;
}
</style>
<script>
import NavigationsRoute from "../Navigation/NavigationsRoute.vue";
import FooterDesign from "../FooterDesign.vue";
// import FooterPage from "../FooterPage.vue";

export default {
  components: {
    FooterDesign,
    NavigationsRoute,
    // FooterPage,
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
};
</script>