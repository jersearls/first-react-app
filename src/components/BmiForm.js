import React from 'react';
import { bmiMath } from '../helper';

class BmiForm extends React.Component {
  constructor () {
    super();
    this.calculateBmi = this.calculateBmi.bind(this);
  }
  
  calculateBmi(event) {
    event.preventDefault();
    const lbWeight = this.weight.value;
    const ftHeight = this.ftHeight.value;
    const inHeight = this.inHeight.value;

    const bmi = bmiMath(ftHeight, inHeight, lbWeight)
    console.log(bmi);
  }
  render() {
    return(
      <form onSubmit={this.calculateBmi}>
        <h1>Enter Your Current Height and Weight</h1>
        <info className="body">
          <select>
            <option value="standard">US Standard</option>
            <option value="metric">Metric</option>
          </select>
          <h2>Enter Your Height</h2>
          <heightField>
            <input type="text" className="field" name="heightFeet" required placeholder="Enter Feet" ref={(input) => this.ftHeight = input}/>
            <input type="text" className="field" name="heightInches" required placeholder="Enter Inches" ref={(input) => this.inHeight = input}/>
          </heightField>             
          <br />
          <h2>Enter Your Weight</h2>
          <input type="text" className="field" name="weight" required placeholder="Enter Lbs" ref={(input) => this.weight = input}/>
          <br />
          <br />
          <button type="submit" className="submit" id="calcBtn">Calculate BMI -></button>
          <p></p>
        </info>
      </form>
    )
  }
}

export default BmiForm;
