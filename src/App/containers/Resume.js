import React, {Component} from 'react';
import {ScholarshipItem} from '../components/Resume';

class Resume extends Component {
    render(){
        return (
            <div id="resume-page">
                <h1>This is the Resume Page</h1>
                <ScholarshipItem subject="SUBJ X"/>
            </div>
        )
    }
}

export default Resume;