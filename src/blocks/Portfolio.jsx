import React from 'react';
import PageHelmet from '../component/common/Helmet';
import Breadcrumb from '../elements/common/Breadcrumb';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Slider from 'react-slick';
import { slickDot } from '../page-demo/script';

const list = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show',
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show',
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show',
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show',
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show',
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show',
    },
];

const Portfolio = () => {
    return (
        <div className="active-dark">
            <PageHelmet pageTitle="Portfolio" />
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            <Breadcrumb title={'Portfolio'} />

            <main className="page-wrapper">
                <div className="portfolio-area pt--90 pb--140 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                    <h2 className="title">All Works</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value, index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4>
                                                                <a href="/portfolio-details">{value.title}</a>
                                                            </h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/portfolio-details">
                                                                    Case Study
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;
