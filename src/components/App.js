import React from 'react';
import Header from './Header';
import BmiForm  from './BmiForm';
import UomSelect from './UomSelect';
import MetricForm from './MetricForm'

class App extends React.Component {
  constructor () {
    super();
    this.setMeasure = this.setMeasure.bind(this);
    //initialstate
    this.state = {
      measureType: <BmiForm/>
    };
  }
  setMeasure (uom) {
    if (uom === "standard") {
       console.log(`State set to the ${uom} system. (App.js)`)
      this.setState({
        measureType: <BmiForm/>
      });
    } else {
      console.log(`State set to the ${uom} system. (App.js)`)
      this.setState({
        measureType: <MetricForm/>    
      });
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
