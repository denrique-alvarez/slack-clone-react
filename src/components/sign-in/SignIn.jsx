import './SignIn.css';

import { Link } from "react-router-dom";
import { useState } from "react";

export const SignIn = () => {
  // track and save the username value
  const [userName, setUsername] = useState("Visitor" + (Math.ceil(Math.random() * 10000)));
  // update the username with the input from the user
  const userInput = (event) => {
    setUsername(event.target.value);
  };

  // api call to create new user that takes user name as argument
  const createUser = async (user) => {
    const response = await fetch("http://localhost:1337/api/endusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { username: user } }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  };

  const postUser = () => {
    let newUser = userName;
    createUser(newUser);
  };

  return (
    <div className='create-user-form'>
      <h1>Slack Clone</h1>
      <h3>Create your Username</h3>
      <input value={userName} onChange={userInput}></input>

      <Link to={`/chat/${userName}`} state={userName}>
        <button onClick={postUser}>Create User</button>
      </Link>
    </div>
  );
};
