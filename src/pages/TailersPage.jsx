import React from "react";
import Preloader from "../helper/Preloader";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import ShopSection from "../components/ShopSection";
import ShippingTwo from "../components/ShippingTwo";
import FooterTwo from "../components/FooterTwo";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";

const TailersPage = () => {

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      {/* <HeaderTwo category={true} /> */}
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Tailers List"} />

      {/* ShopSection */}
      <ShopSection />

      {/* ShippingTwo */}
      {/* <ShippingTwo /> */}

      {/* FooterTwo */}
      {/* <FooterTwo /> */}
      <FooterThree />


    </>
  );
};

export default TailersPage;
