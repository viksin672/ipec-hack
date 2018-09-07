import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Navbar extends Component {
  
  
  
	render(){
    
		return(
			 <div>
          <nav class="navbar navbar-expand-lg navbar-light xo">
      <div class="container">
   
  <a class="xcv" href="/" >Toll Pay</a>
   <form >
      <input class="form-control " type="search" placeholder="start point" aria-label="Search" />
      <input type = "search" placeholder="destination"/>
      </form>
  

</div>
</nav>
 

</div>

		);
	}
}



export default Navbar;