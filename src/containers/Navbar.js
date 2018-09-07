import React, { Component } from 'react';
import { } from "react-router-dom";
import "../style/navbar.css" 


class Navbar extends Component {
  
  

	render(){
    
		return(
			 <div>
          <nav class="navbar navbar-expand-lg navbar-light xo">
      <div class="container">
   
  <a class="xcv" href="/" >Toll Pay</a>
   <form >
      <input class="form-control" type="search" placeholder="  Start Point" aria-label="Search" /> 
      <input class = "form-control" type = "search" placeholder="  Destination"/>
      </form>

</div>
</nav>
 

</div>

		);
	}
}



export default Navbar;