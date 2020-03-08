import React, { Component } from 'react';
import data from "./data";


export default class Home extends Component {
  render() {
    return (
      <div>
      	<img src={process.env.PUBLIC_URL + '/featured_image.jpeg'} />
      </div>
    )
  }
}