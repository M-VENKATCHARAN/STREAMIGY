import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginPage = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        if(username===password){
            navigate('/movies');
        }
        else{
            alert('wrong credentials');
            navigate('/');   
        }
    }


    return (
        <div className='Login'>
       <div className="wrapper">
            <form onSubmit={handleLogin}>
            <h1>Login </h1>
            <div className="input-box">
                <input name='username' type="text" placeholder="username" value = {username} required onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className="input-box">
                <input name ='password' type="Password" placeholder="Password" value={password} required onChange={(p)=> setPassword(p.target.value)}/>
            </div>
            <button name='submit' type="submit" className="btn">Login</button>

            <div className="register-link">
                <p>Don't have an account yet? <Link to="/register">Register</Link></p>
            </div>

            </form>
       </div>
       </div>
    )

}

export default LoginPage;