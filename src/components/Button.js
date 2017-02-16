'use strict';

import React from 'react';
 
export default class Button extends React.Component {
  render() {
    const { children, color } = this.props;
    return {
      type: 'button',
      props: {
        className: 'button button-' + color,
        
      }
    };
  }
}