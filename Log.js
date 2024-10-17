import React,{  useState }  from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import { useNavigate} from "react-router-dom"
export default function Log(){
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
return(
  <div>
  <link href="login1.css" type="text/css" rel="stylesheet" />
  <form action="" method="POST">
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
        <input type="email" name="email" placeholder="  Enter your email-id"  onChange={(e) => { setEmail(e.target.value) }}   />
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
          placeholder="  Enter your password"
          onChange={(e) => { setPassword(e.target.value) }} 
        />
      </div>
    </div>
     <br/>
    <div href="">
    
    <button type="submit" onClick={submit} >Login</button>
      
    </div>
  </form>
  </div>
)
}
