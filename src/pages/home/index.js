import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import ContentCardsSection from "./../../components/ContentCardsSection";
import VideoSection from "./../../components/VideoSection";
import Footer from "./../../components/Footer";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";
import styled from "styled-components";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://res.cloudinary.com/yodacom/image/upload/v1554864573/yodacom/YodaComLogoTrans150x50_3x.png"
      />
      <HeroSection
        color="white"
        size="medium"
        title="You need an app for that!"
        subtitle="Today's world runs on mobile. Web apps are the future/now. Apps are the key to your digital success. They have to be FAST. User FRIENDLY. And super EASY TO FIND. Yodacom builds on these keys to AUTOMATE YOUR SUCCESS. We build your app or web app pages for speed => launch it => then make your product, persona, or app VISIBLE TO THE WORLD. Make your great ideas come to life - YodaCom"
        buttonText="Get Started NOW"
        image="https://res.cloudinary.com/yodacom/image/upload/v1569447165/MobileUseVrsComputer_KlinerPerkens_2018_d0cblz.jpg"
        buttonOnClick={() => {
          router.push("/contact");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <ContentCardsSection
        color="white"
        size="medium"
        title="Featured Services"
        subtitle=""
      />
      <VideoSection
        color="white"
        size="medium"
        title="YodaCom Landing Page Video Production"
        subtitle="Example landing page video we produced for FixandFlip.com"
        embedUrl= "https://www.youtube.com/embed/l2eENaed8dM"
        //"https://res.cloudinary.com/yodacom/video/upload/v1570111400/fixandflipwithaudio4_uj2p6k.mp4"
      />
      <VideoSection
        color="white"
        size="medium"
        title="YodaCom Video Production"
        subtitle="Example landing page video we produced for Living Compass Puzzle"
        embedUrl="https://www.youtube.com/embed/wzYiHGJlNkk"
        //"https://www.youtube.com/embed/UexCU_gqr2E"
        //"https://res.cloudinary.com/yodacom/video/upload/v1570111400/fixandflipwithaudio4_uj2p6k.mp4"
      />
      <Footer
        color="white"
        size="normal"
        logo="https://res.cloudinary.com/yodacom/image/upload/v1554864573/yodacom/YodaComLogoTrans150x50_3x.png"
        copyright="© 2019 Yodacom"
      />
    </>
  );
}

export default HomePage;
