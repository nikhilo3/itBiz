import React from "react";
import Navbar from "../components/Navbar";
import ContactUs from "../components/section/ContactUs";
import Contact_Form from "../components/section/Contact_Form";
import Footer from '../../client/components/Footer'

function ContactPage() {
  return (
    <>
      <Navbar contactPage={true} />
      <ContactUs />
      <Contact_Form/>
      <Footer/>
    </>
  );
}

export default ContactPage;
