import React, { Component } from 'react';
import logo from '../img/logo.png';

export default class Footer extends Component{
  render() {
    return (
      <div className="footer bg-info text-white">
        <div className="divider-30"></div>
        <div className="row col-md-12">
        <div className="col-md-3 text-center">
            <img src={logo} className="footer-logo" />
          </div>
          <div className="col-md-3">
            <p>
              <strong>Club Address</strong>
              <br />
              BF Resort Village Tennis Club<br />
              7 E Yuhico, Las Pinas<br />
              Metro Manila, Philippines
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
              Mon - Fri: 6:00am-11:59pm
              <br />
              Sat - Sun: 4:00am-11:59pm
            </p>
          </div>
        </div>
        <div className="divider-10"></div>
      </div>
    );
  }
}