'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/" className="site-logo">
            <h1>Montagram</h1>
          </Link>
          <h2>Create a montage of your most popular posts!</h2>
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
