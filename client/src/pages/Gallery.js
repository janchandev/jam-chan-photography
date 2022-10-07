import React from 'react'
import { useState, useEffect } from "react"
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const Gallery = () => {
    const [thumbnails, setThumbnails] = useState([])
    const albumsCollectionRef = collection(db, "albums")

    useEffect(() => {
        const getThumbnails = async () => {
            const data = await getDocs(albumsCollectionRef)
            setThumbnails(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getThumbnails()
    }, [])

  
    return (
    <div>
        <h1 className="text-headBlue font-merriweather text-4xl text-center mt-10">Gallery</h1>
        <h3 className="text-darkOrange font-merriweather text-xl text-center my-3">Browse our latest albums</h3>
        <section className="grid md:grid-cols-3 grid-cols-2 gap-2 md:mx-20 mx-5">
            {thumbnails.map((thumbnail) => {
                return (
                    <img src={thumbnail.source} alt={thumbnail.albumtitle} title={thumbnail.albumtitle} 
                    className="cursor-pointer"/>
                )
            })}
        </section>
    </div>
  )
}

export default Gallery