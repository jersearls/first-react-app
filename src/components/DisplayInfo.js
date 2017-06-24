import React from 'react';

class DisplayInfo extends React.Component {
  render(){
    //es6 destructuring
    const { bmiResult } = this.props
  return (
    <info>
      <ul className="display">{bmiResult.bmi}</ul>
      <ul className="display">{bmiResult.name}</ul>
      <ul className="display">{bmiResult.desc}</ul>
      <br />
      <img src={bmiResult.image} alt={bmiResult.name}/>
    </info>
  )}
}

export default DisplayInfo;
