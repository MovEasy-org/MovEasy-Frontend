import React from "react";
import AboutImage from "../../assets/about.svg";
import "./About.scss"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={AboutImage} alt="" />
      </div>
      <div className="about-content">
        <h1 className="about-head">About Us</h1>
        <p className="about-para">
          Orchid (OXT), an Ethereum (ERC-20) compliant token, is used to pay for
          services on the Orchid network, a decentralized, peer-to-peer
          marketplace for virtual private network (VPN) providers. Orchid users
          purchase bandwidth with OXT and node providers receive OXT as rewards
          for supplying bandwidth.
        </p>
      </div>
    </div>
  );
};

export default About;
