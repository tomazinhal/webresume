import React, {Component} from 'react';
import {SingleContact} from '../components/Contact';

class Contact extends Component {
    render(){
        return (
            <div id="contact-page">
                <SingleContact media="linkedin" contact="linkein.com/in/someguy"/>
                <SingleContact media="instagram" contact="instragram.com/whodatboii"/>
                <SingleContact media="email" contact="who@dat.boi"/>
            </div>
        )
    }
}

export default Contact;