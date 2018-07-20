import React, { Component } from 'react';
import './recommendation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './experiences.css';
import Addnew1 from './Addnew1';
class Appearchamp1 extends Component{
    constructor(props) {
        super(props);
        this.state = {showResults1: false};
    }
    
    onClick1=() => {
        this.setState({ showResults1: true });
    }
    
render() {
    return(
        <div>
        <input type="submit" class="btn btn-primary" value="Add New Recommendation" onClick1={this.onClick1} />
                { this.state.showResults1 ? <Addnew1 /> : null }
            </div>
    );
}}
export default Appearchamp1;