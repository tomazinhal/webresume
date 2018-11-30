import React, {Component} from 'react';

class Home extends Component{

  state = {
    name: {
      first: "",
      last: "",
    },
    birthdate: "",
    description: ""
  }

  render(){
    const name = this.state.name.first + " " + this.state.name.last
    const dob = this.state.birthdate
    const description = this.state.description
    return (
      <div id="home-page">
        <div id="user-name">
          <h1>IT'S YA BOI {name}</h1>
          <h2>Born in {dob}</h2>
          <p>About me: <br/>{description}</p>
        </div>
      </div>
    )
  }
}

export default Home;