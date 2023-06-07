import React from "react";
import Card from "./Card";
import Button from "./Button";
import '../UI/ErrorModal.css';

function ErrorModal (props){
return(
    <div>
        <div className="backdrop" onClick={props.onClose}></div>
<Card className="modal">
<header className="header"> 
    <h2>{props.title}</h2>
</header>
<div className="content">
    <p>{props.message}</p>
</div>
<footer className="actions">
    <Button onClick={props.onClose}>Close</Button>
    </footer>
</Card>\</div>

);
};
export default  ErrorModal;