import React from "react"
export default function Card(props){
    return(
    <div className="movie-card">
        <a href="http://127.0.0.1:5500/src/veraya.html"><img className="movie-image" src={props.movieImage} alt="bvc"/></a>
        
        <p className="movie-name">{props.movieName}  </p>
        <div className="movie-details">
            <p className="movie-release">{props.yearOfRelease}</p>
            <p className="movie-duration">{props.duration}</p>
        </div>
    </div>
    )
}
