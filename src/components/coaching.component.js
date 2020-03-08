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
		      		Wenifredo and Sonny
		      	</h3>
				<p className="text-justify">
					Our Club conducts tennis clinics regularly with group sessions each week.
				</p>
				<p className="text-justify">
					We also offer private tennis coaching for those who are learning tennis for the first time. Our coach can teach you the basics so you can get up to speed quickly, and join a group of other same level players.
				</p>
				<p>
					If your game is struggling, book a private lesson and let one of our coaches help bring it back to life.
				</p>
				<p className="text-justify">
					Each private lesson is individually tailored to ensure maximum improvement. Players’ games are thoroughly assessed, from a technical and tactical point of view, and corrections and enhancements are addressed. Players will have a greater understanding of what to work on whenever they play.
				</p>
				<p className="text-justify">
					BFRVTC Tennis coaching will give you the advantage, every time you walk out on the court.
		      	</p>
	      	</div>
	      	<div className="col-lg-4">
      			<img src={coaching_image} className="image" />
	      	</div>
	      	<div className="col-lg-12">
		      	<h4>
		      		Available Coaches
		      	</h4>
		      	<p>
		      		Wenifredo De Leon<br />
		      		M: +63 912 3456 789<br />
		      		E: asd@asd.com<br />
		      	</p>
		      	<p>
		      		Sonny Nuguit<br />
		      		+63 912 3456 709<br />
		      		E: asd@asd.com<br />
		      	</p>
	      	</div>
	    </div>
	</div>
    )
  }
}