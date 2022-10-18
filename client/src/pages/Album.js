import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { db } from '../firebase-config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const Album = () => {
  const [photos, setPhotos] = useState([])
  const photosCollectionRef = collection(db, "photos")
  const [album, setAlbum] = useState([])
  const albumsCollectionRef = collection(db, "albums")
  const { albumid } = useParams()

  const qAlbum = query(albumsCollectionRef, where("albumid", "==", `${albumid}`))
  useEffect(() => {
    const getAlbum = async () => {
        const data = await getDocs(qAlbum)
        setAlbum(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getAlbum()
}, [])

  const qPhotos = query(photosCollectionRef, where("albumid", "==", `${albumid}`))
  useEffect(() => {
    const getPhotos = async () => {
        const data = await getDocs(qPhotos)
        setPhotos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    }
    getPhotos()
}, [])

  return (
    <div>
      <Link to="/gallery">
         <p className="mt-10 ml-32 font-merriweather text-darkOrange cursor-pointer">&#8592; Back to Albums</p>
      </Link>
     
        {album.map((text) => {
          return (
            <div>
              <h1 className="text-headBlue font-merriweather text-4xl text-center mt-5">{text.albumtitle}</h1>
              <p className="text-darkOrange font-merriweather text-xl text-center my-3">{text.description}</p>
            </div>
          )
        })}
        <section className="grid md:grid-cols-3 grid-cols-2 gap-2 md:mx-20 mx-5">
            {photos.map((photo) => {
                return (
                        <img src={photo.source} alt={photo.alt} title={photo.alt} 
                        className="cursor-pointer"/>
                )
            })}
        </section>
    </div>
  )
}

export default Album