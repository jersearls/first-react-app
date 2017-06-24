import React from 'react';

class DisplayInfo extends React.Component {
  render(){
  return (
    <info>
      <ul>{this.props.bmiResult.bmi}</ul>
      <ul>{this.props.bmiResult.name}</ul>
      <ul>{this.props.bmiResult.desc}</ul>
      <br />
      <img className="image" src={this.props.bmiResult.image} alt={this.props.bmiResult.name}/>
    </info>
  )}
}

export default DisplayInfo;
