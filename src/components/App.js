import React from 'react';
import Header from './Header';
import BmiForm  from './BmiForm';
import UomSelect from './UomSelect';
import MetricForm from './MetricForm';
import bmiInfo from '../bmi-info';
import DisplayInfo from './DisplayInfo';

class App extends React.Component {
  constructor () {
    super();
    this.setMeasure = this.setMeasure.bind(this);
    this.setClassify = this.setClassify.bind(this)
    //initialstate
    this.state = {
      measureType: <BmiForm setClassify={this.setClassify}/>,
      bmiClassify:{}
    };
  }
  setMeasure (uom) {
    if (uom === "standard") {
       console.log(`State set to the ${uom} system. (App.js)`)
      this.setState({
        measureType: <BmiForm setClassify={this.setClassify}/>
      });
    } else {
      console.log(`State set to the ${uom} system. (App.js)`)
      this.setState({
        measureType: <MetricForm setClassify={this.setClassify}/>
      });
    }
  }

  // setClassify sets state based on the returned BMI score
  // adds bmi number to bmi-info object
  setClassify (bmiScore) {
    let weight = {}
    if (bmiScore < 18.5){
      weight = bmiInfo.underWeight
    } else if (18.5 <= bmiScore && bmiScore < 25){
      weight = bmiInfo.normalWeight
    } else if (25 <= bmiScore && bmiScore < 30){
      weight = bmiInfo.overWeight
    } else{
      weight = bmiInfo.obese
    }
    weight.bmi = `Your BMI is ${bmiScore}`;
    this.setState({bmiClassify : weight });
  }

  render() {
    return (
      <div className="body">
        <div className="body">
          <Header/>
          <UomSelect setMeasure={this.setMeasure}/>
          {this.state.measureType}
          <DisplayInfo bmiResult={this.state.bmiClassify}/>
        </div>
      </div>
    )
  }
}

export default App;
