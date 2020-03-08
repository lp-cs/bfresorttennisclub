import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
      	<div className="text-center">
          <iframe title="Club Ad" className="videoplayer" src="https://www.youtube.com/embed/fGbwVR2mIoE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="divider-30"></div>
          <h1 className="text-success">BF Resort Tennis Club</h1>
          <div className="divider-30"></div>
        </div>
      	<div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p className="text-justify">
              An open space in the south western tip of the village, which is the converging point of Carnival Park Avenue and Margie Moran Street lay 4 abandoned Basketball courts. Un-used, un-lept and exposed to rot under the elements of nature, a select group of sports fanatics saw in it a potential tennis enclave that would partly fulfill the failed promise of 6 lighter Tennis Courts advertised by the subdivision owners.
            </p>
          </div>
          <div className="col-md-6">
            <h4>Why Tennis?</h4>
            <p className="text-justify">
              Tennis is fun! Playing tennis is a good sport to maintain your health, fitness, strength and agility. It has been calculated that an hour-long game of singles tennis burns around 600 calories for men and 420 calories for women.
            </p>
            <p className="text-justify">
              In addition to the fitness and physical health benefits, tennis also provides numerous social and mental health benefits as well. 
            </p>
          </div>
        </div>
      </div>
    )
  }
}