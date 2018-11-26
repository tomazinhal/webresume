import React, {Component} from 'react';
import {Name, Introduction} from '../components/Home';

class Home extends Component{
    render(){
        return (
            <div>
                <Name />
                <Introduction />
            </div>
        )
    }
}

export default Home;