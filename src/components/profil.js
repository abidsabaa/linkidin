import React, { Component } from 'react';
import './profil.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Profil extends Component {
    render() {
      return (
        <div className ="profilstyle">
         <ld class="row">
            <input class="container-fluid img-circle" type = "image" className="styleimage1" aria-label ="image" name = "imagebutton" src = "https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-9/28576502_10208665505354697_2017910445471882554_n.jpg?_nc_cat=0&oh=6a8258bb54375bbbde12d1c5e111032d&oe=5BEC730A" />
            <dt>
              <dd>{this.props.name1}</dd>
              <dd>{this.props.defname1}</dd>
              <dd>{this.props.defname2}</dd>
              <dd>Téléphone:{this.props.tele}</dd>
              <dd>E-mail:{this.props.mail}</dd>

            </dt>
            <dt>
              
            </dt>
         </ld>
        </div>
      );
    }
  }
  
  export default Profil;