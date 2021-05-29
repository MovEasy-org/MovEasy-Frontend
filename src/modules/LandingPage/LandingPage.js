import React from "react";
import "./LandingPage.scss";
import Hero from "../../modules/LandingPage/_components/_HeroSection/Hero";
import About from "../../modules/LandingPage/_components/_AboutSection/About";
import FeatureCards from "./_components/_FeatureCard/FeatureWrapper";
import WhyWrapper from "./_components/_WhyMovEasy/WhyWrapper";
import Testimonials from "./_components/_TestimonialCard/_TestimonialCard";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <About/>
      <FeatureCards/>
      <WhyWrapper/>
      <Testimonials/>
    </div>
  );
};

export default LandingPage;
