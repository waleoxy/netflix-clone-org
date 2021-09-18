import React, { useState } from 'react';
import "../Banner.css"

function Banner() {
    const [show, setshow] = useState(false)
    
    const truncateText = (string, show, n) => {
        if(!show && string.length > n){
            return string.substr(0, n)
        }else{
            return string
        }
     }

    return (
        <header className="banner" style ={{
            backgroundSize:'cover',
            backgroundImage:`url('https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg')`,
            backgroundPosition: 'cover cover'
        }}>
          <div className="banner__content">
              <h1 className="banner__title">Movie Name</h1>
              <div className="banner__buttons" >
                 <button className="banner__button">Play</button >
                 <button className="banner__button">My List</button >
              </div>
              <h1 className="banner__description">
                  {truncateText(`This is a test description test description test description 
                  test description test description test description test description 
                  test description test description test description test description 
                  test description test description`, show, 50)}
                 
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
