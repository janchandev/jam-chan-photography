import React from 'react'
import { useState } from 'react'

const Album = () => {
  const [photos, setPhotos] = useState([])
  
    return (
    <div>
        <h1 className="text-headBlue font-merriweather text-4xl text-center mt-10">Album Title</h1>
        {/* TODO: Line breaks, props: dynamic album title, description, and content */}
        <p className="text-darkOrange font-merriweather text-xl text-center my-3">Album description</p>
    </div>
  )
}

export default Album