import React from "react";
import Button from "../../../../components/Button/Button";
import "./Hero.scss";



const Hero = () => {
  return (
    <div className="hero-container">

        <div className="hero-hp">
          <h1 className="Hero-heading">
            <text className="cyan">Mov</text>Easy
          </h1>
          <p className="hero-para">The Packers and Movers Company</p>
          <div className="hero-btn">
          <Button
            type="submit"
            ButtonStyle="btn-primary"
            ButtonSize="btn-medium"
            onClick={undefined}
          >
            Explore
          </Button>
          </div>
        </div>
      
    </div>
  );
};

export default Hero;
