import { useState } from "react";
import "./InputForm.css";

const InputForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="input"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">{isSignUp ? "Register" : "LogIn"}</button>
      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <span onClick={() => setIsSignUp((prev) => !prev)}>
          {" "}
          {isSignUp ? "LogIn" : "Create new account"}
        </span>
      </p>
    </form>
  );
};

export default InputForm;
