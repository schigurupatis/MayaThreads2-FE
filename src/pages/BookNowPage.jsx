import React from "react";
import Preloader from "../helper/Preloader";

// import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
// import FooterTwo from "../components/FooterTwo";
// import BottomFooter from "../components/BottomFooter";
// import ShippingOne from "../components/ShippingOne";
// import Account from "../components/Account";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
// import Login from "../components/Login";
// import Registration from "../components/Registration";
import BookNow from "../components/BookNow";


const BookNowPage = () => {



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
      <HeaderThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Book Now"} />

      {/* Account */}
      <BookNow />

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

export default BookNowPage;
