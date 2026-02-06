import React from 'react'

const Song = ({ image, namee }) => {
    return (
        <div>

            <img src={image} alt="" className='size-40' />
            <p>
                {namee}
            </p>
        </div>
    )
}

export default Song