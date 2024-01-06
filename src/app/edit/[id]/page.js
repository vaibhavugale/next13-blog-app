
import FromPost from "@/components/FromPost";

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
    <div className="w-[1080px] mx-auto min-h-[50vh] flex justify-center items-center">
      <FromPost isEdit={true} data={topic} id={id}/>
    </div>
  );
};

export default page;
