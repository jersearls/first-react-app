import React from 'react';
import Header from './Header';
import BmiForm  from './BmiForm';
import UomSelect from './UomSelect';
import MetricForm from './MetricForm'

class App extends React.Component {
  constructor () {
    super();
    this.setMeasure = this.setMeasure.bind(this);
    this.setClassify = this.setClassify.bind(this)
    //initialstate
    this.state = {
      measureType: <BmiForm/>,
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
  setClassify (bmiScore) {
    console.log(bmiScore);
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
