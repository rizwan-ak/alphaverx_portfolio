import React, { Component } from 'react';

import AboutUs from '../../../assets/pics/about.png';

class AboutTwo extends Component {
    render() {
        let title = 'About Us',
            description =
                'Alphaverx is a high-end technology enterprise with extensive experience in the information & technology business. With the utmost efforts of experienced individuals, we are highly focused on empowering clients to take their products from inception to development.';
        const description2 =
            ' With years of experience in our domain, we are very capable of developing Games as well as providing Web/Mobile services like none other. We offer high-quality services, on time and within the defined budget For us, client`s success is our success!';
        return (
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center justift-content-center">
                            <div className="col-lg-5 col-md-12">
                                <img className="w-100" src={AboutUs} alt="About Images" />
                                {/* <div className="thumbnail"></div> */}
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                        <p className="description">{description2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AboutTwo;
