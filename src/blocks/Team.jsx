import React from 'react';
import TeamOne from './team/TeamOne';

import PageHelmet from '../component/common/Helmet';
import Breadcrumb from '../elements/common/Breadcrumb';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

const Team = () => {
    return (
        <div className="active-dark">
            <PageHelmet pageTitle="Team" />
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            <Breadcrumb title={'Team'} />
            <main className="page-wrapper">
                <div className="rn-team-wrapper ptb--120 bg_color--1">
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
                            <TeamOne column="col-lg-3" teamStyle="" item="4" />
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

export default Team;
