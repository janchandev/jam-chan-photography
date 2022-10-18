import React from 'react'
import { Toronto } from '../images'
// import '../App.css';

const MiniAbout = () => {
  return (
    <section className="flex flex-wrap justify-between mt-28 mx-28 ">
      <div className="about-blurb lg:max-w-lg">
        <h3 className="text-darkOrange font-merriweather text-3xl">Based in the</h3>
        <h3 className="text-headBlue font-merriweather text-3xl">Greater Toronto Area</h3>
        <p className="font-encodeSans text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque at dictum leo. 
        Ut fringilla, nibh eu lacinia pellentesque, 
        ligula leo dignissim ex, eget faucibus nunc dolor eu dolor.</p>
      </div>
      <img src={Toronto} alt="Toronto Skyline" className="" />

    </section>
  )
}

export default MiniAbout

{/* <div className="about-blurb">
<div className="blurb-text">
 <h3>Based in the</h3>
 <h3>Greater Toronto Area</h3>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Quisque at dictum leo. 
   Ut fringilla, nibh eu lacinia pellentesque, 
   ligula leo dignissim ex, eget faucibus nunc dolor eu dolor. </p>
</div>
<img src={ProfilePhoto} alt="Jam Chan" />

</div> */}