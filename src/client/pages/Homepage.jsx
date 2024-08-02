import React from "react";
import Navbar from "../components/Navbar";
import BannerCrousle from "../components/Banner_Crousle";
import Services from "../components/section/Services";
import WhatWeServe from "../components/section/What_we_serve";
import ContactForm from "../components/section/Contact_Form";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <Navbar></Navbar>
      <BannerCrousle />
      <Services />
      <WhatWeServe />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Homepage;
