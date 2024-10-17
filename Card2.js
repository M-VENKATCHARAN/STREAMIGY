import React from "react"
export default function Card2(props){
    return(
    <div className="series-card">
        <a href="http://127.0.0.1:5500/src/veraya.html">
        <img className="series-image" src={props.seriesImage} alt="bvc"/></a>
        <p className="series-name">{props.seriesName}  </p>
        <div className="series-details">
            <p className="series-release">{props.yearOfRelease}</p>
            
            <p className="series-seasons"> SS {props.seasons}</p>
        </div>
    </div>
    )
}