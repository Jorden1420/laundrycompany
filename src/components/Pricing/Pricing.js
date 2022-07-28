import React, { useState } from "react";

const Pricing = (props) => {
  const [scrollPricingDiv, setScrollPricingDiv] = useState();

  props.pricingNode(scrollPricingDiv);
  return (
    <div
      className="pricing-container"
      ref={(node) => setScrollPricingDiv(node)}
    >
      <h1 className="text-center py-4" id="unique">
        Laundry Company Prices
      </h1>
      <div className="prices-section">
        <p>Dummy Text.. to be filled in.. coming soon....</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          eligendi quia ratione autem saepe labore dicta laudantium blanditiis
          eos quod asperiores est fugiat tenetur ut, eius voluptatum hic, amet
          dolorem?
        </p>
      </div>
    </div>
  );
};

export default Pricing;
