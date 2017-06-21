import React from 'react';

class MetricForm extends React.Component {
  render() {
    return(
      <form onSubmit={this.calculateBmi}>
          <h2>Enter Your Height in Meters and Centimeters</h2>
          <heightField>
            <input type="text" className="field" name="heightMeters" required placeholder="Enter Meters" ref={(input) => this.mHeight = input}/>
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
