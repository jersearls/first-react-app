import React from 'react';

//class component can have 'state'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update( e ){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <input type="text"
        onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

//stateless function, simple return
//const App = () => <h1>Hello stateless</h1>

export default App

