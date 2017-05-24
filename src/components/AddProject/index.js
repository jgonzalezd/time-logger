import React, { Component } from 'react';
import Button from '../Button'


export class AddProject  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log(this.state);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  onSubmit = (e) => {
    if (e) e.preventDefault();
    // console.log(this.state);
    window.props = this.props
    this.props.onNewProject({
      name: this.refs.projectName.value,
      startDate: new Date()
    });
  }

  render(){
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="jumbotron">
            <form onSubmit={this.onSubmit}>
              <input type="text"
                     className="form-control"
                     placeholder="Project Name"
                     ref="projectName"
                     required />
              <div className="text-center" >
                <h3>Current Time</h3>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <Button />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
