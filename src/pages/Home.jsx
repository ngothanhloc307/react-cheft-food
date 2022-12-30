import React, { Fragment } from "react";
import ChooseUs from "../components/choose-us/ChooseUs";
import Header from "../components/header/Header";
import HeroSlider from "../components/hero-slider/HeroSlider";
import MenuPack from "../components/MenuPack/MenuPack";
import PopularMenu from "../components/popular-menu/PopularMenu";
import Testimonials from "../components/testimonials/Testimonials";
import Download from "../components/download-section/Download";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Fragment  >
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonials />
      <Download />
      <Footer />
    </Fragment >);
};

export default Home;
