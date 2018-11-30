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
            type: props.type,
            name: props.name,
            description: props.description,
            technologies: props.technologies
        }
    }

    render(){
        let state = this.state;
        return (
            <div className={state.type}>
                <h2>{state.name}</h2>
                <p>{state.description}</p>
                <div>
                    <h3>Technologies used:</h3>
                    <ul className="technologies-list">
                        {state.technologies.map((tech) => (
                            <div key={tech} className="technology">
                                <li>{tech}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export {ResumeItem};