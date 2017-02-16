'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import MainMenu from './MainMenu';

export default class LinksPage extends React.Component {
  render() {
        return (
      <div className="secondary-page">
        <MainMenu/>
        <div className="main-pane">

          <h2 className="name">Links</h2>
          
          
	        <div className="navigateBack">
	          <Link to="/">Home</Link>
	        </div>
          
        </div>

      </div>
    );
  }
}
