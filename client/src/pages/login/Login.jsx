import "./login.css"
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>E-Mail</label>
        <input type="text" className="loginInputs" placeholder="Enter your email..." id="" />
        <label>Password</label>
        <input type="password" className="loginInputs" placeholder="Enter your password..." id="" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  )
}
