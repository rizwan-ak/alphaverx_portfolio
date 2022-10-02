import React, { Component } from "react";
import { FaWhatsapp } from "react-icons/fa";

const SocialShare = [
  {
    Social: <FaWhatsapp />,
    link: "https://wa.me/+923044145274/?text=Hey Alphaverx, I need ... ",
  },
];
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Ready To order?</span>
                    <h2 className="mt-3">
                      Let's get <br /> to work
                    </h2>
                    {/* <a className="rn-button-style--2" href="/contact">
                                            <span>Contact Us</span>
                                        </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Link</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/portfolio">Work</a></li>
                                                    <li><a href="/about">About</a></li>
                                                    <li><a href="/contact">Let's Talk</a></li>
                                                </ul>
                                            </div>
                                        </div> */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Say Hello</h4>
                        <ul className="ft-link">
                          {/* <li>
                                                        <a href="mailto:admin@example.com">sales@alphaverx.com</a>
                                                    </li> */}
                          <li>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="mailto:support@alphaverx.com"
                            >
                              support@alphaverx.com
                            </a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a
                                  rel="noopener noreferrer"
                                  href={`${val.link}`}
                                >
                                  {val.Social}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>Copyright © 2020 Alphaverx. All Rights Reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
