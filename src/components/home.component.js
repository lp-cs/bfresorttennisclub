import React, { Component } from 'react';
import data from "./data";
import featured_image from '../img/featured-image.jpeg';


export default class Home extends Component {
  render() {
    return (
      <div>
      	<img src={featured_image} />
      </div>
    )
  }
}