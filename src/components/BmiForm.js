import React from 'react';
import { lbToKg,ftInToCm,bmiMath } from '../helper';

class BmiForm extends React.Component {
  constructor () {
    super();
    this.calculateBmi = this.calculateBmi.bind(this);
  }
  
  calculateBmi(event) {
    event.preventDefault();
    const usMeasures = {
      lbWeight: this.weight.value,
      ftHeight: this.ftHeight.value,
      inHeight: this.inHeight.value
    }

    const cmHeight = ftInToCm(usMeasures.ftHeight, usMeasures.inHeight)

    const bmi = bmiMath(
      lbToKg(usMeasures.lbWeight), 
      cmHeight
    )

    this.props.setClassify(bmi);
  }
  render() {
    return(
      <form onSubmit={this.calculateBmi}>
          <h2>Enter Your Height in Feet and Inches</h2>
          <heightField>
            <input type="text" className="field" name="heightFeet" required placeholder="Enter Feet" ref={(input) => this.ftHeight = input}/>
            <input type="text" className="field" name="heightInches" required placeholder="Enter Inches" ref={(input) => this.inHeight = input}/>
          </heightField>             
          <br />
          <h2>Enter Your Weight in Pounds</h2>
          <input type="text" className="field" name="weight" required placeholder="Enter Lbs" ref={(input) => this.weight = input}/>
          <br />
          <br />
          <button type="submit" className="submit" id="calcBtn">Calculate BMI -></button>
          <p></p>
      </form>
    )
  }
}

export default BmiForm;
