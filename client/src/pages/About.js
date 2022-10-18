import React from 'react'
import { ProfilePhoto } from '../images/index'

const About = () => {
  return (
    <div>
        <figure className="bg-flowerTree bg-cover h-96 grid place-items-center">
          <h1 className="text-white border-white border-solid border-4 bg-darkBlue/80 p-8 font-goudy md:text-4xl text-2xl">About the Photographer</h1>
        </figure>
        <h3 className="text-darkOrange font-merriweather text-5xl my-10 text-center">Hello, I'm <span className="text-headBlue">Jam chan</span> </h3>
        <section className="flex flex-wrap justify-center space-x-20 my-10">
            <img src={ProfilePhoto} alt="Jam Chan profile" />
            <p className="font-encodeSans text-xl max-w-sm pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque at dictum leo. 
            Ut fringilla, nibh eu lacinia pellentesque, 
            ligula leo dignissim ex, eget faucibus nunc dolor eu dolor.
            </p>
        </section>
        <section className="">
          <h3 className="text-darkOrange font-merriweather text-5xl text-center my-10"> Pricing</h3>

        </section>
        
    </div>
  )
}

export default About