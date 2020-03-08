import React, { Component } from 'react';
import data from "./data";
import featured_image from '../img/featured-image.jpeg';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
      	<div className="text-center">
      		<img src={featured_image} className="image" />
      		<div className="divider-30"></div>
      		<h1 className="text-success">BF Resort Tennis Club</h1>
      		<div className="divider-30"></div>
      		<p>An open space in the south western tip of the village, which is the converging point of Carnival Park Avenue and Margie Moran Street lay 4 abandoned Basketball courts. Un-used, un-lept and exposed to rot under the elements of nature, a select group of sports fanatics saw in it a potential tennis enclave that would partly fulfill the failed promise of 6 lighter Tennis Courts advertised by the subdivision owners.</p>
      	</div>
      </div>
    )
  }
}