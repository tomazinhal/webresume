import React, {Component} from 'react';
import linkedin from '../static/linkedin.png';
import instagram from '../static/instagram.png';
import twitter from '../static/twitter.png';
import facebook from '../static/facebook.png';
import email from '../static/email.png';
import phone from '../static/phone.png';
import other from '../static/other.png';

class SingleContact extends Component{
    constructor(props){
        super(props);
        let src;
        switch(this.props.media){
            case "linkedin": src = linkedin; break;
            case "instagram": src = instagram; break;
            case "facebook": src = facebook; break;
            case "twitter": src = twitter; break;
            case "email": src = email; break;
            case "phone": src = phone; break;
            default: src = other;
        }
        this.info = {
            media: this.props.media,
            logo_link: src,
            contact: this.props.contact,
        }
    }

    render(){
        let info = this.info;
        console.log(info)
        return (
            <div id={info.media}>
                <img src={info.logo_link} alt="Media Logo" />
                <p>{info.contact}</p>
            </div>
        )
    }
}

export {SingleContact};