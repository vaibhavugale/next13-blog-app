import React from "react";

const getBlogById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    console.log("Failed to fetch...");
  }
  return res.json();
};

const page = async ({ params }) => {
  const { id } = params;
  const { topic } = await getBlogById(id);
  return (
    <div className=" w-[1080px] mx-auto flex justify-start items-center gap-2 mt-3 ">
      <div>
        <span className=" font-extrabold text-2xl ">{topic?.title}</span>

        <div>
        {
          topic?.tags?.map((tag , index)=>{
          return <span  key={index} className="m-1">#{tag}</span>
        })
      }
        </div>

        <p className="text-lg mt-5">{topic?.description}</p>
      </div>
    </div>
  );
};

export default page;
