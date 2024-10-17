
import React from "react"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./home.js"
import Movies from "./Movies.js"
import Series from "./Series.js"
import Popular from "./Popular.js"
import Login from "./login.js"
import Signup from "./signup.js"
import './App.css';
export default function App(){
  
    return (
        <BrowserRouter>
        <section >
            <Routes>
                <Route path="/" element={<Signup/>}> </Route>
                <Route path="/login" element={<Login/>}> </Route>
                <Route path="/home" element={<Home/>}> </Route>
                <Route path="/movies" element={<Movies/>}> </Route>
                <Route path="/series" element={<Series/>}> </Route>
                <Route path="/popular" element={<Popular/>}> </Route>
                </Routes>
              
        </section>
        </BrowserRouter>
        
    )
}