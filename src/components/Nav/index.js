//Import Reach, The Nav Message, and the CSS Style sheet

import React from "react";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <ul>
         <li className="brand">
           <a href="/">The Office (US)</a> 
           
         </li>

       </ul>
  
    
    <form className="form-inline my-2 my-lg-0">
      
    <a className="btn btn-link" id="back" href="https://jwilly117.github.io/homework2responsive/" role="button">Back To Portfolio</a>

    </form>
  
</nav>
   
  );
}

export default Nav;
