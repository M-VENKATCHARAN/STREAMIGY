import React from "react"
import {Link} from "react-router-dom"
export default function Signup(){

return(
  <div>
  <link rel="stylesheet" href="signup1.css" type="text/css" />
  <form method="POST">
    <div>
      <p id="create"> Create New Account</p>
      <p className="register">
        Already registered ?{" "}
        <Link to="/login" href="" method="GET" target="self">
          login
        </Link>
      </p>
    </div>
    <div className="form-ele">
      <div>
        <label htmlFor="username">
          <text className="name">Name</text>
        </label>
        <br />
        <input type="text" name="username" placeholder="   Enter your name" />
      </div>
      <br />
      <div>
        <label htmlFor="Mail-id">
          <text className="mail">EMAIL</text>
        </label>
        <br />
        <input
          type="email"
          id="Mail-id"
          name="Mail-id"
          placeholder="  Enter your email-id"
        />
        <br />
      </div>
      <br />
      <div>
        <label htmlFor="user-password">
          <text className="pass">Password</text>
        </label>
        <br />
        <input
          type="password"
          id="user-password"
          name="user-password"
          placeholder="  Enter your password"
        />
        <br />
      </div>
      <br/>
    </div>
    <div>
    <input type="submit" onClick={submit} />
    </div>
  </form>
  <Link to="/">Login Page</Link>
  </div>
)
}

