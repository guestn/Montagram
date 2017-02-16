'use strict';

import React from 'react';
import { PropTypes } from 'react'


export default class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    //this.handler = this.handler.bind(this);
  }

 
  handler(e) {
		this.props.handleSlider(e.target.value)
  }
 
  render() {
    //let { value } = this.state;
    const value = this.props.sliderValue;
    return (
  		<div>
        <input
				ref="range"
				type="range"
        min="1"
				max="100"
				value={value}
				onChange={ this.handler.bind(this) }
				/>          
      </div>
    );
  }
}






//import Slider from 'react-rangeslider';
 
/*
export default class RangeSlider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

 
  handleChange(value) {

		this.props.onChange(value)
  }
 
  render() {
    //let { value } = this.state;
    const value = this.props.value;
    return (
    	<div>
          <Slider
          value={value}
          orientation="horizontal"
          onChange={this.handleChange}
          min={1}
          max={100}
        />
          <div>Value: {value}</div>
        </div>
    );
  }
}
*/