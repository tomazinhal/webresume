import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';


class Header extends Component{
    render(){
        return (
            <header>
                <nav>
					<ul id="header-ul">
						<li className="header-li">
							<NavLink exact to="/" activeClassName="active">
								<h1>HOME</h1>
							</NavLink>
						</li>
						<li className="header-li">
							<NavLink to="/resume" activeClassName="active">
								<h1>RESUME</h1>
							</NavLink>
						</li>
						<li className="header-li">
							<NavLink to="/contact" activeClassName="active">
								<h1>CONTACT</h1>
							</NavLink>
						</li>
					</ul>
                </nav>
            </header>
        )
    }
}

export default Header;