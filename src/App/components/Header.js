import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../static/logo.svg';


class Header extends Component{
  state = {
    handle: ""
  }

  render(){
    const handle = this.state.handle;
    return (
      <header>
        <div className="container">
          <section className="header__image">
            <img src={logo} alt="logo"/>
          </section>
          <nav className="header__main-nav">
            <ul className="header__options">
              <li className="header__option">
                <NavLink exact to="/" activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li className="header__option">
                <NavLink to="/resume" activeClassName="active">
                  RESUME
                </NavLink>
              </li>
              <li className="header__option">
                <NavLink to="/contact" activeClassName="active">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;