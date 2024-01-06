"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const From = ({ isEdit, data, id }) => {
  const router = useRouter();
  const [tags,setTags] = useState([])
  const handelUpdate = async (d) => {
    // e.preventDefault();
    try {
      const { title, description } = d;
      const res = fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description,tags }),
      });
      router.refresh();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handelCreatePostBtn = async (d) => {
    console.log(data);
    const { title, description } = d;
    const res = fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description ,tags}),
    });
    router.refresh();
    router.push("/");
  };
  const onSubmit = (data) => {
    !isEdit ? handelCreatePostBtn(data) : handelUpdate(data);
  };
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    field,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mt-5 top-10 flex flex-col gap-5  w-[50%] "
    >
      <h1 className=" text-center font-semibold text-2xl">
        {isEdit ? "Edit Post " : "New Post"}
      </h1>
     
        <input
          placeholder="Title "
          className=" w-full border rounded-lg border-slate-500 p-2"
          {...register("title", { required: true })}
          defaultValue={isEdit ? data?.title : ""}
        />
        {errors.title && (
          <span className=" text-red-600">This field is required</span>
        )}
    




       
          <div className=" flex gap-1">
          
            {
              tags.map((tag,index)=> <p key={index}>#{tag}</p>)

            }
          
          </div>
        
       <div className=" flex justify-between gap-2 w-full">
       
          <input  {...register("tags")} type="text" placeholder="Add a tag" className="w-full border-slate-700 border rounded-lg p-2 " />
          <button
            type="button"
            onClick={() => {
              const tagInput = getValues("tags");
              if(tagInput){
                setTags((tags)=>[...tags,tagInput])
                setValue("tags","")
              }
            }}
          >
            Add
          </button>
           
        </div>



        <textarea
          rows={8}
          className=" w-full border-slate-700 border rounded-lg p-1"
          placeholder="Description "
          {...register("description", { required: true })}
          defaultValue={isEdit ? data?.description : ""}
        >

        </textarea>
        {errors.description && (
          <span className=" text-red-600">This field is required</span>
        )}
    

      <input
        type="submit"
        className=" bg-blue-600  hover:cursor-pointer  p-3 rounded-md text-white hover:bg-blue-700 transition-all duration-200"
        value={isEdit ? "EDIT" : "CREATE"}
      ></input>
    </form>
  );
};

export default From;
