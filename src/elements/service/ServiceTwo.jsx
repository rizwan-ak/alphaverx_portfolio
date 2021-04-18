import React, { Component } from 'react';
import { FaGamepad, FaMobileAlt, FaDesktop, FaBriefcase } from 'react-icons/fa';

const ServiceList = [
    {
        icon: <FaDesktop />,
        title: 'Website Development',
        description:
            'Our team of full stack developers are all geared up to build custom web applications to uplift your reputation in the digital market. Our aim is to produce highly maintained web applications to surpass your expectations.',
    },
    {
        icon: <FaMobileAlt />,
        title: 'Mobile App Development',
        description:
            'Applications are one of the quickest and most effective way to utilize technology. We develop pixel-perfect apps. We are making the process simpler, and providing easy, smart and user friendly mobile applications.',
    },
    {
        icon: <FaGamepad />,
        title: 'Game Development',
        description:
            'Gaming has been a great source of entertainment ever since. We have set-up a standard in the world of gamification by facilitating clients with world class multiplayer & singleplayer games using Unity 3D and Photon.',
    },
    {
        icon: <FaBriefcase />,
        title: 'Software Consultancy',
        description:
            'We aid our clients develop a better idea about their requirements and how it may exactly give a boost to their businesses. If you have an idea that could be a game changer, we can help you bring it to life.',
    },
];

class ServiceTwo extends Component {
    render() {
        let title = 'Expertise',
            description = 'We provide a variety of modern development services that will boost your businesses in no time.';
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="#contact-us">
                                    <span className="text">Send us a request</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map((val, i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <div className="service service__style--2">
                                        <div className="icon">{val.icon}</div>
                                        <div className="content">
                                            <h3 className="title">{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ServiceTwo;
