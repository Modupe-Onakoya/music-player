
import React from 'react'
import DisplayNav from './DisplayNav'
import { albumsData, songsData } from '../assets/assets'
import Album from './Album'
import Song from './Song'

const DisplayMusic = () => {
    return (
        <div className='w-[75%]'>
            <DisplayNav />
            <h1 className='text-bold text-[20px] pb-5'>Featured Charts</h1>

            <div className='flex '>
                {albumsData.map((item, index) => (
                    <Album id={index} image={item.image} na={item.name} desc={item.desc} />
                ))}
            </div>
            <h1 className='pt-5 font-bold pb-5'>
                Today's biggest hits
            </h1>
            <div className='flex gap-5'>
                {songsData.map((item) => (
                    <Song image={item.image} namee={item.name} />
                ))}
            </div>


        </div>
    )
}

export default DisplayMusic