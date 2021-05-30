import React from "react";
import FeatureCard from "./_FeatureCard";
import featureImage from "../../assets/services.svg";
import "./FeatureWrapper.scss";
const index = () => {
  return (<>
    <div className="feature-wrapper">
      <div>
        <h1 className="main-head">Need Something To Be Done</h1>
      </div>
      <div className="feature-card-inner-wrapper">
      <FeatureCard
        image={featureImage}
        heading="Orchid Token"
        para="Nodes are then randomly selected based on the amount of
        OXT they have staked and by user-selected parameters such as price and location."
      />
      <FeatureCard
        image={featureImage}
        heading="Orchid Token"
        para="Nodes are then randomly selected based on the amount of
        OXT they have staked and by user-selected parameters such as price and location."
      />
      <FeatureCard
        image={featureImage}
        heading="Orchid Token"
        para="Nodes are then randomly selected based on the amount of
        OXT they have staked and by user-selected parameters such as price and location."
      />
      </div>
    </div>

    </>
  );
};

export default index;
