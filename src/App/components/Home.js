import React, {Component} from 'react';

class Name extends Component{
  render(){
    return (
      <div id="user-name">
        <h1>YOUR NAME HERE</h1>
      </div>
    )
  }
}

class Introduction extends Component{
  render(){
    return (
      <div id="user-introduction">
        <p>Greetings this is the one and only, the unique, el classico... </p>
      </div>
    )
  }
}

export {Name, Introduction};