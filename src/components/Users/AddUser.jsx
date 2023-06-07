import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "../Users/AddUser.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "./Wrapper";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError]=useState();


  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age'
      })
        return;
    }
    if (enteredAge < 0) {
        setError({
            title:'invalid age',
            message:'Please enter a valid age'
        })
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    // key={index}
    
    console.log("Form Submitted");
    console.log(enteredUserName,enteredAge)
    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler=()=>{
    setError(null);
  }

  return (
     // As it is our own component so it does not know what classNAme is
    // We need to add our custom class name in the card component to add style
    // other than card.css to adduser component
    <Wrapper>
    {error&&<ErrorModal title={error.title} message={error.message} onClose={errorHandler}/>}
     <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUserName}
          onChange={userNameHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
}
export default AddUser;
