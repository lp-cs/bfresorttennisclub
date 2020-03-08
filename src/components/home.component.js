import React, { Component } from 'react';

const Image = data.FeaturedImage;

export default class Home extends Component {
  render() {
    return (
      <p>home</p>
      <img src="{Image.Image_01}" />
    )
  }
}