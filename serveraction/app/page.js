// import Image from "next/image";
// #form main koi data hai or vo data server main chale jaye pehle ye kam api ke through krna padta tha 
'use client'
import { submitAction } from "@/actions/form";
import {useRef}  from "react";

// import fs from "fs/promises";
export default function Home() {
  // const submitAction = async (e)=>{
  //   "use server"
  //   console.log(e.get("name"), e.get("add"))
  //   // fs.writeFile("harry.txt", "Hey i am good")
  // let a = await  fs.writeFile("harry.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`)
  //   console.log(a)
  // }
  let ref = useRef()
  return (
   <div className="w-2/3 mx-auto my-12">
    <form ref={ref} action= {(e)=>{submitAction(e); ref.current.reset()}}> 
      <div>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" className="text-black mx-4" type="text" />
      </div>
      <div>
      <label htmlFor="name">Address</label>
        <input name="add" id="add" className="text-black mx-4" type="text" />
      </div>
      <button className="border border-white">Submit</button>
    </form>
   </div>
  );
}
