//Import both react and the stylesheet from the same folder
import React from "react";
import "./style.css";

//Below, we create a

function ClickItem(props) {
    return (
        // Create a Div that will contain the images and their clicked reactions.

        <div
        role="img"
        aria-label="click item"
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
        className={`picBox${props.shake ? "" : ""}`}
        >
        
        </div>
    );
}

//Export the component function
export default ClickItem;