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


    return (
        <div className="login">

           
            <center>
                
            <br/><br/><br/><br/><br/><br/><h1>Login</h1>
            <form action="POST">
            <fieldset>
                Username  <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <br/><br/>
                Password  <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <br/>
                <br/><br/><br/>
                <input type="submit" onClick={submit} />
                <br/><br/><br/>
                <Link to="/signup">Signup</Link>
                </fieldset>
            </form>
            
            </center>
           


            

        </div>
    )
}

export default Login