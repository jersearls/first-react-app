import React from 'react';

class UomSelect extends React.Component {
  constructor () {
    super ();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit (event) {
    event.preventDefault();
    console.log(`You're using the ${this.uom.value} system.`);
  }
  render() {
    return (
      <div>
        <select onChange={(e) => this.handleSubmit(e)} ref={(input) => this.uom = input}>
            <option value="standard">US Standard</option>
            <option value="metric">Metric</option>
        </select>
      </div>  
    )
  }
}

export default UomSelect;
