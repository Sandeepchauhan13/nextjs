// 'use client'
// import {useState} from 'react';
import Navbar from "@/components/Navbar";
import fs from "fs/promises"

export default function Home() {
  // const[count, setCount] = useState(0)
  console.log("hey i am harry")
  // let a = fs.readFile(".gitignore")
  // a.then(e=>{console.log(e.toString())})
  return (
    
        <>
        <Navbar/>
hello client component testing using states here 
{/* {count}  */}
{/* <button className="rounded bg-yellow-400 " onClick={()=>setCount(count+1)}>Click here</button> */}
        </>
  );
}
