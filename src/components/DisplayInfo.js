import React from 'react';

class DisplayInfo extends React.Component {
  render(){
  return (
    <info>
      <ul className="display">{this.props.bmiResult.bmi}</ul>
      <ul className="display">{this.props.bmiResult.name}</ul>
      <ul className="display">{this.props.bmiResult.desc}</ul>
      <br />
      <img src={this.props.bmiResult.image} alt={this.props.bmiResult.name}/>
    </info>
  )}
}

export default DisplayInfo;
