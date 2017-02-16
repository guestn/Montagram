'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import MainMenu from './MainMenu';

export default class HowToPage extends React.Component {
  render() {
        return (
      <div className="secondary-page how-to-page">
        <MainMenu/>
        <div className="main-pane">

          <h2 className="name">How To</h2>

          <div className="content">
          	<p>JSONOMATIC creates and array of multiple JSON objects from a single template, so that you can save or copy the data and apply it directly to your NOSQL database.</p> 
          	<ol>
          		<li>Select the number of objects to output with the slider (current maximum 100)</li>
          		<li>Enter the template object (in&nbsp;<Link to="//json.org/example.html">proper JSON notation</Link>) on the input area on the lefthand side of the screen.&nbsp;<Link to="/settings"> Hints for tags are here</Link></li>
          		<li>Click "Generate" to generate your objects, which appear in the output area on the righthand side of the screen</li>
          		<li>Copy or download your array of JSON objects with the buttons</li>
          	</ol>
          </div>
 
	        <div className="navigateBack">
	          <Link to="/">Home</Link>
	        </div>          
        </div>
      </div>
    );
  }
}
