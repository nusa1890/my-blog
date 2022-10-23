import "./register.css";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"


export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
      console.log(res)
      } catch (err){setError(true);}
    }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInputs"
          placeholder="Enter your username..."
          id=""
          onChange={e=>setUsername(e.target.value)}
        />
        <label>E-Mail</label>
        <input
          type="text"
          className="registerInputs"
          placeholder="Enter your email..."
          id=""
          onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInputs"
          placeholder="Enter your password..."
          id=""
          onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
      {error && <span>Something went wrong</span>}
    </div>
  );
}
