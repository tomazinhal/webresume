import React, {Component} from 'react';
import {Name, Introduction} from '../components/Home';

class Home extends Component{
    render(){
        return (
            <div id="home-page">
                <Name />
                <Introduction />
            </div>
        )
    }
}

export default Home;