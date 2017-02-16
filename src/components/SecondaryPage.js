'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import MainMenu from './MainMenu';
import pageData from '../data/pageData';

export default class SecondaryPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const data = pageData.filter((data) => data.id === id)[0];
    if (!data) {
      return <NotFoundPage/>;
    }
    return (
      <div className="secondary-page">
        <MainMenu/>
        <div className="main-pane">

          <div className="picture-container">
            <h2 className="name">{data.name}</h2>
          </div>
          <section className="description">
            {data.content} 
          </section>
	        <div className="navigateBack">
	          <Link to="/">Home</Link>
	        </div>          
 
        </div>

      </div>
    );
  }
}
