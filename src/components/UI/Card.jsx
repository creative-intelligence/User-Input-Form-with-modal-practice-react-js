import React from "react";
import '../UI/Card.css';

function Card (props){
    return (
        // Defining an external class using it with card component styling 
        <div  className={`${'card'} ${props.className}`}>
            {props.children}
        </div>
    )
};
export default Card;

