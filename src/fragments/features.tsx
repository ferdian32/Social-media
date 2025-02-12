import { Link } from "react-router-dom";
import { CategoryPost } from "../data/data.ts";
const Features = () => {
  return (
    <div className="mt-3 h-[400px] overflow-hidden ">

        <div className="flex justify-between items-center mb-3 ">
          <h4 className="text-sm font-bold">Sugesstions</h4>
          <Link to={''} className="text-sky-500 text-sm capitalize">See all</Link>
        </div>
        <div className="grid grid-rows-3 gap-3 mt-3 cursor-pointer">
    {
      CategoryPost?.length > 0 ? (
      CategoryPost.map((item:any,index:number) => {
        return (
          <div className="flex gap-x-3" key={index}>
          <img src={item?.img} alt="image" className="w-24 h-20 rounded-md" />
          <div className="">
            <h4 className="font-semibold">{item?.title}</h4>
            <small>1060 post</small>
          </div>
        </div>
        )
      })
      ) : 
      (
        <h1>Tidak Ada Kategori Postingan</h1>
      )
    }
  
       </div>
      </div>
  )
};

export default Features;