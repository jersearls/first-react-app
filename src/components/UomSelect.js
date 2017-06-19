import React from 'react';

class UomSelect extends React.Component {
  render() {
    return (
      <div>
        <select ref={(input) => this.uom = input}>
            <option value="standard">US Standard</option>
            <option value="metric">Metric</option>
        </select>
      </div>  
    )
  }
}

export default UomSelect;
