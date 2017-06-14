import React from 'react';
import { render } from 'react-dom';

class Calculator extends React.Component {
  render() {
    return(
      <form>
        <h1>Enter Your Current Imperial Height and Weight</h1>
        <info className="body">
          <h2>Enter Your Height</h2>
          <heightField>
              <input type="text" className="field" name="heightFeet" required placeholder="Enter Feet"/>
              <input type="text" className="field" name="heightInches" required placeholder="Enter Inches"/>
          </heightField>             
          <br />
          <h2>Enter Your Weight</h2>
          <input type="text" className="field" name="weight" required placeholder="Enter Lbs"/>
          <br />
          <br />
          <button type="submit" className="submit" id="calcBtn">Calculate BMI -></button>
        </info>
      </form>
    )
  }
}

export default Calculator
