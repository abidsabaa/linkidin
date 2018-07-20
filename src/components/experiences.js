import React, { Component } from 'react';
import './experiences.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Counter from './counter';
import Appearchamp1 from './Appearchamp1';
class Experiences extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
}

increment = () => {
this.setState(
        { count: this.state.count + 1 }
    );
};
    render() {
      return (
        <div className ="expstyle">
         <h1>{this.props.exp}</h1>
         <br/>
         <ld class="row">
         <input class="col-lg-3 container-fluid img-circle" type = "image" className="styleimage" aria-label ="image" name = "imagebutton" src = "https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-9/27541049_1571907679531510_8408499850463305090_n.jpg?_nc_cat=0&oh=e2b1ee9f87bb3653b195d2d51bf30084&oe=5BA96947" />
         <dt class="col-lg-4">
            <dd>{this.props.exp1}</dd>
            <dd className="defstyle">{this.props.exp2}</dd>
         </dt>
         <dt class="col-lg-3">
            <dd><Appearchamp1/></dd>
         </dt>
         <dt class="col-lg-2">
            <dd><Counter/></dd>
         </dt>
         </ld>
        </div>
      );
    }
  }
  
  export default Experiences;