import React from 'react'
// import '../App.css';

import { Placeholder, Brackets, Seashore  } from '../images/index'

const HeroBanner = () => {
  return (
    <div>
        <figure className="hero-images flex flex-wrap justify-center mt-10 bg-rectangles bg-no-repeat bg-center bg-fullX">
          <div className="flex justify-center " >
            {/* <img src={Brackets} alt="" className="relative z-10" /> */}
            <img src={Placeholder} alt="" className="w-2/3" />
          </div>
        
            {/* <img src={Placeholder} alt="" className="w-2/4 z-10 absolute"/> */}
        </figure>

    </div> 
  )
}

export default HeroBanner


        {/* <div className="borders">
          <img src={BorderLeft} alt="Left border" className="border left"/>
          <img src={BorderRight} alt="Right border" className="border right" />
        </div> */}
