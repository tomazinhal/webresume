import React, {Component} from 'react';
import {ScholarshipItem, ProfessionalItem} from '../components/Resume';

import '../styles/Resume.css'

class Resume extends Component {
  render(){
    return (
      <div id="resume-page">
        <h1>This is the Resume Page</h1>
        <section className="resume__list">
          <article className="resume-item">
            <ScholarshipItem subject="SUBJ X" description="this is the description for the project of subjx" technologies={["python", "sql", "r"]}/>
          </article>
          <article className="resume-item">
            <ProfessionalItem title="data science developer for DAEWAE ltd." description="descirption descriptoin description" technologies={["python", "sql", "r"]}/>
          </article>
        </section>
      </div>
    )
  }
}

export default Resume;