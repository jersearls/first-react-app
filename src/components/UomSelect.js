import React from 'react';

class UomSelect extends React.Component {
  constructor () {
    super ();
    this.changeMeasure = this.changeMeasure.bind(this);
  }
  changeMeasure (event){
    const selectedUom = this.uom.value;
    console.log(`You made a selection of ${selectedUom} (UomSelect.js)`);
    this.props.setMeasure(selectedUom);
  }
  render() {
    return (
      <div>
        <select onChange={(e) => this.changeMeasure(e)} ref={(input) => this.uom = input}>
            <option value="standard">US Standard</option>
            <option value="metric">Metric</option>
        </select>
      </div>  
    )
  }
}

export default UomSelect;
