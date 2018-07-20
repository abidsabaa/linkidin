import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './experiences.css';
//import Skills from './skills';
import Counter3 from './Counter3';
class Competence extends Component {
  render() {
    return (
      <div className ="expstyle">
        <ld class="row">
        <dt class="col-lg-3">
        <h1>{this.props.comp}</h1></dt>
        <dt class="col-lg-3">
        <input type="submit" class="btn btn-primary" value="Add New skill" onClick={this.onClick} /></dt>
        <dt class="col-lg-3">
        <Counter3/>
        </dt>
        </ld>
        <br/>
        <span>{this.props.comp1}
          <p class="progress progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
            70%
          </p>
        </span>
        <span>{this.props.comp2}
          <p class="progress progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >
             60%
          </p>
        </span>
      </div>
      
    );
  }
  }
  
  export default Competence;