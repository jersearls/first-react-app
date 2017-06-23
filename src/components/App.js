import React from 'react';
import Header from './Header';
import BmiForm  from './BmiForm';
import UomSelect from './UomSelect';
import MetricForm from './MetricForm';
import bmiInfo from '../bmi-info';

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

  // create function that sets state based on the returned BMI score
  // create new component to display bmi-info based on score
  // render out bmi-info key that correlates to score
  // 18.9 > bmiScore && bmiScore > 24.9
 
  setClassify (bmiScore) {
    if (bmiScore < 18.5){
      console.log("You're Underweight");
    } else if (18.5 <= bmiScore && bmiScore < 25){
      console.log("You're a healthy weight");
    } else if (25 <= bmiScore && bmiScore < 30){
      console.log("You're overweight");
    } else{
      console.log("You're obese 😞 ");
    }
  }

  render() {
    return (
      <div className="body">
        <div className="body">
          <Header/>
          <UomSelect setMeasure={this.setMeasure}/>
          {this.state.measureType}
        </div>
      </div>
    )
  }
}

export default App;
