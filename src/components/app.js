import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
      //when we view the element nested inside an element
      // inside <app /> here, it is referable in parent
      // as this.props.children
    );
  }
}
