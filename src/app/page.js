import BlogCard from '@/components/BlogCard'
import Image from 'next/image'
const getBlog =  async() => {
 const res = await fetch("http://localhost:3000/api/posts",{
  cache: "no-store",
})
 
 if(!res.ok){
 console.log("Failed to fetch ...")
 }
 return res.json();
}
export default async function Home() {
  const {topic} = await getBlog();
  // console.log(topic)
  return (
    <main className="w-[1080px] flex  flex-wrap  gap-2 mx-auto  mt-1 p-2 justify-center  flex-shrink-5">
    
      {/* <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/> */}
      {
        
        topic.map((data)=>{
           return <BlogCard key={data?._id}  data={data}/>
        })
       
      }
     
    </main>
  )
}
