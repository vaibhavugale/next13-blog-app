import connectMongo from "@/lib";
import Posts from "../../../../../model/posts";
import { NextResponse } from "next/server";

export async function PUT(req,{params}){
    
    const {title,description,tags} = await req.json();
    const {id} = params;
    await connectMongo();
    await Posts.findByIdAndUpdate(id,{title,description,tags})
    return NextResponse.json({success:true,message:"Posts updated..."})
}
export async function GET(req,{params}){
    const {id} =  params;
  
    await connectMongo();
    const topic = await Posts.findOne({_id:id})
    return NextResponse.json({success:true,topic})
}
export async function DELETE(req,{params}) {
    const {id} =  params;
     await connectMongo();
     await Posts.findByIdAndDelete(id);
     return NextResponse.json({ success: false });
   }