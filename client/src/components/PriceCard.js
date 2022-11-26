import React from 'react'

const PriceCard = (props) => {
  return (
    <div className="p-7 shadow-xl">
        <img src={props.image} alt={props.alt} />
        <h3 className={`${props.colorClass} font-merriweather text-2xl`}>{props.title}</h3>
        <p>${props.price} <br />{props.qty} edited photos <br />Approx. {props.time} mins </p>
    </div>
  )
}

export default PriceCard