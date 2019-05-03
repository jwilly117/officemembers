//Import both react and the stylesheet from the same folder
import React from "react";
import "./style.css";
import Score from "../ScoreMessage";


//Create a component which will 
function Header(props) {
  return (
    <header className="header">
      <h1>The Office - Randomizer!</h1>
      <img src="https://live.staticflickr.com/2866/8917727444_12f7e51da6_b.jpg" alt="Scranton Business Park"></img>
      <h2>Click on a Random Employee to rack up Points, Try to get a high Score!</h2>

      {/* Display if chosen was corrent or incorrect */}
      <h4>      <Score score={props.score} topScore={props.topScore} /> </h4>
      <hr></hr>
      <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
      
    </header>
  );
}


//Export said component
export default Header;


