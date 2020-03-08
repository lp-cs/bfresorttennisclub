import React, { Component } from 'react';
import data from "./data"; 

const image = data.featured_image;

export default class Home extends Component {
  render() {
    return (
      // <p>home</p>
      <img src="{image.image_001}" />
      <p>{image.image_001}</p>
    )
  }
}