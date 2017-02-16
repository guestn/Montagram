'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/" className="site-logo">
            <img className="logo" src="/img/site-logo.png"/>
            <h1>BestOf2.0</h1>
          </Link>
          <h2>Subtitle</h2>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
					<span className="copyright">© 2016&nbsp;Title</span>
					<span className="author">Development &amp; Design by <Link to="//guestandguest.com">guest+guest <img id="author-logo" src="/img/gg_image_logo_white.svg"/></Link></span>
        </footer>
      </div>
    );
  }
}
