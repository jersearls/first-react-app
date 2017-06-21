import React from 'react';
import Header from './Header';
import BmiForm  from './BmiForm';
import UomSelect from './UomSelect';

class App extends React.Component {
  constructor () {
    super();
    //initialstate
    this.state = {
      usStandard: {}, 
      metric: {}
    };
  }  
  render() {
    return (
      <div className="body">
        <div className="body">
          <Header/>
          <UomSelect/>
          <BmiForm/>
        </div>
      </div>
    )
  }
}

export default App;
