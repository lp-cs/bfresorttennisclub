import React, { Component } from 'react';
import court_hire_image from '../img/court_hire.jpeg';

export default class Court_Hire extends Component {
  render() {
    return (
      <div className="container">
	      	<div className="text-center">
	      		<h2 className="text-success">Court Hire</h2>
	      	</div>
      		<div className="divider-30"></div>
	      	<div className="row">
		      	<div className="col-lg-6">
	      			<img src={court_hire_image} className="image" alt="Court View" />
		      	</div>
		      	<div className="col-lg-6">
			      	<p>
			      		Quis eleifend quam adipiscing vitae proin. Elementum tempus egestas sed sed risus pretium quam. Eu volutpat odio facilisis mauris sit amet massa. Amet nulla facilisi morbi tempus iaculis urna. Pharetra et ultrices neque ornare aenean euismod elementum. Neque gravida in fermentum et sollicitudin. Egestas sed tempus urna et pharetra pharetra massa. Pretium nibh ipsum consequat nisl. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Dolor sit amet consectetur adipiscing elit duis tristique. Placerat duis ultricies lacus sed turpis tincidunt id. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Enim neque volutpat ac tincidunt vitae.
			      	</p>
		      	</div>
		    </div>
    	</div>
    )
  }
}