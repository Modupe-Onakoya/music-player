import React from 'react'
import SideBar from './SideBar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets'

const DisplayAlbum = () => {

    const { id } = useParams()
    const albumData = albumsData[id]
    console.log(albumData)

    return (
        <div>
            <SideBar />
        </div>
    )
}

export default DisplayAlbum