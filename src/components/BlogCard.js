"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {AiOutlineEdit} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"

const BlogCard = ({ data}) => {
    const router = useRouter();
    const handelDelete =async () =>{
        try{
            const res =  await fetch(`http://localhost:3000/api/posts/${data?._id}`,{
            method:"delete",
            
        })

        if(!res.ok){
            window.alert("Something went wrong...")
        }

        router.refresh();
        }catch(err){

        }
    }
    console.log(data)

  return (
    <div className=" bg-slate-300 w-[300px] h-[150px] p-2 rounded-md   shadow-lg">
      <div className=" flex justify-between">
        
        <h1 className=" capitalize  font-semibold">{data?.title}</h1>
        <div className="flex gap-2 justify-center items-center group">
            <Link href={`edit/${data?._id}`}><AiOutlineEdit /></Link>
            <button onClick={handelDelete}> <RiDeleteBin6Line /></button>
        </div>
      </div>
      <div className=" overflow-clip">
      {
        data?.tags?.map((tag,index)=>{
          return <span key={index} className="m-1">#{tag}</span>
        })
      }
      </div>

      
        <p>
          {data?.description?.substring(1, 100)}{" "}
          <span
            className=" hover:cursor-pointer text-blue-400"
            onClick={() => router.push(`/fulldescription/${data?._id}`)}
          >
            ...read more
          </span>{" "}
        </p>
      
    </div>
  );
};

export default BlogCard;
