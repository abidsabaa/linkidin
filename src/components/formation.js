import React, { Component } from 'react';
import './formation.css';
import './experiences.css';
import Counter1 from './Counter1'
class Formation extends Component {
    render() {
      return (
        <div className ="expstyle">
         <p >
         <h1>{this.props.form}</h1>
         <br/>
         <dl>
            <dt class="row">
                <input class="col-lg-3 container-fluid img-circle" type = "image" className="styleimage" aria-label ="image" name = "imagebutton" src = "http://www.supcom.mincom.tn/ComNet2014/images/logo_supcom.png" />
                <p class="col-lg-4" >
                  <dd>{this.props.form1}</dd>
                  <dd className="defstyle">{this.props.def1}</dd>
                </p>
                <span class="col-lg-2">
                <input type="submit" class="btn btn-primary" value="Add New Formation"  />
                </span>
                <span class="col-lg-2">
                <Counter1/>
                </span>
            </dt>
            <hr/>
            <dt class="row">
                <input class="col-lg-3 container-fluid img-circle" type = "image" className="styleimage" aria-label ="image" name = "imagebutton" src = "https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-9/539966_403354196386593_454087473_n.jpg?_nc_cat=0&oh=cc5b558c5e5133d2616d8b3f1e600b3a&oe=5BA5148D" />
                <p class="col-lg-8" >
                  <dd>{this.props.form2}</dd>
                  <dd className="defstyle">{this.props.def2}</dd>
                </p>
            </dt>
            <hr/>
            <td class="row">
                <input class="col-lg-3 container-fluid img-circle" type = "image" className="styleimage" aria-label ="image" name = "imagebutton" src = "http://icons.iconarchive.com/icons/icons8/ios7/512/Science-University-icon.png" />
                <p class="col-lg-8" >
                  <dd>{this.props.form3}</dd>
                  <dd className="defstyle">{this.props.def3}</dd>
                </p>
            </td>
          </dl>
          <br/>
          </p>
        </div>
      );
    }
  }
  
  export default Formation;
