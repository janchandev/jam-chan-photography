import React from 'react'
import { ProfilePhoto, SoloCard, DuoCard } from '../images/index'
import PriceCard from '../components/PriceCard'

const About = () => {
  return (
    <div>
        <figure className="bg-flowerTree bg-cover bg-no-repeat bg-center bg-fixed h-96 grid place-items-center">
          <h1 className="text-white border-white border-solid border-4 bg-darkBlue/80 p-8 font-goudy md:text-4xl text-2xl">About the Photographer</h1>
        </figure>
        <h3 className="text-darkOrange font-merriweather md:text-5xl text-3xl my-10 text-center">Hello, I'm <span className="text-headBlue">Jam chan</span> </h3>
        <section className="flex flex-wrap gap-8 justify-center my-10 mx-10">
            <img src={ProfilePhoto} alt="Jam Chan profile" />
            <p className="font-encodeSans text-xl max-w-sm pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque at dictum leo. 
            Ut fringilla, nibh eu lacinia pellentesque, 
            ligula leo dignissim ex, eget faucibus nunc dolor eu dolor.
            </p>
        </section>
        <h3 className="text-darkOrange font-merriweather md:text-5xl text-3xl text-center my-5"> Pricing</h3>
        <section className="flex flex-wrap gap-10 justify-center text-center font-encodeSans text-xl">
          <PriceCard image={SoloCard} alt="Fox solo card" colorClass="text-headBlue" title="Solo Shoot" price="30" qty="6" time="30"/>
          <PriceCard image={DuoCard} alt="Ereshtar solo card" colorClass="text-darkOrange" title="Duo Shoot" price="40" qty="8-10" time="45"/>
        </section>
        <section>
          <h3 className="text-headBlue font-merriweather md:text-5xl text-3xl text-center my-10"> Booking Status</h3>
          <p className="font-encodeSans text-xl text-center">Booking is currently closed. Come back for more updates on the next bookings </p>
        </section>
        <h3 className="text-darkOrange font-merriweather md:text-5xl text-3xl text-center my-10"> Photoshoot Terms and Conditions</h3>
        <section className="flex flex-wrap justify-center">
        <ol type="a" className="font-encodeSans text-xl list-decimal space-y-3 mx-10">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Duis semper blandit lorem sit amet cursus.</li>
          <li>Donec non semper nibh.</li>
          <li>Nullam volutpat iaculis tellus, a venenatis ligula elementum nec.</li>
          <li>Nunc tristique quis diam at faucibus.</li>
          <li>Vestibulum pretium lectus libero, eu consequat eros sodales eu.</li>
          <li>Duis molestie mattis justo, non aliquet turpis.</li>
          <li>Cras tristique ultrices urna, non pellentesque erat tincidunt nec.</li>
          <li>Aenean interdum tempor nisi, posuere fringilla est molestie vitae.</li>
          <li>Cras tincidunt quam est, nec gravida lectus tempus sagittis.</li>
        </ol>
        </section>
        
    </div>
  )
}

export default About