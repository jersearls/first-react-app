import React from 'react';
import { render } from 'react-dom';

class Calculator extends React.Component {
  render() {
    return(
      <form className="enterInfo">
        <h1>Enter your current imperial height and weight.</h1>
        <h2>Enter Height</h2>
        <heightField>
            {/* add padding to text inputs in style sheet */}
            <input type="text" name="heightFeet" required placeholder="Enter Feet"/>
            <input type="text" name="heightInches" required placeholder="Enter Inches"/>
          </heightField>             
        <br />
        <h2>Enter Weight</h2>
        <input type="text" name="weight" required placeholder="Enter Lbs"/>
        <br />
        <br />
        <button type="submit" id="calcBtn">Calculate BMI</button>
      </form>
    )
  }
}

export default Calculator
