import React from 'react';

//class component can have 'state'
class App extends React.Component {
  render(){
    return (
      <div>
      <h1>Hello World</h1> 
      <b>Bold</b>
      </div>
    )
  }
}

//stateless function, simple return
//const App = () => <h1>Hello stateless</h1>

export default App

