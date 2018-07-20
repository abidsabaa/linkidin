import React, { Component } from 'react';
import './recommendation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './experiences.css';
import Addnew from './addnew';
class Appearchamp extends Component{
    constructor(props) {
        super(props);
        this.state = {showResults: false};
    }
    
    onClick=() => {
        this.setState({ showResults: true });
    }
    
render() {
    return(
        <div class="col-lg-3">
        <input type="submit" class="btn btn-primary" value="Add New Recommendation" onClick={this.onClick} />
                { this.state.showResults ? <Addnew /> : null }
            </div>
    );
}}
export default Appearchamp;