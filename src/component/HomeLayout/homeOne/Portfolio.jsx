import React, { Component } from 'react';
import Slider from 'react-slick';
import { portfolioSlick2 } from '../../../page-demo/script';

import ludoPic from '../../../assets/porfolio/web/ludo.png';
import ludoGif from '../../../assets/porfolio/web/ludo.gif';
import bhodiPic from '../../../assets/porfolio/web/bhodi.png';
import bhodiGif from '../../../assets/porfolio/web/bhodi.gif';
import abyssPic from '../../../assets/porfolio/web/abyss.png';
import abyssGif from '../../../assets/porfolio/web/abyss.gif';
import conferbotPic from '../../../assets/porfolio/web/conferbot.png';
import conferbotGif from '../../../assets/porfolio/web/conferbot.gif';
import drpaystubPic from '../../../assets/porfolio/web/drpaystub.png';
import drpaystubGif from '../../../assets/porfolio/web/drpaystub.gif';
import flowchartPic from '../../../assets/porfolio/web/flowchart.png';
import flowchartGif from '../../../assets/porfolio/web/flowchart.gif';
import movonicsPic from '../../../assets/porfolio/web/movonics.png';
import movonicsGif from '../../../assets/porfolio/web/movonics.gif';
import occuboundPic from '../../../assets/porfolio/web/occubound.png';
import occuboundGif from '../../../assets/porfolio/web/occubound.gif';
import cottagePic from '../../../assets/porfolio/app/cottage.png';
import cottageGif from '../../../assets/porfolio/app/cottage.gif';
import mommunityPic from '../../../assets/porfolio/app/mommunity.png';
import mommunityGif from '../../../assets/porfolio/app/mommunity.gif';
import order26Pic from '../../../assets/porfolio/app/order26.png';
import order26Gif from '../../../assets/porfolio/app/order26.gif';
import quickwashPic from '../../../assets/porfolio/app/quickwash.png';
import quickwashGif from '../../../assets/porfolio/app/quickwash.gif';

const PortfolioList = [
    {
        image: ludoPic,
        gif: ludoGif,
        category: 'Web Development',
        title: 'Ludo',
    },
    {
        image: cottagePic,
        gif: cottageGif,
        category: 'App Development',
        title: 'Cottage & Manor',
    },
    {
        image: drpaystubPic,
        gif: drpaystubGif,
        category: 'Web Development',
        title: 'Dr Pay Stub - Your reliable paystub',
    },
    {
        image: abyssPic,
        gif: abyssGif,
        category: 'Web Development',
        title: 'A Foot In The Door',
    },

    {
        image: flowchartPic,
        gif: flowchartGif,
        category: 'Web Development',
        title: 'Flowchart - Bot Builder',
    },
    {
        image: mommunityPic,
        gif: mommunityGif,
        category: 'App Development',
        title: 'Mommunity - A Moms Comunity',
    },
    {
        image: movonicsPic,
        gif: movonicsGif,
        category: 'Web Development',
        title: 'Movonics - Local Movers, Packers & Paint Services',
    },
    {
        image: quickwashPic,
        gif: quickwashGif,
        category: 'App Development',
        title: 'Quick Wash',
    },
    {
        image: occuboundPic,
        gif: occuboundGif,
        category: 'Web Development',
        title: 'Occubound - A Platform to Meet Recruiters Faster',
    },
    {
        image: order26Pic,
        gif: order26Gif,
        category: 'App Development',
        title: 'Order 26',
    },
    {
        image: conferbotPic,
        gif: conferbotGif,
        category: 'Web Development',
        title: 'Conferbot',
    },
    {
        image: bhodiPic,
        gif: bhodiGif,
        category: 'Web Development',
        title: 'Bhodi',
    },
];

class Portfolio extends Component {
    render() {
        let title = 'Our Works';
        // let description = 'Some of Our recently completed Projects.';
        return (
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h2>{title}</h2>
                                    {/* <p>{description}</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value, index) => {
                                return (
                                    <div key={value} className="portfolio">
                                        <div className="thumbnail-inner d-flex justify-content-center align-items-center">
                                            <div className="thumbnail" style={{ backgroundImage: `url(${value.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                            <div
                                                className="foreground"
                                                style={{
                                                    backgroundImage: `url(${value.gif})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'contain',
                                                    backgroundPosition: 'center',
                                                }}
                                            />
                                        </div>

                                        <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4>
                                                    {value.title}
                                                    {/* <a href="/portfolio-details"></a> */}
                                                </h4>
                                                {/* <div className="portfolio-button">
                                            <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                        </div> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Portfolio;
