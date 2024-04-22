<template>
  <div v-if="loading" class="laoding-div-main ">
    <div class="spinner-grow "></div>
  </div>
  <div v-if="!loading" class="loading-div">
    <Navigations-route></Navigations-route>
    <div class="pt-5">
      <div class="container">
        <div class="text-center">
          <h2><b>EzyGST – Features</b></h2>
        </div>
        <div class="text-center mt-4">
          <h3><b>GSTR 1</b></h3>
          <h6>
            GSTR-1 is a monthly or quarterly return that businesses in India file to
            report their outward supplies of goods and services to the tax
            authorities under the Goods and Services Tax (GST) system.
          </h6>
        </div>
        <div class="mt-4">
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-file-reduce-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6><b>Full Capture of Sales Invoices</b></h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience makes
                    us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-user-settings-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6><b> Auto Population of GSTR 1 data for quick filing</b></h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience makes
                    us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-file-add-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6><b>Full Capture of Sales Invoices</b></h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience makes
                    us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-star-half-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6><b>SEZ/Zero Rated Supplies</b></h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience makes
                    us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-truck-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6><b> HSN/SAC summary</b></h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience makes
                    us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-profile-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6><b>Tracking of Amendments </b></h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience makes
                    us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-bar-chart-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6><b>Reports and Dashboards</b></h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience makes
                    us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-tv-2-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6><b> Updation of Deposits</b></h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience makes
                    us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-file-settings-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6><b>Unbilled Revenue</b></h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience makes
                    us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="bg-color">
        <div class="container">
          <div class="text-center padding123 text-white">
            <h2 class="text-white"><b>GSTR 2B</b></h2>
            <h6 class="text-white" style="font-size: 13px">
              GSTR-2B is a static monthly return generated for registered
              businesses in India, which provides an auto-drafted summary of their
              inward supplies based on the GSTR-1 filed by their suppliers.
              However, please note that tax laws and forms may change over time,
              so I recommend checking the latest official guidelines for the most
              up-to-date information on GSTR-2B.
            </h6>
          </div>
          <div class="mt-4">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-line-chart-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white">
                      <b>Unmatched Reports by vendor/Invoice</b>
                    </h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-user-settings-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white">
                      <b> Summary of eligible ITC and ITC reversal</b>
                    </h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-edit-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white">
                      <b>Invoice Carry forwards for ITC availment</b>
                    </h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-download-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b>GSTR 2B JSON download </b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-tv-2-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b> Purchase Register Import</b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-bar-chart-box-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b>2B vs PR Reconciliation </b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-bar-chart-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b>Reports and Dashboards</b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-tv-2-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b> Supplier contact master</b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-file-settings-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b> Vendor Follow ups</b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="text-center padding123">
          <h2><b>GSTR 3B</b></h2>
          <p style="font-size: 13px">
            GSTR-3B is a monthly self-declaration return filed by registered
            businesses in India to report their summarized sales, purchases, and
            GST liabilities, allowing them to make tax payments under the Goods
            and Services Tax (GST) system; however, it’s essential to refer to the
            latest official guidelines for any potential changes or updates to the
            GSTR-3B return.
          </p>
        </div>
        <div class="">
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-file-reduce-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6 class="">
                    <b>Details of Outward Supplies & inward supplies liable to
                      reverse charge</b>
                  </h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience
                    makes us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-user-settings-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6 class="">
                    <b>
                      Eligible ITC ( ITC Available, ITC Reversed, Net ITC
                      Available, Ineligible ITC)</b>
                  </h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience
                    makes us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
              <div class="card cardhover h-100 shadow">
                <div class="mainicon d-flex justify-content-center">
                  <i class="ri-file-add-line"></i>
                </div>
                <div class="card-body text-center">
                  <h6 class="">
                    <b>Full Capture of Sales Invoices</b>
                  </h6>
                  <p class="text-muted">
                    We carry more than just good coding skills. Our experience
                    makes us stand out from other web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-color">
        <div class="container">
          <div class="text-center padding123 text-white">
            <h2 class="text-white"><b>Dashboard & Compliance</b></h2>
          </div>
          <div class="mt-1">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-line-chart-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b>GSTR Filing Status</b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-user-settings-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white">
                      <b> GSTR Notices</b>
                    </h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-edit-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b>RCM payable vs paid</b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-download-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white">
                      <b> Sales Value ( B2B,B2C,Credit Note) </b>
                    </h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-tv-2-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white">
                      <b> Tax Liability ( GSTR 1 vs GSTR 3B)</b>
                    </h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-bar-chart-box-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white">
                      <b>ITC Available vs ITC claimed </b>
                    </h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-bar-chart-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b>GSTR 3B VS GSTR 1 Report</b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-tv-2-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b> Supplier contact master</b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-4 col-sm-12 col-md-12 mb-4">
                <div class="card cardhover1 h-100 shadow">
                  <div class="mainicon d-flex justify-content-center">
                    <i class="ri-file-settings-line"></i>
                  </div>
                  <div class="card-body text-center">
                    <h6 class="text-white"><b> GSTR 3B VS GSTR 2A</b></h6>
                    <p class="text-white">
                      We carry more than just good coding skills. Our experience
                      makes us stand out from other web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="mt-5">
          <div class="text-center">
            <h2 style="color: #0e314c">
              <b>EzyGST – Benefits & Overview</b>
            </h2>
            <p>
              The benefits of Ezy Goods and Services Tax (GST) include the
              simplification of the indirect tax structure, removal of cascading
              taxes, enhanced compliance through technology-driven processes, and
              promotion of a unified and transparent tax system in India.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-file-settings-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">Simple and easy GST Reconciliation Software</p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-file-2-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">
                  Bulk mismatch handling for properties having large number of
                  inward invoices
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-file-text-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">
                  Intelligent processor to identify invoice miss matches or
                  reconciliation
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-tv-2-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">
                  Dashboards at property level, cluster Level, and corporate
                  regional level
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-user-settings-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">
                  Reduce dependency on external parties and provide more internal
                  controls
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-folder-cloud-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">On Premise or Cloud Based Solution</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-eye-off-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">Users access with 2Factor Authentication</p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-image-circle-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">Granular User Permissions</p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-notification-2-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">Detailed Audit logs</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-file-settings-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">Simple and easy GST Reconciliation Software</p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-file-2-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">
                  Bulk mismatch handling for properties having large number of
                  inward invoices
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-sm-12 col-md-6 mb-4">
              <div class="simple-card">
                <div style="color: orangered">
                  <i class="ri-file-text-line"></i>
                </div>

                <div class="iconmain"></div>
                <p class="">
                  Intelligent processor to identify invoice miss matches or
                  reconciliation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer-design></footer-design>
  </div>
</template>

  

<style scoped>
.bg-color123 {
  background-color: #efefef !important;
}

.simple-card:hover .iconmain::after {
  transform: scaleX(1);
}

.iconmain {
  height: 3px;
  width: 100%;
  background: #efefef;
  margin-bottom: 15px;
  position: relative;
}

.iconmain::after {
  content: "";
  display: block;
  right: 0;
  top: 0;
  width: 0;
  background: #7141b1;
  height: 3px;
  width: 100%;
  transition: all 0.5s ease;
  transform: scaleX(0);
  transform-origin: left;
  background: orangered;
}

.padding123 {
  padding: 100px 0px 100px 0px;
}

.bg-color {
  background-color: #0e314c;
}

i {
  font-size: 50px;
}

p {
  font-size: 13px;
}

.cardhover {
  background-color: white;
  padding: 40px 45px;
  background-repeat: no-repeat;
  background-size: cover;
  color: #0e314c;

  /* border-radius: 12px; */
  font-weight: bold;
  position: relative;
  z-index: 0;
  animation: cardhover ease-in-out 0.9s infinite;
}

.cardhover::before {
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

  /* background-image: url(https://staging.caratred.in/wp-content/uploads/2020/01/bg-icon-box5.jpg) !important; */
}

.cardhover:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.cardhover:hover {
  background-color: transparent !important;
  color: white !important;
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}

.cardhover:hover i {
  color: orangered;
}

.cardhover:hover p {
  color: white !important;
}

.cardhover:hover h6 {
  color: white;
}

.cardhover1 {
  background-color: #0e314c;

  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  /* border-radius: 12px; */
  font-weight: bold;
  position: relative;
  z-index: 0;
  border-color: white;
  animation: cardhover1 ease-in-out 0.9s infinite;
}

.cardhover1::before {
  transition: 0.5s ease-in;
  position: absolute;
  top: 0px;
  left: 0%;
  right: 100%;
  bottom: 0px;
  /* border-radius: 12px; */
  content: "";
  background-color: white;
  color: #0e314c;

  /* background-image: url(https://staging.caratred.in/wp-content/uploads/2020/01/bg-icon-box5.jpg) !important; */
}

.cardhover1:hover::before {
  transition: 0.5s;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.cardhover1:hover {
  background-color: transparent !important;
  color: white !important;
  transition: (0.9s);
  animation-iteration-count: infinite;
  cursor: pointer;
}

.cardhover1:hover i {
  color: orangered;
}

.cardhover1:hover p {
  color: #0e314c !important;
}

.cardhover1:hover h6 {
  color: #0e314c !important;
}

/* h6 {
  color: white !important;
} */
</style>
<script>
import FooterDesign from "../FooterDesign.vue";
import NavigationsRoute from "../Navigation/NavigationsRoute.vue";
// import FooterPage from "../FooterPage.vue";

export default {
  components: {
    // FooterPage,
    FooterDesign,
    NavigationsRoute,
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