import React, { Component } from 'react';
import { } from "react-router-dom";
import "../style/navbar.css"; 


class Navbar extends Component {
  
  

	render(){
    
		return(
			 <div>
          <nav class="navbar navbar-expand-lg navbar-light xo">
     <a class="nav" href="/" >Toll Pay</a>

</nav>
      <div class="container">
   <form >
      <input class="form-control " type="search" placeholder="start point" aria-label="Search" />
      <input type = "search" placeholder="destination"/>
      </form>   
</div> 

</div>

		);
	}
}



export default Navbar;