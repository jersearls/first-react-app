import React from 'react';
import Header from './Header';
import BmiForm  from './BmiForm';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="body">
          <Header/>
          <BmiForm/>
        </div>
      </div>
    )
  }
}

export default App;
