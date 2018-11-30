import React, { Component } from 'react';

import linkedin from '../../../../static/image/linkedin.png';
import instagram from '../../../../static/image/instagram.png';
import twitter from '../../../../static/image/twitter.png';
import facebook from '../../../../static/image/facebook.png';
import email from '../../../../static/image/email.png';
import phone from '../../../../static/image/phone.png';
import other from '../../../../static/image/other.png';

class ContactCard extends Component {
  constructor(props) {
    super(props);
    let src;
    switch (this.props.media) {
      case "linkedin":
        src = linkedin;
        break;
      case "instagram":
        src = instagram;
        break;
      case "facebook":
        src = facebook;
        break;
      case "twitter":
        src = twitter;
        break;
      case "email":
        src = email;
        break;
      case "phone":
        src = phone;
        break;
      default:
        src = other;
    }
    this.info = {
      media: this.props.media,
      logo_link: src,
      contact: this.props.contact,
    }
  }

  render() {
    let info = this.info;
    return ( 
      <div className="card-container" id={info.media}>
        <ul>
          <li>
            <img src={info.logo_link} alt="Media Logo" />
          </li>
          <li>
            <p>{info.contact}</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default ContactCard;
