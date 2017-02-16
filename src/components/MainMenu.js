'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router';
import pageData from '../data/pageData';

export default class MainMenu extends React.Component {
  render() {
    return (
      <nav className="main-menu">
      	<IndexLink to="/" {...this.props} activeClassName="active">Home</IndexLink>
        {pageData.map(data => {
          return <Link key={data.id} to={`/${data.id}`} activeClassName="active">
            {data.name}
          </Link>;
        })}
      </nav>
    );
  }
}
