import React, { Component } from 'react';
import PageHelmet from '../component/common/Helmet';
import Breadcrumb from '../elements/common/Breadcrumb';
import { FiCast, FiLayers, FiUsers, FiMonitor, FiChevronUp } from 'react-icons/fi';
import ScrollToTop from 'react-scroll-up';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Business Stratagy',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        icon: <FiCast />,
        title: 'Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        icon: <FiMonitor />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
];
class Service extends Component {
    render() {
        return (
            <div className="active-dark">
                <PageHelmet pageTitle="Services" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                <Breadcrumb title={'Services'} />

                <div className="service-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Strategy</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceList.map((val, i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">{val.icon}</div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Service;
