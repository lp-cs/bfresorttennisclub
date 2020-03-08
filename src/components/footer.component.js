import React, { Component } from 'react';
import logo from '../img/logo.png';

export default class Footer extends Component{
  render() {
    return (
      <div className="footer bg-info text-white">
        <div className="divider-10"></div>
        <div className="divider-10"></div>
        <div className="row col-md-12">
        <div className="col-md-3 text-center">
            <img src={logo} className="footer-logo" alt="Club Logo"/>
          </div>
          <div className="col-md-3">
            <p>
              <strong>Club Address</strong>
              <br />
              BF Resort Village Tennis Club <br />
              Carnival Park corner Emma Yuhico <br />
              BF Resort Village, Pamplona Dos <br />
              Las Piñas City, Philippines <br />
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <strong>Acknowledgement</strong>
              <br />
              BF Resort Village Tennis Club would Like to thank all of our sponsors and partner for their continued support.
            </p>
          </div>
          <div className="col-md-3">
            <p>
              <strong>Club Hours</strong>
              <br />
              Mon - Fri: 6:00am-10:00pm
              <br />
              Sat - Sun: 5:00am-9:00pm
            </p>
          </div>
        </div>
      </div>
    );
  }
}