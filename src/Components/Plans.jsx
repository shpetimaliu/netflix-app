import React from "react";
import "./Plans.css";

function Plans() {
  let products = [
    {
      name: "Basic Plan",
      descrition: "1080p + HDR + Ads Free",
      subscribed: false,
    },
    {
      name: "Standard Plan",
      descrition: "4k + HDR + Ads Free",
      subscribed: false,
    },
    {
      name: "Premium Plan",
      descrition: "4k + Serial + HDR + Ads Free",
      subscribed: true,
    },
  ];

  return (
    <div className="plansScreen">
      {products.map((product, index) => (
        <div key={index} className="planScreen__plan">
          <div className="planScreen__info">
            <h5>{product.name}</h5>
            <h6>{product.descrition}</h6>
          </div>
          <button className={product.subscribed ? "subscribed" : ""}>
            {product.subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Plans;
