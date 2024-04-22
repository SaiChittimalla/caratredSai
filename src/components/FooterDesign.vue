<template>
  <div class="bg-color12345">
    <div class="container">
      <div class="mt-3">
        <div class="row">
          <div class="col-lg-2 col-sm-12 col-md-12 col-xl-2 mt-4 mb-4">
            <!-- <img src="../images/Logo_caratred.jpg" class=" mix-blend" /> -->
            <router-link to="/" class=" mix-blend"><img src="../images/Logo_caratred.jpg" alt="logo"
                class=" img-fluid " /></router-link>
          </div>
          <div class="col-lg-2 col-sm-12 col-md-12 col-xl-2 mt-4 mb-4">
            <ul>
              <p>Menu</p>
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Services</li>
              <li>Carrers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-12 col-md-12 col-xl-2 mt-4 mb-4">
            <ul>
              <p>Products</p>
              <li>Ezy Invoicing</li>
              <li>Ezy Suite</li>
              <li>Ezy GST</li>
              <li>Ezy CLBS</li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-12 col-md-12 col-xl-3 mt-4 mb-4">
            <ul>
              <p>Services</p>
              <li>ERP Solution for SME</li>
              <li>Robotic Process Automations</li>
              <li>Devops and InfraManagement</li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-12 col-md-12 col-xl-3 mt-4 mb-4">
            <ul>
              <p>Contact Us</p>
              <li>
                <p>Mail Here:</p>
                <span style="font-size: 14px; margin-bottom: 50px">info@caratred.com</span>
              </li>
              <li>
                <p>Call Here:</p>
                +1 (855) 969 3770 <br />+91 40 3516 9799
              </li>
              <li>
                <p>Visit Here:</p>
                2055 Limestone Rd STE 200-C, Wilmington, DE, New Castle, US,
                19808 305-307,<br />
                Block 2, White House, SP Road, Kundan Bagh, Hyderabad - 500018
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.bg-color12345 {
  background-color: #e7e8e9;
}

.mix-blend {
  mix-blend-mode: darken;
}

.img {
  background-color: #e7e8e9;
}

li {
  list-style: none;
  line-height: 40px;
  font-size: 14px;
  transition: all 0.3s ease;
}

p {
  font-size: 20px;
  color: #0e314c;
}

li:hover {
  color: orangered;
  transform: translateX(-10);
  padding-left: 10px;
}
</style>