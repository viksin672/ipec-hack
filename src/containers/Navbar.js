import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {getGeoLocation} from '../store/actions/getGeoLocation';
import debounce from 'lodash.debounce';
import axios from 'axios';
import { connect } from "react-redux";
import "../style/navbar.css"



class Navbar extends Component {
  
    constructor() {
        super();
        this.state = 
        { term: '' ,
         waypoint0: '',
         term2:'',
         waypoint1:''
        };
        // bind
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.debounceSearch = debounce(this.search, 300);
      }
  
      search(term) {
        axios.get(`https://geocoder.api.here.com/6.2/geocode.json?searchtext=${term}&app_id=MpC8xRqN60004gk925Zj&app_code=zsp6J7jTDfG-1inCXCUcTg`)
          .then(({ data }) => {
            if (this.state.term.length) {
              this.setState({ waypoint0 : data});
            
            }
          })
          .catch(err => { throw err; });
      }
      search(term2) {
          
        axios.get(`https://geocoder.api.here.com/6.2/geocode.json?searchtext=${term2}&app_id=MpC8xRqN60004gk925Zj&app_code=zsp6J7jTDfG-1inCXCUcTg`)
          .then(({ data }) => {
            if (this.state.term2.length) {
              this.setState({ waypoint1: data });
            }
          })
          .catch(err => { throw err; });
      }
    
      handleOnChange(e) {
        let term = e.target.value;
        if (!term) return this.setState({ term: '' });
        this.setState({ term });
        term = term.replace(/\s+/g, '+');
        return this.debounceSearch(term);
      }
      handleOnChange2(e) {
        let term2 = e.target.value;
        if (!term2) return this.setState({ term2: '' });
        this.setState({ term2 });
        term2 = term2.replace(/\s+/g, '+');
        return this.debounceSearch(term2);
      }
      

      onHandleSubmit(e) {
        e.preventDefault();
        const post = {
          waypoint0: this.state.waypoint0,
          waypoint1: this.state.waypoint1
        };
        this.props.getGeoLocation(post);
        
      }
	render(){
    
		return(
			 <div>
          <nav class="navbar navbar-expand-lg navbar-light xo">
      <div class="container">
   
  <a class="xcv" href="/" >Toll Pay</a>
   <form onSubmit={this.onHandleSubmit} >
      <input class="form-control " type="search" placeholder="start point" aria-label="Search"
      value={this.state.term}
      onChange={this.handleOnChange.bind(this)}
      
      />
      <input class="form-control " type = "search" placeholder="destination"
      value={this.state.term2}
      onChange={this.handleOnChange2.bind(this)}
      />
      <button class="btn btn-primary" type="Submit"> Submit </button>
      </form>
  

</div>
</nav>
 

</div>

		);
	}
}

function mapStateToProps(state) {
    return {
      errors: state.errors
    };
  }

export default connect(mapStateToProps, { getGeoLocation })(Navbar);