import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Resume from "../resume/ResumeAnimation";
import Portfolio from "../portfolio/Portfolio";
import ContactUs from "../Contact/ContactUs";
import ScrollToTop from "../ScrollToTop";
import WhatIDo from "../WhatIDo/WhatIDo";

const Layout = () => {
  return (
    <div className="layout">
      <Header></Header>
      <Slider></Slider>
      <About></About>
      <Resume></Resume>
      <Portfolio></Portfolio>
      {/* <WhatIDo></WhatIDo> */}
      <ContactUs></ContactUs>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
