import React, { Component } from 'react';

class MyTimer extends Component {
  
  constructor(props){
    super(props);
    this.state= {time:new Date().toLocaleTimeString()};
  }

  componentDidMount(){
    setInterval(()=> this.setState({time:new Date().toLocaleTimeString()}), 1000);
  }

  componentDidUpdate() {
    console.log('Un update a eu lieu');
  }
  
  render(){
    return(
      <div>
        <h1>{this.state.time}</h1>
      </div>
    )
  }
}

export default MyTimer;