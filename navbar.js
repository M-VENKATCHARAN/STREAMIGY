import React from "react"
import {Link} from "react-router-dom"
export default function Navbar(){
    return (
        <div className="navbar">
            <img className="nav-logo" src="streamify.png" alt="" width="43px" height="53px"/> <span><h3>Streamify</h3></span>
            <Link className="home-a"  to="/home" >HOME</Link>
            <Link className="movies-a" to="/movies">MOVIES</Link>
            <Link className="series-a" to="/series">TV SERIES</Link>
            <Link className="popular-a" to="/popular">POPULAR</Link>
        </div>
    )
}