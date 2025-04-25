import React from "react";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import HeaderThree from "../components/HeaderThree";
import BreadcrumbThree from "../components/BreadcrumbThree";
import VendorsList from "../components/VendorsList";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterOne from "../components/FooterOne";
import FooterThree from "../components/FooterThree";
import BottomFooter from "../components/BottomFooter";

const VendorPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color='#FA6400' />

      {/* HeaderOne */}
      <HeaderThree/>

      {/* BreadcrumbThree */}
      <BreadcrumbThree title={"Tailers List"} />

      {/* VendorsList */}
      <VendorsList />

      {/* ShippingOne */}
      {/* <ShippingOne /> */}

      {/* NewsletterOne */}
      {/* <NewsletterOne /> */}

      {/* FooterOne */}
      <FooterThree />

      {/* BottomFooter */}
      {/* <BottomFooter /> */}
    </>
  );
};

export default VendorPage;
