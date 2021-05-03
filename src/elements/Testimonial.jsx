import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import clientPic from '../assets/clients/client.png';
import ridzwanPic from '../assets/clients/ridzwan.jpg';
import zaidPic from '../assets/clients/zaid.jpg';
import yansienPic from '../assets/clients/yansien.jpg';
import julianPic from '../assets/clients/julian.jpg';
import emanPic from '../assets/clients/eman.jpg';
import sentilPic from '../assets/clients/eman.jpg';

class Testimonial extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>
                                            Wow! a very talented, professional and mostly helpful seller. went FAR beyond my expectations! I can't thank you enough..and eager to
                                            continue working with you..Kudos!
                                        </p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Julian White</span> - Germany
                                        </h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Highly recommended! Simply put, Alphaverx is absolutely one of the best developers I know on the platform, without a doubt.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>jansien </span> - Netherlands
                                        </h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Team Alpha exceeded my expectations, will definitly use the team again</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Eman weri </span> - Australia
                                        </h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Another best experience with a talented team, they done exactly what I was expecting on time. Highly Recommended!</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>zaid hayat</span> - Pakistan
                                        </h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Fast and Great work! Best of the best. Highly recommended, Working again with them!</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Ridzwan Zin</span> - Singapore
                                        </h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Did a good job and provided support on deployment.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Senthil Krishnapillai</span> - Canada
                                        </h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>
                                            I would definitely come back again for their services, their professionalism and patience are beyond my expectations. If you happen to
                                            see this, why don't you give them a try.
                                        </p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>kevin weng </span> - Malaysia
                                        </h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>
                                            I could not ask for better communication or responsiveness. I like that they also recommended solutions that were based on quality
                                            outcomes rather than what was convenient for them.{' '}
                                        </p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Keith Francis</span> - United States
                                        </h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>
                                            We worked with an exceptional full stack developer that worked super fast while also making sure that the quality of the delivered code
                                            was great. Was able to quickly iterate and change direction during his work with us. Perfect person to work with in a fast-paced startup
                                            environment.{' '}
                                        </p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Robrecht Le Roy</span> - United Kingdom
                                        </h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={julianPic} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={yansienPic} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={emanPic} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={zaidPic} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={ridzwanPic} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={sentilPic} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={clientPic} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={clientPic} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={clientPic} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Testimonial;
