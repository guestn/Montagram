'use strict';

import React, { Component, PropTypes } from 'react';
export default class Loader extends React.Component {
	
  render() {
  	return (
	  	
			<div className="loader">
			  <div className="inner">
			    <div className="container-shadow">
			      <div className="square"></div>
			      <div className="square"></div>
			      <div className="square"></div>
			      <div className="square"></div>
			      <div className="square"></div>
			      <div className="square"></div>
			      <div className="square"></div>
			      <div className="square"></div>
			      <div className="square"></div>
			    </div>
			  </div>
			  <div className="container">
			    <div className="square"></div>
			    <div className="square"></div>
			    <div className="square"></div>
			    <div className="square"></div>
			    <div className="square"></div>
			    <div className="square"></div>
			    <div className="square"></div>
			    <div className="square"></div>
			    <div className="square"></div>
			  </div>
			</div>
      
    );
  }
}
