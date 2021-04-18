import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import contactPic from '../../assets/pics/contact1.png';

class ContactTwo extends Component {
    state = {
        rnName: '',
        rnEmail: '',
        rnSubject: '',
        rnMessage: '',
    };
    submit = async evt => {
        evt.preventDefault();
        if (this.state.rnEmail.trim() !== '' && this.state.rnSubject.trim() !== '' && this.state.rnMessage.trim() !== '') {
            let templateParams = {
                from_name: this.state.rnName.trim(),
                to_name: 'alphaverx@gmail.com',
                reply_to: this.state.rnEmail.trim(),
                subject: this.state.rnSubject,
                message: this.state.rnMessage,
            };
            emailjs.send('service_mlkg4mu', 'template_jww2ilj', templateParams, 'user_oTl2M5rE4PVPWMf7NnDl1');
            //   let templateParams2 = {
            //     from_name: 'ibrahimnabi80@gmail.com',
            //     to_name: this.state.email.trim(),
            //     subject: 'Response',
            //     message_html:
            //       'We received your message and we will reply soon. Your inquiry id is 001'
            //   };
            //   emailjs.send(
            //     'reserve_contact',
            //     'template_KiH1F4zS',
            //     templateParams2,
            //     'user_aVbbjsfKbS0Qub1NMA29M'
            //   );
            alert('We received your message and we will reply soon');
            // this.props.history.push('/');
        } else {
            alert('Please fill all field before submitting.');
        }
    };

    render() {
        return (
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact Us.</h2>
                                {/* <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p> */}
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={this.submit}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={e => {
                                                this.setState({ rnName: e.target.value });
                                            }}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={e => {
                                                this.setState({ rnEmail: e.target.value });
                                            }}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={e => {
                                                this.setState({ rnSubject: e.target.value });
                                            }}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={e => {
                                                this.setState({ rnMessage: e.target.value });
                                            }}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src={contactPic} alt="trydo" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactTwo;
