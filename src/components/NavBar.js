import Link from "next/link"
import {IoIosAddCircleOutline}  from "react-icons/io"
import {TbBrandBlogger} from "react-icons/tb"

const NavBar = () => {
  return (
    <div className="w-full  bg-slate-200 p-1 rounded-sm ">
    
       <nav className=" w-[1080px] mx-auto ">
            <ul className=" flex w-full justify-between items-center">
                <Link href="/" className=""><TbBrandBlogger /></Link>
                <Link href="/create" className="flex justify-between items-center gap-3 hover:bg-slate-400 hover:text-white transition-all duration-300  p-3 rounded-md"><IoIosAddCircleOutline  size={22} />CREATE  POST</Link>
            </ul>
       </nav>
    
    </div>
  )
}

export default NavBar