
import React from 'react'
import { assets } from '../assets/assets'

const DisplayNav = () => {
    return (
        <div className=' w-[100%] sm:pt-2 flex justify-between px-2 pb-5'>

            <div className='flex gap-2'>
                <img src={assets.arrow_left} alt="" className='bg-black size-5 rounded-full p-1' />
                <img src={assets.arrow_right} alt="" className='bg-black size-5 rounded-full p-1' />
            </div>
            <div className='flex gap-2'>
                <p>
                    Explore Premium
                </p>
                <p>
                    install App
                </p>
                <p>
                    D
                </p>
            </div>
        </div>
    )
}

export default DisplayNav