import React, { Component } from 'react';
import './experiences.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Counter1 extends Component {
    constructor(props) {
      super(props);
      this.state = { count1: 1 };
  }
  
  increment1 = () => {
  this.setState(
          { count1: this.state.count1 + 1 }
      );
  };
  render(){
      return(
          <div>
              <button class="btn btn-primary" onClick={this.increment1}><span class="badge" color="Grey" >like { this.state.count1 }</span> </button>
          </div>
      );
  }
}
  export default Counter1 ;