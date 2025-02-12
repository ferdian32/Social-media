import { list } from "../data/data";
import parse from "html-react-parser";
export default function NavbarComponent () {
  return (
    <nav className="w-full py-3 px-20 flex items-center gap-x-8 bg-black">
      <div className="text-2xl text-rose-500">AskVerse</div>
      <ul className="flex items-center gap-x-8">
        {list && list.map((item:any,index:number) => {
          return (

            <li key={index} className="cursor-pointer">{parse(item?.icon)}</li>
          );
        })}
      </ul>
      <form action="" method="post" className="w-[400px] relative">
        <input type="search" name="search" id="search" placeholder="Masukan Pencarian ..." className="border border-gray-500 rounded-sm py-1 px-8 text-slate-50 w-full " />
        <button className="absolute left-2 top-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="#fff" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
        </button>
      </form>
      <div className="w-10 h-10 cursor-pointer">
        <img src="/images/image.jpg" alt="user" className="w-full h-full bg-cover rounded-full" />
      </div>
      <button className="bg-rose-500 text-slate-50 rounded-sm px-3 py-1 capitalize cursor-pointer ">
        tambahkan pertanyaan
      </button>
    </nav>
  )
};