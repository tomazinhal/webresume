import React, {Component} from 'react';

class ResumeItem extends Component {
    /*
    A ResumeItem may have multiple types. For example:
     * Professional Project: should have the job name (developer, tester, etc), description and technologies used.
     * Scholarship project: subject name, description, technologies
     * Seminar (?): topic, description
     * etc
    */
    constructor(props){
        super(props)
        this.state = {
            name: props.type,
        }
    }

    render(){
        let state = this.state;
        return (
            <div>
                <p>This is a "{state.name}".</p>
            </div>
        )
    }
}

class ScholarshipItem extends ResumeItem{
    constructor(props){
        super(props)
        this.state = {
            subject: "SUBJ X"
        }
    }

    render(){
        let state = this.state;
        return (
            <div>
                <h2>This is a School Project Item.</h2>
                <p>Part of "{state.subject}".</p>
            </div>
        )
    }
}

export {ScholarshipItem};