import React from 'react';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      checkbox: false
    };
  }

   

  render() {
    return (
      <div className="result" >
        <Checkbox id="box" type="checkbox" onClick={() => (this.props.SetCheckbox(this.props.id, this.props.name, !this.props.checkbox))} checked={`${this.props.checkbox ? 'true' : ''}`} />
        <div className={`text ${this.props.checkbox ? 'now' : ''}`}>{this.props.name}</div>
        <button className="close" onClick={() => (this.props.removeItem(this.props.id))}>X</button>
      </div>


    );
  }
}