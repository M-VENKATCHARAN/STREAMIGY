import React from "react"
import Card2 from "./Card2.js"
import seriesdata from "./seriesdata.js"
import Navbar from "./navbar.js"
export default function Series(){
    const seriesElements=seriesdata.map(item=>
        <Card2
        seriesImage= {item.seriesImage}
        seriesName = {item.seriesName}
        yearOfRelease= {item.yearOfRelease}
        seasons={item.seasons}  />)
    return (
        <section >
                < Navbar className="nav" />
                <div className="cards" >{seriesElements}</div>
        </section>
      
    )
}