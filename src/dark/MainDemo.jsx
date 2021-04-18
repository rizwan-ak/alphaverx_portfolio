import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

import SliderOne from '../component/slider/SliderOne';
import ServiceTwo from '../elements/service/ServiceTwo';
import CounterOne from '../elements/counters/CounterOne';
import Testimonial from '../elements/Testimonial';
import About from '../component/HomeLayout/homeOne/AboutTwo';
import Portfolio from '../component/HomeLayout/homeOne/Portfolio';
// import BrandTwo from '../elements/BrandTwo';
import ContactTwo from '../elements/contact/ContactTwo';

import logo from '../assets/logo/lightLogo.png';
import Test from '../assets/pics/test.jpg';

import TeamOne from '../blocks/team/TeamOne';

class MainDemo extends Component {
    render() {
        return (
            <div className="active-dark">
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                <div className="prv-banner-wrapper bg_color--1" style={{ backgroundImage: `url(${Test})` }}>
                    <div className="container-fluid">
                        <div className="plr--120">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5">
                                    <div className="inner">
                                        <div className="text-left">
                                            <a href="/">
                                                <img src={logo} alt="Alphaverx" height={200} width={300} style={{ objectFit: 'contain' }} />
                                            </a>
                                        </div>
                                        {/* <h1>Welcome to Alphaverx</h1> */}
                                        <p className="title">We go beyond the limit and bring the best possible solution to scale your business, your growth and the future</p>
                                        <div className="purshase-btn">
                                            <a href="/contact" className="rn-button-style--2 btn-solid">
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fullscreen empty-div gradient-overlay"></div>

                <div className="main-wrapper bg_color--5" id="demo">
                    <div className="slider-wrapper">
                        <SliderOne />
                    </div>
                    <div id="about-us" className="about-area about-position-top pb--120 bg_color--1">
                        <About />
                    </div>
                    <div id="services" className="service-area ptb--80  bg_image bg_image--3">
                        <div className="container">
                            <ServiceTwo />
                        </div>
                    </div>
                    <div id="portfolio" className="portfolio-area ptb--120 bg_color--1">
                        <div className="portfolio-sacousel-inner mb--55">
                            <Portfolio />
                        </div>
                    </div>
                    <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <h3 className="fontWeight500">Fun Facts</h3>
                                    </div>
                                </div>
                            </div>
                            <CounterOne />
                        </div>
                    </div>

                    <main id="team" className="page-wrapper bg_color--5">
                        <div className="rn-team-wrapper ptb--120">
                            <div className="rn-team-area">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title text-center mb--30">
                                                <h2>Our Skilled Team</h2>
                                                <p>
                                                    There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <TeamOne column="col-lg-3" teamStyle="" item="8" />
                                </div>
                            </div>
                        </div>
                    </main>
                    <div id="testimonials" className="rn-testimonial-area bg_color--5 ptb--120">
                        <div className="container">
                            <Testimonial />
                        </div>
                    </div>

                    {/* <div className="rn-brand-area brand-separation pb--120 bg_color--5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <BrandTwo />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div id="contact-us" className="rn-brand-area brand-separation pb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ContactTwo />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="backto-top">
                        <ScrollToTop showUnder={160}>
                            <FiChevronUp />
                        </ScrollToTop>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default MainDemo;
