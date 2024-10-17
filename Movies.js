import React from "react"
import Card from "./Card.js"
import moviedata from "./moviedata.js"
import Navbar from "./navbar.js"
export default function Movies(){
    const movieElements=moviedata.map(item=>
        <Card
        movieImage= {item.movieImage}
        movieName = {item.movieName}
        yearOfRelease= {item.yearOfRelease}
        duration= {item.duration}  
        />)
    return (
        <section >
                < Navbar className="nav" />
                <div className="cards">{movieElements}</div>
        </section>
        
    )
}