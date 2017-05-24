
import './index.scss'
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { AddProject } from '../AddProject'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProjects: [
        // {
        //   id: 1,
        //   name: '',
        //   startDate: '',
        //   weeks: []
        // }
      ]
    }
    // this.addProject = this.addProject.bind(this) only if using addProject() {};
  }

  addProject = (newProject) => {
    this.setState({
      allProjects: [
        ...this.state.allProjects,
        newProject
      ]
    });
    console.log(this.state);
  }


  render() {
    return (
      <AddProject onNewProject={this.addProject} />
    );
  }
}
