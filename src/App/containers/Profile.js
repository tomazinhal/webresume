import React, {Component} from 'react';

class Profile extends Component{
    state = {
        personal: {},
        resume: [],
        contact: []
    }
    componentDidMount(){
        const handle = this.props.match.params.handle;
        const url = `http://localhost:5000/u/${handle}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const parsed = JSON.parse(data);
            this.setState({
                personal: parsed['personal'],
                resume: parsed['resume'],
                contact: parsed['contact']
            });
        });
    }
    render(){
        //const state = this.state;
        return (
            <div>
                <h1>This is a profile page.</h1>
            </div>
        )
    }
}

export default Profile;