import React from 'react'
import Image from 'next/image';

const PageBanner = () => {
  return (
    <div>
        <Image 
        src="/images/page-banner.webp" // Route of the image file
        alt="telesourcebanner"
        width={100}  // Desired width
        height={100} // Desired height
        layout="responsive" // Makes the image responsive
        />
    </div>
  )
}

export default PageBanner
