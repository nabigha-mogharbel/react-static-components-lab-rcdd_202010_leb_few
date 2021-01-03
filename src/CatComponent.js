import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat" alt="cat">
        <img src="/cat.gif" />
      </div>
    );
  }
}
