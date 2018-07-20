import React, { Component } from 'react';
import './recommendation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './experiences.css';
import Counter2 from './Counter2';
import Appearchamp from "./appearchamp";

class Recommendation extends Component {
  
    render() {
     
      return (
        <div className ="expstyle">
         <h1>{this.props.recom}</h1>
         <br/>
         <dl class="row">
            <input class="col-lg-2 container-fluid img-circle" type = "image" className="styleimage" aria-label ="image" name = "imagebutton" src = "https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-9/15134769_817322681704441_8028276243297611414_n.jpg?_nc_cat=0&oh=de332def74b92657d503af2e597c1f3e&oe=5BD9539F" />
            <dt class="col-lg-2">
              <dd>{this.props.name}</dd>
              <dd className="defstyle">{this.props.defname}</dd>
            </dt>
            <dt class="col-lg-3">
              <dd>{this.props.recom1}</dd>
            </dt>
            <dt class="col-lg-3">
            <Appearchamp/>
            </dt>
            <dt class="col-lg-3">
            <Counter2/>
            </dt>
             
         </dl>
         
         
        </div>
      );
    }
  }
  
  export default Recommendation;