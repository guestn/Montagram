'use strict';

import React from 'react';
import pageData from '../data/pageData';
import MainMenu from './MainMenu';
import { Link } from 'react-router';
import Button from './Button';
import { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'whatwg-fetch'; //fetch polyfill
import fileDownload from 'react-file-download';
import CopyToClipboard from 'react-copy-to-clipboard';


export default class IndexPage extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			generateClicked: false,
			authorized: false,
			statusMessage: '',
			userData: null,
			dataCollected: false,
			accessToken: null,
			username: null,
			imageUrlsSet: false,
			images: null,
			imageUrls: null
		}
		
	}
	
	componentWillMount() {
		var hash = this.props.location.hash.slice(1);
		var accessToken = hash.substr(hash.indexOf("=") + 1);
		
		this.setState({
			generateClicked: false,
			authorized: false,
			inputValue: 'rollmop99',
			userData: null,
			montageUrlSet: false,
			username: this.props.location.query.user,
			duration: this.props.location.query.dur
		});	

	}
	
	componentDidMount() {
		var hash = window.location.hash.slice(1);
		//var urlParams = new URLSearchParams(window.location.search);
		//var username = urlParams.get('user');
		//var username = this.props.location.query.user;

		this.collectData();
	}
	
/*
	handleSlider(value) {
		this.setState({
			sliderValue: value
		})
	}
*/

	collectData() {
		this.setState({
			generateClicked: true
		})
		console.log('user2: '+this.state.username)
	
	
		// setup fetch to server

/*		var request = new Request('/submit', {

			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
				      'Accept': 'application/json',

			}),
			body: JSON.stringify({ name: this.state.username, duration: this.state.duration})
		});
*/
		
		// Now use it!
		
		
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
			this.setState({
					statusMessage: 'Right-Click or Ctrl-Click to Save Your Image'
				})

			return response.json();
		})
		.then((data) => {
			console.log('data',data)
			if (typeof data[0] == 'undefined' ||  data[0] == null) {
				this.setState({
					statusMessage: 'User is Private or has no posts'
				})
				return;
			}


			this.setState({
				montageUrl: data,
				montageUrlSet: true,
			})

			//this.sortData();
		})
		.catch((err) => {
			console.log('error!!!',err)
		})
		
		
	}
	
	onDownloadClicked() {
		console.log('http://'+window.location.hostname +':' + window.location.port + this.state.montageUrl)
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
						transitionEnterTimeout={3000}
						transitionLeaveTimeout={3000}>
						<span key={this.state.statusMessage} className="statusMessage">{this.state.statusMessage}</span>
					</ReactCSSTransitionGroup>

					<div>User: {this.state.username}</div>					
					
									 									
					{this.state.montageUrlSet ? 
						<div>
							<img className="montageImage" src={this.state.montageUrl} />
							<div className="button-container">

							
								<a className="btn btn-icon btn-download" href={'http://'+window.location.hostname +':' + window.location.port + this.state.montageUrl} download>DLLINK</a>
								
							</div>

						</div> : 
						<div>Loading- this might take a minute...</div>
					}

        </div>

          
      </div>
    );
  }
}

//						<button className="btn-text btn-generate" onClick={this.collectData.bind(this)}>Go</button>

//							<button className="btn-icon btn-download" onClick={this.onDownloadClicked.bind(this)}>DL</button>

//					{this.state.imageUrlsSet ? (<div><div className="images">{this.state.images}</div><CanvasComponent imageUrls={this.state.imageUrls}/></div>) : (<div>Loading...</div>)}
/*
sortData() {

		var objToSort = {}
		var dataObj = this.state.userData;
		//make an obj of format { url: likes, obj: likes... }
		for (var i=0; i < dataObj.length; i++) {
			objToSort[dataObj[i].media] = dataObj[i].likes;
			
		}
		console.log('objToSort',objToSort)
		var images = [];
		var imageUrls = [];
		var sortable = [];
		for (var url in objToSort) {
			sortable.push([url, objToSort[url]])
		}
		sortable.sort(function(a, b) {
		  return a[1] - b[1]
		})

		//get last 9 items of sortable and push them to imgs object

		for (var i = sortable.length - 1; i > sortable.length - 10; i--) {
			if (typeof sortable[i] != 'undefined') {
				images.push(<div><span>{sortable[i][1]}</span><img src={sortable[i][0]} key={i} /></div>);
				imageUrls.push(sortable[i][0])
			}
		}
		this.setState({
			imageUrlsSet: true,
			imageUrls: imageUrls
		})
	}
*/
