
import NavbarComponent from "../components/navbar"
import { Aside } from "../components/aside"
import RightContent from "../components/rightContent";

export default function HomePage () {
  return (
    <div className="relative">
      <NavbarComponent/>
      <Aside />
      <main className="absolute left-[20%] px-3 py-8 w-[60%] bg-slate-50 ">
        <div className="flex gap-x-3">
          <img src="/images/image.jpg" alt="img" className="w-12 h-12 rounded-full" />
          <input type="text" className="w-full border px-3 rounded-md border-gray-300" placeholder="Apa yang ingin anda sampaikan..?"/>
        </div>
        <div className="">
          hello
        </div>
      </main>
      <RightContent />
    </div>
  )
}