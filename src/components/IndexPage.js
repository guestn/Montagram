'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import MainMenu from './MainMenu';

export default class IndexPage extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			inputValue: '',
		}
		this.handleInputChange = this.handleInputChange.bind(this)
	this.handleOptionChange = this.handleOptionChange.bind(this)


	}
	componentWillMount() {
		this.setState({
			inputValue: 'rollmop99',
			radioValue: 'option1'
		})
	}
	
	handleInputChange(event) {
		this.setState({
			inputValue: event.target.value
		})
		console.log(this.state.inputValue)
	}
	handleOptionChange(event) {
		this.setState({
			radioValue: event.target.value
		})
		console.log(this.state.radioValue)

	}
	
  render() {
      return (
      <div className="index-page">
        <div className="main-pane">
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} autoFocus="true"/>
          <label>
						<input type="radio" name="duration" value="option1" onChange={this.handleOptionChange}  checked={this.state.radioValue === 'option1'}/>
						<span>Last Month</span>
						<div className="indicator"></div>
					</label>
					<label>
						<input type="radio" name="duration" value="option2" onChange={this.handleOptionChange} checked={this.state.radioValue === 'option2'}/>
						<span>Last Year</span>
						<div className="indicator"></div>
					</label>
					<label>
						<input type="radio" name="duration" value="option3" onChange={this.handleOptionChange} checked={this.state.radioValue === 'option3'}/>
						<span>All of 2016</span>
 						<div className="indicator"></div>
					</label>
          <a className="btn btn-text" href={'/auth?user=' + this.state.inputValue + '&dur=' + this.state.radioValue }>Get My Top Photo Collage!</a>
        </div>

      </div>
    );
  }
}




