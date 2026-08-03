     <section id="bring_happierme" class="work-demo-section">
        <div class="row center_flex div_subscription work-demo-band">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 p0 email-w980px work-demo-inner">

            <div class="work-demo-copy" data-aos="fade-up" data-aos-delay="100">
              <h2 class="mtb0px fs_30px fw_600 lh_120p fc_ffffff work-demo-title">
                Bring HappierMe to your organization
              </h2>
              <h4 class="mtb0px fs_15px fw_400 lh_160p fc_ffffff work-demo-subtitle">
                Connect with our specialists today and see how we can help you prioritize a happier workspace
              </h4>
            </div>

            <div class="work-demo-form-wrap" data-aos="fade-up" data-aos-delay="200">
              <form action="javascript:void(0);">
                <div class="work-demo-fields">
                  <div class="work-demo-col">
                    <div class="div_input">
                      <input type="text" class="form-control fc_01" id="name" name="name" placeholder="Your name">
                      <div class="fc_icons">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/web_form_user.svg" class="img-responsive" alt="">
                      </div>
                    </div>
                    <div class="div_input">
                      <input type="text" class="form-control fc_01" id="email" name="email" placeholder="Work email">
                      <div class="fc_icons">
                        <img src="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/website/svgs/web_form_mail.svg" class="img-responsive" alt="">
                      </div>
                    </div>
                  </div>

                  <div class="work-demo-col">
                    <div class="div_input">
                      <input type="text" class="form-control fc_01" id="company" name="company" placeholder="Company name">
                      <div class="fc_icons">
                        <img src="https://d1tenzemoxuh75.cloudfront.net/website/star-website.svg" class="img-responsive" alt="">
                      </div>
                    </div>
                    <div class="div_input">
                      <select class="form-select form-control fc_01 fc_select_01" name="country" id="country" required>
                        <option value="">Country</option>
                        <?php foreach ($countries as $country): ?>
                          <option value="<?php echo htmlspecialchars($country); ?>"><?php echo htmlspecialchars($country); ?></option>
                        <?php endforeach; ?>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="work-demo-cta" data-aos="fade-up" data-aos-delay="300">
                  <button id="Request-Demo" type="button" class="fs_15px fw_600 lh_140p fc_ffffff btn_tff work-demo-btn">
                    Request a demo
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
