import React from "react";

const LoginComponentRender = props => {
  return (
    <div className="input-container">
      <div>
        {/* Login / Register */}
        <h1 className="title">Login</h1>
      </div>

      {/* If details are incorrect */}
      {props.detailsIncorrect && (
        <div className="incorrect">
          <p>Incorrect username or password</p>
        </div>
      )}

      {/* Input boxes for user details */}
      <div className="credentials">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={props.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={props.handleChange}
        />
      </div>

      {/* Submit */}
      <div className="submit-button">
        <button onClick={props.handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginComponentRender;
