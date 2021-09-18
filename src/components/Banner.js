import axios from '../axios';
import React, { useEffect, useState } from 'react';
import "../Banner.css"
import requests from '../Request';

function Banner() {
    const [show, setshow] = useState(false);
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, [])
    
    console.log('movie', movie);

    const truncateText = (string, show, n) => {
        if(!show && string.length > n){
            return string.substr(0, n-1)
        }else{
            return string
        }
     }

    return (
        <header className="banner" style ={{
            backgroundSize:'cover',
            backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'cover cover'
        }}>
          <div className="banner__content">
              <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
              <div className="banner__buttons" >
                 <button className="banner__button">Play</button >
                 <button className="banner__button">My List</button >
              </div>
              <h1 className="banner__description">
                  {truncateText(`${movie?.overview}? ${movie?.overview}:"Overview"}` , show, 50)}
                 
                  <span
                    onClick={() => setshow(!show)}
                    className="banner--descr--trunc">
                    {!show?`...more`: `...less`}
                  </span>
              </h1>
          </div>
        <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner
