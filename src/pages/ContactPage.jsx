import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../components/HeaderTwo";
import HeaderThree from "../components/HeaderThree";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Contact from "../components/Contact";
import ScrollToTop from "react-scroll-to-top";
import FooterThree from "../components/FooterThree";
const ContactPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      {/* <HeaderTwo category={true} /> */}
      <HeaderThree/>


      {/* Breadcrumb */}
      <Breadcrumb title={"Contact Us"} />

      {/* Contact */}
      <Contact />

      {/* ShippingOne */}
      {/* <ShippingOne /> */}

      {/* FooterTwo */}
      {/* <FooterTwo /> */}
      <FooterThree />

      {/* BottomFooter */}
      {/* <BottomFooter /> */}
    </>
  );
};

export default ContactPage;
