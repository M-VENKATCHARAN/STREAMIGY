import React from "react"
import Card from "./Card.js"
import populardata from "./populardata.js"
import Navbar from "./navbar.js"
export default function Popular(){
    const popularElements=populardata.map(item=>
        <Card
        movieImage= {item.movieImage}
        movieName = {item.movieName}
        yearOfRelease= {item.yearOfRelease}
        duration= {item.duration}  />)
    return (
        <section >
                < Navbar className="nav" />
                <div className="cards" >{popularElements}</div>
        </section>
      
    )
}