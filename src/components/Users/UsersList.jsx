import React from "react";
import "../Users/UserList.css";
import Card from "../UI/Card";

function UserList(props) {
  return (
    <React.Fragment>
    <Card className="users">
      <ul>
        {/*Map that Array of Users to array of JSX elements*/}
        {/* Here user is the cureent value of array */}
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
    </React.Fragment>
  );
}
export default UserList;
