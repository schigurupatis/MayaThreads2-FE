import React, { useEffect, useState } from "react";
import query from "jquery";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const HeaderThree = () => {
  const currentUser = useSelector((store) => store.user);
  // const currentUser = useSelector((store) => store.user?.user);
  // console.log("user from store is:", currentUser);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () =>  {
    try{
      await axios.post(BASE_URL + "/logout", {},
      {
        withCredentials: true,
      });
      dispatch(removeUser());
      //dispatch(removeFeed(feed));
      return navigate("/");
    }catch(err) {
      console.log("Erros is:", err);
    }
  }

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    const selectElement = query(".js-example-basic-single");
    selectElement.select2();

    return () => {
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);

  // Set the default language
  const [selectedLanguage, setSelectedLanguage] = useState("EngLish");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Set the default currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  return (
    <>
      {/*==================== Overlay Start ====================*/}
      <div className='overlay' />
      {/*==================== Overlay End ====================*/}
      {/*==================== Sidebar Overlay End ====================*/}
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
      {/*==================== Sidebar Overlay End ====================*/}

      {/* ==================== Search Box Start Here ==================== */}
      <form action='#' className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type='button'
          className='search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1'
        >
          <i className='ph ph-x' />
        </button>
        <div className='container'>
          <div className='position-relative'>
            <input
              type='text'
              className='form-control py-16 px-24 text-xl rounded-pill pe-64'
              placeholder='Search for a product or brand'
            />
            <button
              type='submit'
              className='w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
            >
              <i className='ph ph-magnifying-glass' />
            </button>
          </div>
        </div>
      </form>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here  ==================== done */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          menuActive && "active"
        }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type='button'
          className='close-button'
        >
          <i className='ph ph-x' />{" "}
        </button>
        <div className='mobile-menu__inner'>
          <Link to='/' className='mobile-menu__logo'>
            {/* <img src='assets/images/logo/logo.png' alt='Logo' /> */}
            <h3 className='m-0 text-orange'>MayaThreads</h3>
          </Link>
          <div className='mobile-menu__menu'>
            {/* Nav Menu Start */}
            <ul className='nav-menu flex-align nav-menu--mobile'>
            <li className='nav-menu__item activePage'>
                    <NavLink to='/' className='nav-menu__link'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-menu__item'>
                    <NavLink to='/tailers' className='nav-menu__link'>
                      Tailers
                    </NavLink>
                  </li>
                  <li className='nav-menu__item'>
                    <NavLink to='/shops' className='nav-menu__link'>
                      Shops
                    </NavLink>
                  </li>
                  <li className='nav-menu__item'>
                    <NavLink to='/services' className='nav-menu__link'>
                      Services
                    </NavLink>
                  </li>
              <li className='nav-menu__item'>
                <Link to='/contact' className='nav-menu__link'>
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Top Start ========================= */}
            <div className='header-top bg-main-600 flex-between d-none'>
              <div className='container container-lg'>
                <div className='flex-between flex-wrap gap-8'>
                  <ul className='flex-align flex-wrap d-none d-md-flex'>
                    <li className='border-right-item'>
                      <Link
                        to='#'
                        className='text-white text-sm hover-text-decoration-underline'
                      >
                        Become A Tailer
                      </Link>
                    </li>
                    <li className='border-right-item'>
                      <Link
                        to='#'
                        className='text-white text-sm hover-text-decoration-underline'
                      >
                        About us
                      </Link>
                    </li>
                    <li className='border-right-item'>
                      <Link
                        to='#'
                        className='text-white text-sm hover-text-decoration-underline'
                      >
                        Free Delivery
                      </Link>
                    </li>
                    <li className='border-right-item'>
                      <Link
                        to='#'
                        className='text-white text-sm hover-text-decoration-underline'
                      >
                        Returns Policy
                      </Link>
                    </li>
                  </ul>
                  <ul className='header-top__right flex-align flex-wrap'>
                    <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                      <Link to='#' className='text-white text-sm py-8'>
                        Help Center
                      </Link>
                      <ul className='on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                        <li className='nav-submenu__item'>
                          <Link
                            to='#'
                            className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          >
                            <span className='text-sm d-flex'>
                              <i className='ph ph-headset' />
                            </span>
                            Call Center
                          </Link>
                        </li>
                        <li className='nav-submenu__item'>
                          <Link
                            to='#'
                            className='nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          >
                            <span className='text-sm d-flex'>
                              <i className='ph ph-chat-circle-dots' />
                            </span>
                            Live Chat
                          </Link>
                        </li>
                      </ul>
                    </li>
                   
                    <li className='border-right-item'>
                      <Link
                        to='/account'
                        className='text-white text-sm py-8 flex-align gap-6'
                      >
                        <span className='icon text-md d-flex'>
                          {" "}
                          <i className='ph ph-user-circle' />{" "}
                        </span>
                        <span className='hover-text-decoration-underline'>
                          My Account
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ======================= Middle Top End ========================= */}
      {/* ======================= Middle Header Two Start ========================= */}
      <header className='header-middle style-two bg-color-neutral'>
        <div className='container container-lg'>
          <nav className='header-inner flex-between'>
            {/* Logo Start */}
            <div className='logo'>
              <Link to='/' className='link'>
                {/* <img src='assets/images/logo/logo-two.png' alt='Logo' /> */}
                <h3 className='m-0 text-white'>MayaThreads</h3>
              </Link>
            </div>
            {/* Logo End  */}
            {/* form Category Start */}
            <div className='flex-align gap-16'>
              
              <form
                action='#'
                className='flex-align flex-wrap form-location-wrapper'
              >
                <div className='search-category style-two d-flex h-48 search-form d-sm-flex d-none'  style={{borderRadius: "50px"}}>
                  <select
                    className='js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0'
                    name='state'
                  >
                    <option defaultValue={1}>
                      All Categories
                    </option>
                    <option value={1}>Tailer</option>
                    <option value={1}>Shops</option>
                    <option value={1}>City</option>
                    <option value={1}>Designs and Trends</option>
                    <option value={1}>Nearby Shops</option>
                  </select>
                  <div className='search-form__wrapper position-relative'>
                    <input
                      type='text'
                      className='search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0'
                      placeholder='Search for a tailer or shop'
                    />
                  </div>
                  <button
                    type='submit'
                    className='bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none'
                  >
                    <i className='ph ph-magnifying-glass' />
                  </button>
                </div>
                <div className='location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100'>
                <span className='text-gray-900 text-xl d-xs-flex d-none'>
                  <i className='ph ph-map-pin' />
                </span>
                <div className='line-height-1'>
                  <span className='text-gray-600 text-xs'>Your Location</span>
                  <div className='line-height-1'>
                    <select
                      defaultValue={1}
                      className='js-example-basic-single border border-gray-200 border-end-0'
                      name='state'
                    >
                      <option value="Anantapur">Anantapur</option>
                      <option value="Chittoor">Chittoor</option>
                      <option value="East Godavari">Kakinada</option>
                      <option value="Guntur">Guntur</option>
                      <option value="Krishna">Machilipatnam</option>
                      <option value="Kurnool">Kurnool</option>
                      <option value={1}>Nellore</option>
                      <option value="Prakasam">Ongole</option>
                      <option value="Srikakulam">Srikakulam</option>
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Vizianagaram">Vizianagaram</option>
                      <option value="West Godavari">Eluru</option>
                      <option value="YSR Kadapa">Kadapa</option>
                      <option value="Annamayya">Rayachoti</option>
                      <option value="Sri Sathya Sai">Puttaparthi</option>
                      <option value="Nandyal">Nandyal</option>
                      <option value="Palnadu">Narasaraopet</option>
                      <option value="Alluri Sitharama Raju">Paderu</option>
                      <option value="Parvathipuram Manyam">Parvathipuram</option>
                      <option value="Konaseema">Amalapuram</option>
                      <option value="Eluru">Eluru</option>
                      <option value="Bapatla">Bapatla</option>
                      <option value="NTR">Vijayawada</option>
                      <option value="Sri Balaji">Tirupati</option>
                      <option value="Kakinada">Kakinada</option>
                    </select>
                  </div>
                </div>
              </div>
              </form>
            </div>
            {/* form Category start */}
            {/* Header Middle Right start */}
            <div className='header-right flex-align d-lg-block d-none'>
              <div className='header-two-activities flex-align flex-wrap gap-32'>
                <button
                  type='button'
                  className='flex-align search-icon d-lg-none d-flex gap-4 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative item-hover__text'>
                    <i className='ph ph-magnifying-glass' />
                  </span>
                </button>
                {/* <Link
                  to='/signin'
                  className='flex-align flex-column gap-8 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative item-hover__text'>
                    <i className='ph ph-user' />
                  </span>
                  <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                    SignIn
                  </span>
                </Link> */}
                {currentUser ? (
                    <div className="flex-align flex-column gap-8 item-hover-two">
                      <span className="text-2xl text-white d-flex position-relative item-hover__text">
                        <i className="ph ph-user-circle" />
                      </span>
                      <span className="text-md text-white item-hover__text d-none d-lg-flex">
                        Welcome, {currentUser.username}
                      </span>
                      <button
                        onClick={handleLogout}
                        className="bg-transparent border-0 text-white text-md ms-2"
                        title="Logout"
                      >
                        <i className="ph ph-sign-out" />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/signin"
                      className="flex-align flex-column gap-8 item-hover-two"
                    >
                      <span className="text-2xl text-white d-flex position-relative item-hover__text">
                        <i className="ph ph-user" />
                      </span>
                      <span className="text-md text-white item-hover__text d-none d-lg-flex">
                        SignIn
                      </span>
                    </Link>
                  )}

                
              </div>
            </div>
            {/* Header Middle Right End  */}
          </nav>
        </div>
      </header>
      {/* ======================= Middle Header Two End ========================= */}
      {/* ==================== Header Two Start Here ==================== */}
      <header
        className={`header bg-white border-bottom border-gray-100 ${
          scroll && "fixed-header"
        }`}
      >
        <div className='container container-lg'>
          <nav className='header-inner d-flex justify-content-between gap-8'>
            <div className='flex-align menu-category-wrapper'>
              {/* Category Dropdown Start */}
              <div className='category-two d-none'>
                              <button
                                onClick={handleCategoryToggle}
                                type='button'
                                className='category__button flex-align gap-8 fw-medium bg-main-two-600 p-16 text-white'
                              >
                                <span className='icon text-2xl d-xs-flex d-none'>
                                  <i className='ph ph-dots-nine' />
                                </span>
                                <span className='d-sm-flex d-none'>All</span> Categories
                                <span className='arrow-icon text-xl d-flex'>
                                  <i className='ph ph-caret-down' />
                                </span>
                              </button>
                              <div
                                className={`responsive-dropdown cat common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 ${
                                  activeCategory && "active"
                                }`}
                              >
                                <button
                                  onClick={() => {
                                    handleCategoryToggle();
                                    setActiveIndexCat(null);
                                  }}
                                  type='button'
                                  className='close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex'
                                >
                                  <i className='ph ph-x' />{" "}
                                </button>
                                <div className='logo px-16 d-lg-none d-block'>
                                  <Link to='/' className='link'>
                                    <h3 className='m-0 text-orange'>MayaThreads</h3>
                                  </Link>
                                </div>
                                <ul className='scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto'>
  <li
    onClick={() => handleCatClick(0)}
    className={`has-submenus-submenu ${
      activeIndexCat === 0 ? "active" : ""
    }`}
  >
    <Link
      onClick={() => setActiveIndexCat(null)}
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-t-shirt' />
      </span>
      <span>Fashion</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div
      className={`submenus-submenu py-16 ${
        activeIndexCat === 0 ? "open" : ""
      }`}
    >
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Fashion
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Ethnic Wear</Link>
        </li>
        <li>
          <Link to='#'>Western Wear</Link>
        </li>
        <li>
          <Link to='#'>Accessories</Link>
        </li>
        <li>
          <Link to='#'>Footwear</Link>
        </li>
        <li>
          <Link to='#'>Seasonal Wear</Link>
        </li>
      </ul>
    </div>
  </li>
  <li
    onClick={() => handleCatClick(1)}
    className={`has-submenus-submenu ${
      activeIndexCat === 1 ? "active" : ""
    }`}
  >
    <Link
      onClick={() => setActiveIndexCat(null)}
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-pants' />
      </span>
      <span>Pants</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div
      className={`submenus-submenu py-16 ${
        activeIndexCat === 1 ? "open" : ""
      }`}
    >
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Pants
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Jeans</Link>
        </li>
        <li>
          <Link to='#'>Trousers</Link>
        </li>
        <li>
          <Link to='#'>Chinos</Link>
        </li>
        <li>
          <Link to='#'>Shorts</Link>
        </li>
        <li>
          <Link to='#'>Leggings</Link>
        </li>
        <li>
          <Link to='#'>Salwars</Link>
        </li>
      </ul>
    </div>
  </li>
  <li
    onClick={() => handleCatClick(2)}
    className={`has-submenus-submenu ${
      activeIndexCat === 2 ? "active" : ""
    }`}
  >
    <Link
      onClick={() => setActiveIndexCat(null)}
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-shirt-folded' />
      </span>
      <span>Shirts</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div
      className={`submenus-submenu py-16 ${
        activeIndexCat === 2 ? "open" : ""
      }`}
    >
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Shirts
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Formal Shirts</Link>
        </li>
        <li>
          <Link to='#'>Casual Shirts</Link>
        </li>
        <li>
          <Link to='#'>T-Shirts</Link>
        </li>
        <li>
          <Link to='#'>Kurtas</Link>
        </li>
        <li>
          <Link to='#'>Blouses</Link>
        </li>
      </ul>
    </div>
  </li>
  <li
    onClick={() => handleCatClick(3)}
    className={`has-submenus-submenu ${
      activeIndexCat === 3 ? "active" : ""
    }`}
  >
    <Link
      onClick={() => setActiveIndexCat(null)}
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-graduation-cap' />
      </span>
      <span>School Uniforms</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div
      className={`submenus-submenu py-16 ${
        activeIndexCat === 3 ? "open" : ""
      }`}
    >
      <h6 className='text-lg px-16 submenus-submenu__title'>
        School Uniforms
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Shirts & Pants</Link>
        </li>
        <li>
          <Link to='#'>Skirts & Tunics</Link>
        </li>
        <li>
          <Link to='#'>Sports Uniforms</Link>
        </li>
        <li>
          <Link to='#'>Accessories</Link>
        </li>
      </ul>
    </div>
  </li>
  <li
    onClick={() => handleCatClick(4)}
    className={`has-submenus-submenu ${
      activeIndexCat === 4 ? "active" : ""
    }`}
  >
    <Link
      onClick={() => setActiveIndexCat(null)}
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-dress' />
      </span>
      <span>Sarees</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div
      className={`submenus-submenu py-16 ${
        activeIndexCat === 4 ? "open" : ""
      }`}
    >
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Sarees
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Silk Sarees</Link>
        </li>
        <li>
          <Link to='#'>Cotton Sarees</Link>
        </li>
        <li>
          <Link to='#'>Designer Sarees</Link>
        </li>
        <li>
          <Link to='#'>Chiffon Sarees</Link>
        </li>
        <li>
          <Link to='#'>Georgette Sarees</Link>
        </li>
      </ul>
    </div>
  </li>
  <li
    onClick={() => handleCatClick(5)}
    className={`has-submenus-submenu ${
      activeIndexCat === 5 ? "active" : ""
    }`}
  >
    <Link
      onClick={() => setActiveIndexCat(null)}
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-dress' />
      </span>
      <span>Ladies Dresses</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div
      className={`submenus-submenu py-16 ${
        activeIndexCat === 5 ? "open" : ""
      }`}
    >
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Ladies Dresses
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Anarkali Suits</Link>
        </li>
        <li>
          <Link to='#'>Lehengas</Link>
        </li>
        <li>
          <Link to='#'>Gowns</Link>
        </li>
        <li>
          <Link to='#'>Kurtis</Link>
        </li>
        <li>
          <Link to='#'>Maxi Dresses</Link>
        </li>
      </ul>
    </div>
  </li>
  <li
    onClick={() => handleCatClick(6)}
    className={`has-submenus-submenu ${
      activeIndexCat === 6 ? "active" : ""
    }`}
  >
    <Link
      onClick={() => setActiveIndexCat(null)}
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-baby' />
      </span>
      <span>Kids Wear</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div
      className={`submenus-submenu py-16 ${
        activeIndexCat === 6 ? "open" : ""
      }`}
    >
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Kids Wear
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Infant Wear</Link>
        </li>
        <li>
          <Link to='#'>Girls Dresses</Link>
        </li>
        <li>
          <Link to='#'>Boys Clothing</Link>
        </li>
        <li>
          <Link to='#'>Ethnic Kids Wear</Link>
        </li>
        <li>
          <Link to='#'>Party Wear</Link>
        </li>
      </ul>
    </div>
  </li>
  </ul>
                              </div>
                            </div>
                            <div className='category d-none d-lg-block on-hover-item bg-main-600 text-white'>
                              <button
                                type='button'
                                className='category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-white'
                              >
                                <span className='icon text-2xl d-xs-flex d-none'>
                                  <i className='ph ph-dots-nine' />
                                </span>
                                <span className='d-sm-flex d-none'>All</span> Categories
                                <span className='arrow-icon text-xl d-flex'>
                                  <i className='ph ph-caret-down' />
                                </span>
                              </button>
                              <div className='responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper'>
                                <button
                                  type='button'
                                  className='close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex'
                                >
                                  <i className='ph ph-x' />{" "}
                                </button>
                                <div className='logo px-16 d-lg-none d-block'>
                                  <Link to='/' className='link'>
                                    <img src='assets/images/logo/logo.png' alt='Logo' />
                                  </Link>
                                </div>
                                <ul className='scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto'>
  <li className='has-submenus-submenu'>
    <Link
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-t-shirt' />
      </span>
      <span>Fashion</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div className='submenus-submenu py-16'>
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Fashion
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Ethnic Wear</Link>
        </li>
        <li>
          <Link to='#'>Western Wear</Link>
        </li>
        <li>
          <Link to='#'>Accessories</Link>
        </li>
        <li>
          <Link to='#'>Footwear</Link>
        </li>
        <li>
          <Link to='#'>Seasonal Wear</Link>
        </li>
      </ul>
    </div>
  </li>
  <li className='has-submenus-submenu'>
    <Link
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-pants' />
      </span>
      <span>Pants</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div className='submenus-submenu py-16'>
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Pants
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Jeans</Link>
        </li>
        <li>
          <Link to='#'>Trousers</Link>
        </li>
        <li>
          <Link to='#'>Chinos</Link>
        </li>
        <li>
          <Link to='#'>Shorts</Link>
        </li>
        <li>
          <Link to='#'>Leggings</Link>
        </li>
        <li>
          <Link to='#'>Salwars</Link>
        </li>
      </ul>
    </div>
  </li>
  <li className='has-submenus-submenu'>
    <Link
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-shirt-folded' />
      </span>
      <span>Shirts</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div className='submenus-submenu py-16'>
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Shirts
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Formal Shirts</Link>
        </li>
        <li>
          <Link to='#'>Casual Shirts</Link>
        </li>
        <li>
          <Link to='#'>T-Shirts</Link>
        </li>
        <li>
          <Link to='#'>Kurtas</Link>
        </li>
        <li>
          <Link to='#'>Blouses</Link>
        </li>
      </ul>
    </div>
  </li>
  <li className='has-submenus-submenu'>
    <Link
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-graduation-cap' />
      </span>
      <span>School Uniforms</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div className='submenus-submenu py-16'>
      <h6 className='text-lg px-16 submenus-submenu__title'>
        School Uniforms
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Shirts & Pants</Link>
        </li>
        <li>
          <Link to='#'>Skirts & Tunics</Link>
        </li>
        <li>
          <Link to='#'>Sports Uniforms</Link>
        </li>
        <li>
          <Link to='#'>Accessories</Link>
        </li>
      </ul>
    </div>
  </li>
    <li className='has-submenus-submenu'>
    <Link
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-dress' />
      </span>
      <span>Sarees</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div className='submenus-submenu py-16'>
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Sarees
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Silk Sarees</Link>
        </li>
        <li>
          <Link to='#'>Cotton Sarees</Link>
        </li>
        <li>
          <Link to='#'>Designer Sarees</Link>
        </li>
        <li>
          <Link to='#'>Chiffon Sarees</Link>
        </li>
        <li>
          <Link to='#'>Georgette Sarees</Link>
        </li>
      </ul>
    </div>
  </li>
  <li className='has-submenus-submenu'>
    <Link
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-dress' />
      </span>
      <span>Ladies Dresses</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div className='submenus-submenu py-16'>
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Ladies Dresses
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Anarkali Suits</Link>
        </li>
        <li>
          <Link to='#'>Lehengas</Link>
        </li>
        <li>
          <Link to='#'>Gowns</Link>
        </li>
        <li>
          <Link to='#'>Kurtis</Link>
        </li>
        <li>
          <Link to='#'>Maxi Dresses</Link>
        </li>
      </ul>
    </div>
  </li>
  <li className='has-submenus-submenu'>
    <Link
      to='#'
      className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
    >
      <span className='text-xl d-flex'>
        <i className='ph ph-baby' />
      </span>
      <span>Kids Wear</span>
      <span className='icon text-md d-flex ms-auto'>
        <i className='ph ph-caret-right' />
      </span>
    </Link>
    <div className='submenus-submenu py-16'>
      <h6 className='text-lg px-16 submenus-submenu__title'>
        Kids Wear
      </h6>
      <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
        <li>
          <Link to='#'>Infant Wear</Link>
        </li>
        <li>
          <Link to='#'>Girls Dresses</Link>
        </li>
        <li>
          <Link to='#'>Boys Clothing</Link>
        </li>
        <li>
          <Link to='#'>Ethnic Kids Wear</Link>
        </li>
        <li>
          <Link to='#'>Party Wear</Link>
        </li>
      </ul>
    </div>
  </li>
</ul>
                              </div>
                            </div>
              {/* Category Dropdown End  */}
              {/* Menu Start  */}
              <div className='header-menu d-lg-block d-none'>
                {/* Nav Menu Start */}
                <ul className='nav-menu flex-align '>
                <li className='nav-menu__item activePage'>
                    <NavLink to='/' className='nav-menu__link'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-menu__item'>
                    <NavLink to='/tailers' className='nav-menu__link'>
                      Tailers
                    </NavLink>
                  </li>
                  <li className='nav-menu__item'>
                    <NavLink to='/shops' className='nav-menu__link'>
                      Shops
                    </NavLink>
                  </li>
                  <li className='nav-menu__item'>
                    <NavLink to='/services' className='nav-menu__link'>
                      Services
                    </NavLink>
                  </li>
                  
                  <li className='nav-menu__item'>
                    <NavLink to='/contact' className='nav-menu__link'>
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
            {/* Header Right start */}
                        <div className='header-right flex-align'>
                          <Link
                            to='/tel:01234567890'
                            className='bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none'
                          >
                            <div className='d-flex text-32'>
                              <i className='ph ph-phone-call' />
                            </div>
                            01- 234 567 890
                          </Link>
                          <div className='me-16 d-lg-none d-block'>
                            <div className='flex-align flex-wrap gap-12'>
                              <button
                                onClick={handleSearchToggle}
                                type='button'
                                className='search-icon flex-align d-lg-none d-flex gap-4 item-hover'
                              >
                                <span className='text-2xl text-gray-700 d-flex position-relative item-hover__text'>
                                  <i className='ph ph-magnifying-glass' />
                                </span>
                              </button>
                              
                            </div>
                          </div>
                          <button
                            onClick={handleMenuToggle}
                            type='button'
                            className='toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex'
                          >
                            {" "}
                            <i className='ph ph-list' />{" "}
                          </button>
                        </div>
                        {/* Header Right End  */}
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderThree;
