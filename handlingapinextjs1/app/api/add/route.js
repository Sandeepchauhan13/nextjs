import { NextResponse } from "next/server";


export async function POST(request){
    // jo data mile from frontend  ya page.js file se 
let data =  await request.json()
console.log(data)
return NextResponse.json({Success: true, data})
}