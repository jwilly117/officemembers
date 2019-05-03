//Import both react and the Game itself from the game folder
//Game is a compilation of components, it keeps things organized. 
import React from "react";
import Game from "./components/Game";


//Here we return the Entirity of the game functionality, with all of its components and functionality (hopefully)
function App() {
  return <Game />;
}

//Export Said app for use in index
export default App;
