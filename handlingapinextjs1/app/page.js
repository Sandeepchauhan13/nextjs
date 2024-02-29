"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async ()=>{
    let data = {
      name :"harry",
      role: "coder"
    }
    let a = await fetch("/api/add", {method: "POST",headers: {
      "Content-Type": "application/json",
     
    },
   
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    let res = await a.json()
    console.log(res)
  }
  return (
<div>
<h1 className="text-xl font-bold">Nextjs Api Route</h1>
<button onClick={handleClick} className="text-yellow bg-green-600 rounded-full">Click Me</button>
</div>
  );
}
