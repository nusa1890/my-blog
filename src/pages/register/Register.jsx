import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInputs"
          placeholder="Enter your username..."
          id=""
        />
        <label>E-Mail</label>
        <input
          type="text"
          className="registerInputs"
          placeholder="Enter your email..."
          id=""
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInputs"
          placeholder="Enter your password..."
          id=""
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}