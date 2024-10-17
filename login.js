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

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
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


    return (  <div className="login">
        <link href="login1.css" type="text/css" rel="stylesheet" />
        <form action="POST">
          <div className="streamify">
            <p>
              Log In to <text>Streamify</text>
            </p>
          </div>
          <div className="formy">
            <div className="mail">
              <label htmlFor="email">
                <text>EMAIL</text>
              </label>
              <br />
              <input type="email" name="email" placeholder="Email"  onChange={(e) => { setEmail(e.target.value) }}   />
            </div>
            <br />
            <div className="pass">
              <label htmlFor="password">
                <text>PASSWORD</text>
              </label>
              <br />
              <input
                type="password"
                name="email"
                placeholder="Password"
                onChange={(e) => { setPassword(e.target.value) }} 
              />
            </div>
          </div>
           <br/>
          <input type="submit" onClick={submit} />
        </form>
       
        </div>
                
                
                
           


            

    )
}

export default Login