import React, { Component } from 'react';
import './recommendation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './experiences.css';
class Addnew extends Component{
    constructor(props) {
        super(props);
        this.state = { works:JSON.parse(localStorage.getItem('works'))};
    }
    
    incrementCount = () => {
    var title = this.refs.title.value;
    if(localStorage.getItem('works')==null){
      var works = [];
      works.push(title);
      localStorage.setItem('works',JSON.stringify(works))
    }
    else{
      works = JSON.parse(localStorage.getItem('works'));
      works.push(title);
      localStorage.setItem('works',JSON.stringify(works))
    }
    this.setState({
      works : JSON.parse(localStorage.getItem('works'))
    
    })
    };
    delete = (e) => {
      var index = e.target.getAttribute('data-key');
      var list = JSON.parse(localStorage.getItem('works'));
      list.splice(index,1);
      this.setState({
        works : list
      });
     localStorage.setItem('works',JSON.stringify(list));
    }
    ouvrirFermerSpoiler = (bouton)=> {
      var divContenu = bouton.nextSibling;
      if(divContenu.nodeType === 3) divContenu = divContenu.nextSibling;
      if(divContenu.style.display === 'block') {
          divContenu.style.display = 'none';
      } else {
          divContenu.style.display = 'block';
      }
    }

render() {
    return(
        <div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ld class="row">
            <dt class="col-lg-2">

             
         </dt>
            <dt class=" col-lg-3 ">
              <dd><input name="nomElement"  type="text" placeholder="title...." ref='title'onclick="ouvrirFermerSpoiler(recomm)" /></dd>
              <dd><button class="btn btn-primary" name="recomm" onClick={this.incrementCount}>Submit<span class="badge" color="Grey" ></span> </button></dd>
            </dt>
            </ld>

         <ld>

              {this.state.works.map(function(work,index){ return(
                <dt key={index}>{work}</dt>
              );},this)
              }
         </ld>
         
        </div>
    );
}}
export default Addnew;