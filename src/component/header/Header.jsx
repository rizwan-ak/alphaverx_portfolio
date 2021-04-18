import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo/lightLogo.png';

class Header extends Component {
    componentDidMount() {
        window.addEventListener('load', function () {});
    }

    menuTrigger = () => {
        document.querySelector('.header-wrapper').classList.toggle('menu-open');
    };

    CLoseMenuTrigger = () => {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    };

    render() {
        const { color = 'default-color' } = this.props;
        return (
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} alt="Alphaverx" height={125} />
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <a href="#about-us">About</a>
                                </li>
                                <li>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <a href="#team">Team</a>
                                </li>
                                <li>
                                    <a href="#testimonials">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#contact-us">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white">
                                <FiMenu />
                            </span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                                <FiX />
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;
