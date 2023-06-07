import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";
function App() {
//  const  userData=[{
//   id:"1",name:"usama", age:25
//  }]

const [userData, setUserData] =useState([]);
// uname is getting value from enteredUserName and assgning it to name:
// uage is getting value from enteredAge and assigning it to age
const addUserData =(uname,uage)=>{
  setUserData ((prevUserList) =>{
    // uname is the name entered by the user and it renders
    // into the userlist component user.name
    return [...prevUserList ,{name:uname,age:uage,id:Math.random().toString() }];
  })
};

  return (
    <div >
      <AddUser onAddUser={addUserData}/>
      <UserList users={userData}/>

    </div>
  );
}

export default App;
