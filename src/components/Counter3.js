import React, { Component } from 'react';
import './experiences.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Counter3 extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 1 };
  }
  
  increment3 = () => {
  this.setState(
          { count: this.state.count + 1 }
      );
  };
  render(){
      return(
          <div>
              <button class="btn btn-primary" onClick={this.increment3}><span class="badge" color="Grey" >like { this.state.count }</span> </button>
          </div>
      );
  }
}
  export default Counter3 ;