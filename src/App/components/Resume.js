import React, { Component } from 'react';

class ResumeItem extends Component {
  /*
  A ResumeItem may have multiple types. For example:
   * Professional Project: should have the job name (developer, tester, etc), description and technologies used.
   * Scholarship project: subject name, description, technologies
   * Seminar (?): topic, description
   * etc
  */
  constructor(props) {
    super(props)
    this.state = {
      name: props.type,
    }
  }

  render() {
    let state = this.state;
    return ( 
      <div>
        <p>This is a "{state.name}".</p>
      </div>
    )
  }
}

class ScholarshipItem extends ResumeItem {
  constructor(props) {
    super(props)
    this.state = {
      subject: props.subject,
      description: props.description,
      technologies: props.technologies,
    }
  }
  render() {
    let state = this.state;
    return ( 
      <div className="school-card">
        <h2>This is a School Project for "{state.subject}"</h2>
        <p>{state.description}</p>
        <div className="technologies">
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

class ProfessionalItem extends ResumeItem {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      description: props.description,
      technologies: props.technologies,
    }
  }
  render() {
    let state = this.state;
    return ( 
      <div className="professional-card">
        <h2>{state.title}</h2>
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

export { ScholarshipItem, ProfessionalItem };