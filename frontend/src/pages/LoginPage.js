import React, {useRef, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUsername = usernameInput.current.value;
    const currentPassword = passwordInput.current.value;

    const object = {
      username: currentUsername,
      password: currentPassword,
    }

    axios.post("http://localhost:5000/user/login", object).then(response => {
      const responseData = response.data
      if(responseData.message === "Authenticated"){
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("username", responseData.username);
        history.push("/dashboard");
      }else{
        setMessage(responseData.message);
      }
    })

  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {message}
        <input ref={usernameInput} placeholder="Username" />
        <input ref={passwordInput} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
