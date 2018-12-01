import React, {Component} from 'react';
import {ResumeList} from '../../components/ResumeList/ResumeList';

import './Resume.scss'

class Resume extends Component {
  render(){
    return (
      <div id="resume-page">
        <ul>
          <li className="resume-item">
            <ResumeList name="SUBJ X" description="this is the description for the project of subjx" technologies={["python", "sql", "r"]}/>
          </li>
          <li className="resume-item">
            <ResumeList name="data science developer for DAEWAE ltd." description="descirption descriptoin description" technologies={["python", "sql", "r"]}/>
          </li>
        </ul>
      </div>
    )
  }
}

export default Resume;