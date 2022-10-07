import React from 'react'
// import '../App.css';

import { Image1, Image2, Image3, Image4, BorderLeft, BorderRight} from '../images/index'

const HeroBanner = () => {
  return (
    <div>
        <div className="hero-images flex flex-wrap justify-center mt-12 bg-rectangles bg-no-repeat bg-center bg-fullX">
            <img src={Image1} alt="Canary Miku" />
            <img src={Image2} alt="Ereshtar" />
            <img src={Image3} alt="Cool Fox" />
            <img src={Image4} alt="Arthur" />
        </div>

    </div>
  )
}

export default HeroBanner


        {/* <div className="borders">
          <img src={BorderLeft} alt="Left border" className="border left"/>
          <img src={BorderRight} alt="Right border" className="border right" />
        </div> */}
