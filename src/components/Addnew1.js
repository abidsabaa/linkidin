import React, { Component } from 'react';
import './recommendation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './experiences.css';
class Addnew1 extends Component{
    constructor(props) {
        super(props);
        this.state = { works1:[]};
    }
    
    incrementCount1 = () => {
    var title1 = this.refs.title.value;
    if(localStorage.getItem('works1')==null){
      var works1 = [];
      works1.push(title1);
      localStorage.setItem('works1',JSON.stringify(works1))
    }
    else{
      works1 = JSON.parse(localStorage.getItem('works1'));
      works1.push(title1);
      localStorage.setItem('works1',JSON.stringify(works1))
    }
    this.setState({
      works1 : JSON.parse(localStorage.getItem('works1'))
    
    })
    };
    delete1 = (e1) => {
      var index1 = e1.target.getAttribute('data-key1');
      var list1 = JSON.parse(localStorage.getItem('works1'));
      list1.splice(index1,1);
      this.setState({
        works1 : list1
      });
     localStorage.setItem('works1',JSON.stringify(list1));
    }
    ouvrirFermerSpoiler1 = (bouton1)=> {
      var divContenu1 = bouton1.nextSibling;
      if(divContenu1.nodeType === 3) divContenu1 = divContenu1.nextSibling;
      if(divContenu1.style.display === 'block') {
          divContenu1.style.display = 'none';
      } else {
          divContenu1.style.display = 'block';
      }
    }

render() {
    return(
        <div>
            <br/><br/><br/><br/><br/>
            <ld class="row">
            <input class="col-lg-3 container-fluid img-circle" type = "image" className="styleimage" aria-label ="image" name = "imagebutton" src = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
            <dt class="col-lg-2">
              <dd>X-Man</dd>
              <dd className="defstyle">Engineer</dd>
            </dt>
            <dt class="col-lg-5">
              <dd><input name="nomElement"  type="text" placeholder="title...." ref='title'onclick="ouvrirFermerSpoiler1(recomm)" /></dd>
            </dt>
            <dt class="col-lg-2">
            <button class="btn btn-primary" name="recomm" onClick={this.incrementCount1}>Submit<span class="badge" color="Grey" ></span> </button>
            </dt> 
            </ld>

         <ld>
             
              {this.state.works1.map(function(work1,index1){ return(
                <dt key={index1}>{work1}<input type="button" value="X" onClick={() => this.delete()} data-key1={index1}/></dt>
              );},this)
              }
         </ld>
         
        </div>
    );
}}
export default Addnew1;