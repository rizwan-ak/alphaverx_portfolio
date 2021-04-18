import React, { Component } from 'react';

const ServiceList = [
    {
        icon: '01',
        title: 'COMPETENT DEVELOPERS',
        description:
            'Alphaverx is a team of certified developers, expert engineers, and designers competent enough to handle any big or small task. Each team member backs years of experience, which makes them proficient enough to offer the best solution to the customers.',
    },
    {
        icon: '02',
        title: 'STATE OF THE ART TECHNOLOGY',
        description:
            'We believe in going with the flow; therefore, we are always open to new technology. Every service at Alphaverx caters to modern technology standards. Spill out your concerns and we promise to come up with the best out of it.',
    },
    {
        icon: '03',
        title: 'EXCELLENT CUSTOMER SERVICE',
        description:
            'We believe that the customer is the ultimate authority, and the foremost priority of our business; therefore, our dedicated team is all set to assist you 24/7. Share your queries with us, and our experts will offer a prompt solution.',
    },
];

class ServiceOne extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {ServiceList.map((val, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency" />
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}
export default ServiceOne;
