import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import Feature from "../../components/Featured/Feature";
import FeatureSlider from "../../components/Featured/FeatureSlider";
import PostsData from "../../components/PostsData/PostsData";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PostsData />
      <FeatureSlider />
      <PostsData />
      <Feature />
    </div>
  );
};

export default Home;
