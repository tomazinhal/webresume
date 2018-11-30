import React, {Component} from 'react';
import {SingleContact} from '../components/Contact';

import '../styles/Contact.scss'

class Contact extends Component {
    render(){
        return (
            <div id="contact-page">
                <ul>
                    <li className="contact-card">
                        <SingleContact media="linkedin" contact="linkein.com/in/someguy"/>
                    </li>
                    <li className="contact-card">
                        <SingleContact media="instagram" contact="instragram.com/whodatboii"/>
                    </li>
                    <li className="contact-card">
                        <SingleContact media="email" contact="who@dat.boi"/>
                    </li>
                    <li className="contact-card">
                        <SingleContact media="facebook" contact="facebook.com/yalredyknowhoitiz"/>
                    </li>
                    <li className="contact-card">
                        <SingleContact media="phone" contact="721712787"/>
                    </li>
                    <li className="contact-card">
                        <SingleContact media="twitter" contact="twitter.com/whodatboii"/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Contact;