'use strict';

import React from 'react';
import MainMenu from './MainMenu';
import { Link } from 'react-router';
import Button from './Button';
import { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'whatwg-fetch'; //fetch polyfill
import fileDownload from 'react-file-download';
import CopyToClipboard from 'react-copy-to-clipboard';
import Loader from './Loader';

export default class IndexPage extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			generateClicked: false,
			statusMessage: '',
			userData: null,
			dataCollected: false,
			username: null,
			imageUrlsSet: false,
			images: null,
			imageUrls: null,
			loadingMessage: '',
		}
		
	}
	
	componentWillMount() {
		var hash = this.props.location.hash.slice(1);
		var accessToken = hash.substr(hash.indexOf("=") + 1);
		
		this.setState({
			generateClicked: false,
			inputValue: 'rollmop99',
			userData: null,
			montageUrlSet: false,
			username: this.props.location.query.user,
			duration: this.props.location.query.dur,
			loadingMessage: 'Generating - this might take a minute...',
		});	

	}
	
	componentDidMount() {
		this.collectData();
	}
	

	collectData() {
		this.setState({
			generateClicked: true
		})
		
		fetch('/submit', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
				      'Accept': 'application/json',
			}),
			body: JSON.stringify({ name: this.state.username, duration: this.state.duration})
		})
		.then((response) => {
			console.log('response',response)
				return response.json();
		})
		.then((data) => {
			console.log('data',data)
			if (typeof data != 'undefined' && data != null && data != 'Instagram returned status code: 404' && data != 'private') {
				this.setState({
					montageUrl: data,
					montageUrlSet: true,
					statusMessage: 'Click Download To Save Your Image'
				})
			} else {
				this.setState({
					statusMessage: 'User is Private or has no posts',
					loadingMessage: 'User is Private or has no posts'
				})
				return;
			}

		})
		.catch((err) => {
			console.log('error!!!',err)
			this.setState({
				statusMessage: 'There has been an error. Please try again'
			})
		})
		
		
	}
	
	onDownloadClicked() {
		fileDownload('http://'+window.location.hostname +':' + window.location.port + this.state.montageUrl, 'image.png');
		this.setState({
			statusMessage: 'File Downloaded'
		})
	}

	
  render() {

    return (
      <div className="auth-page">        
        <div className="main-pane">

					
					<ReactCSSTransitionGroup
          	transitionName="anim"
						transitionEnterTimeout={5000}
						transitionLeaveTimeout={5000}>
						<span key={this.state.statusMessage} className="statusMessage">{this.state.statusMessage}</span>
					</ReactCSSTransitionGroup>

					<h2>{this.state.username}</h2>					
									 									
					{this.state.montageUrlSet ? 
						<div>
							<img className="montageImage" src={this.state.montageUrl} />
							<div className="button-container">
								<a className="btn btn-text" href={'http://'+window.location.hostname +':' + window.location.port + this.state.montageUrl} download>DOWNLOAD</a>
							</div>
						</div> : 
						<div className="loading-container">
							{this.state.loadingMessage}
							<Loader/>
							<Link className="btn btn-text" href={'/'}>Go Back</Link>
						</div>
					}

        </div>

          
      </div>
    );
  }
}