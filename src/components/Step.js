import "./Step.styles.css";

const Step = () => {
  return (
    <section className="section-step">
      <div className="step">
        {/* STEP 01 */}
        <div class="step-box">
          <div class="step-img-box">
            <img
              src="/images/image-retro-pcs.jpg"
              class="step-img"
              alt="image retro pcs"
            />
          </div>

          <div class="step-text-box">
            <p class="step-number">01</p>
            <a href="#step1" className="step-heading-link heading-tertiary">
              Reviving Retro PCs
            </a>

            <p class="step-description">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>

        {/* STEP 02 */}
        <div class="step-box">
          <div class="step-img-box">
            <img
              src="/images/image-top-laptops.jpg"
              class="step-img"
              alt="image top laptops"
            />
          </div>

          <div class="step-text-box">
            <p class="step-number">02</p>
            <a href="#step2" className="step-heading-link heading-tertiary">
              Top 10 Laptops of 2022{" "}
            </a>

            <p class="step-description">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>

        {/* STEP 03 */}
        <div class="step-box">
          <div class="step-img-box">
            <img
              src="/images/image-gaming-growth.jpg"
              class="step-img"
              alt="image gaming growth"
            />
          </div>

          <div class="step-text-box">
            <p class="step-number">03</p>
            <a href="#step2" className="step-heading-link heading-tertiary">
              The Growth of Gaming
            </a>
            <p class="step-description">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
