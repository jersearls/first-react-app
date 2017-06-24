import React from 'react';

class DisplayInfo extends React.Component {  
  render(){
  return (
    <info>
      <name>You are currently {this.props.bmiResult.name}</name>
      <name>Your current bmi is {this.props.bmiResult.bmi}</name>
      <name>{this.props.bmiResult.desc}></name>
      <image src={this.props.bmiResult.image}/>
    </info>
  )}
}

export default DisplayInfo;
