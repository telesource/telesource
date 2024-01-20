import React from 'react'
import Image from 'next/image';

const Banner = () => {
  return (
    <div>
        <Image 
            src="/images/banner-1.jpg" // Route of the image file
            alt="Description of the image"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
        />
    </div>
  )
}

export default Banner
