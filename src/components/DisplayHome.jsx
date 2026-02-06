
import React from 'react'
import SideBar from './SideBar'
import DisplayNav from './DisplayNav'
import DisplayMusic from './DisplayMusic'

const DisplayHome = () => {
    return (
        <div className='h-screen flex w-[100%]'>

            <div className='w-[100%] flex'>

                <SideBar />
                <DisplayMusic />

            </div>

        </div>
    )
}

export default DisplayHome