// "use client"
// import {useState, useEffect} from "react";
import fs from "fs/promises"
import Navbar from "@/components/Navbar"
export default function Home (){
  // const [count, setCount] = useState(0)
  console.log("hey i am sid")

  // this code will run only in server component 
  // let a = fs.readFile(".gitignore")
  // a.then(e=>{console.log(e.toString())})
  return(
    <div>
      <Navbar/>
      I am  a component
       {/* {count} */}
    {/* <button onClick={()=>setCount(count + 1)} className="bg-red-400 text-white rounded">click me </button> */}
    </div>
  )
}