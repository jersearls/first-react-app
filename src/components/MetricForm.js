import React from 'react';
import { bmiMath } from '../helper';


class MetricForm extends React.Component {
  constructor () {
    super();
    this.calculateMetricBmi = this.calculateMetricBmi.bind(this);
  }
  
  calculateMetricBmi(event) {
    event.preventDefault();
    const metricMeasures = {
      kgWeight: this.kgWeight.value,
      cmHeight: this.cmHeight.value
    };
    const bmi = bmiMath(
      metricMeasures.kgWeight, 
      metricMeasures.cmHeight
    )

    console.log(bmi);
  }

  render() {
    return(
      <form onSubmit={this.calculateMetricBmi}>
          <h2>Enter Your Height in Centimeters</h2>
          <heightField>
            <input type="text" className="field" name="heightCm" required placeholder="Enter Centimeters" ref={(input) => this.cmHeight = input}/>
          </heightField>             
          <br />
          <h2>Enter Your Weight in Kilograms</h2>
          <input type="text" className="field" name="kgWeight" required placeholder="Enter Kilos" ref={(input) => this.kgWeight = input}/>
          <br />
          <br />
          <button type="submit" className="submit" id="calcBtn">Calculate BMI -></button>
          <p></p>
      </form>
    )
  }
}

export default MetricForm
