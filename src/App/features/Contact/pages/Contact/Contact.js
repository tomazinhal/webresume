import React, {Component} from 'react';
import ContactCard from '../../components/ContactCard/ContactCard';

import './Contact.scss'

class Contact extends Component {
    render(){
        return (
            <div id="contact-page">
                <ul>
                    <li className="contact-card">
                        <ContactCard media="linkedin" contact="linkein.com/in/someguy"/>
                    </li>
                    <li className="contact-card">
                        <ContactCard media="instagram" contact="instragram.com/whodatboii"/>
                    </li>
                    <li className="contact-card">
                        <ContactCard media="email" contact="who@dat.boi"/>
                    </li>
                    <li className="contact-card">
                        <ContactCard media="facebook" contact="facebook.com/yalredyknowhoitiz"/>
                    </li>
                    <li className="contact-card">
                        <ContactCard media="phone" contact="721712787"/>
                    </li>
                    <li className="contact-card">
                        <ContactCard media="twitter" contact="twitter.com/whodatboii"/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Contact;