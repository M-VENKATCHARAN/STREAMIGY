import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div>
        <link rel="stylesheet" href="signup1.css" type="text/css" />
        <form method="POST">
          <div>
            <p id="create"> Create New Account</p>
            <p className="register">
              Already registered ?{" "}
              <Link to="/login">Login Page</Link>
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
                onChange={(e) => { setEmail(e.target.value) }}
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
                onChange={(e) => { setPassword(e.target.value) }}
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
       
        </div>)
}

export default Login