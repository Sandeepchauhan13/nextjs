import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (
    <div>
      i am contact page 

      {/* javascript can be used like this in next js  */}
    <Script>
      {`
      alert("Welcome to contact page ")
      `}
    </Script>
    </div>
  )
}

export default contact


// from this tag pages title canbe changed this code is copied from layout tag 
export const metadata = {
  title: " Contact- Facebook",
  description: "Connect with the world",
};
