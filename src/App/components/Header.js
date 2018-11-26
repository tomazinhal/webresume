import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <h1>HOME</h1>
                            </Link>
                            <Link to="/resume">
                                <h1>RESUME</h1>
                            </Link>
                            <Link to="/contact">
                                <h1>CONTACT</h1>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;