import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="container  mx-auto my-5 bg-red-300">
      i am a home

      About next js folder name should be in small letter other wise it will not run

      <Image height={400} width={400} src="https://www.w3docs.com/uploads/media/default/0001/03/66cf5094908491e69d8187bcf934050a4800b37f.jpeg" 
      className="mx-auto" alt="" />
    </div>
  )
}

export default page
