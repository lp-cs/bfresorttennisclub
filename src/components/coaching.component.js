import React, { Component } from 'react';
import coaching_image from '../img/coaching.jpeg';

export default class Coaching extends Component {
  render() {
    return (
      <div className="container">
      	<div className="text-center">
      		<h2 className="text-success">Coaching</h2>
      	</div>
      	<div className="divider-30"></div>
      	<div className="row">
	      	<div className="col-lg-8">
		      	<h3>
		      		Coach Lito Lopez
		      	</h3>
		      	<p className="text-justify">
		      		Auctor eu augue ut lectus arcu. Ullamcorper eget nulla facilisi etiam. Libero nunc consequat interdum varius sit amet. Lobortis mattis aliquam faucibus purus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Cras adipiscing enim eu turpis egestas. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum.
		      	</p>
		      	<p className="text-justify">
					Risus nullam eget felis eget nunc. Mauris cursus mattis molestie a iaculis at erat. Arcu non sodales neque sodales ut. Duis ultricies lacus sed turpis tincidunt. Eget mi proin sed libero enim. Tristique et egestas quis ipsum. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Cursus in hac habitasse platea dictumst quisque sagittis. Arcu ac tortor dignissim convallis aenean et. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Tincidunt id aliquet risus feugiat in ante metus dictum at. Eu sem integer vitae justo. Vestibulum sed arcu non odio euismod lacinia.
		      	</p>
		      	<p>
					Mobile: +63 912 3456 789<br />
					email:  coach@bfrtennisclub<br />
				</p>
	      	</div>
	      	<div className="col-lg-4">
      			<img src={coaching_image} className="image" />
	      	</div>
	    </div>
	</div>
    )
  }
}