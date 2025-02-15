import NavbarComponent from "../components/navbar";
import { Aside } from "../components/aside";
import RightContent from "../components/rightContent";
import { attch } from "../data/data";
import parse from "html-react-parser";
import CardPosting from "../components/cardPosting";
export default function HomePage() {
  return (
    <div className="relative">
      <NavbarComponent />
      <Aside />
      <main className="absolute top-16 left-[20%]  py-5 w-[60%] ">
        <div className="bg-slate-50 py-3 px-3 rounded-md">
          <h3 className="font-bold">Post Something</h3>
          <div className="flex gap-x-3 mt-3">
            <img
              src="/images/image.jpg"
              alt="img"
              className="w-12 h-12 rounded-full"
            />
            <div className="border border-gray-300 w-full flex flex-col justify-between py-1">
              <input
                name="post"
                id="post"
                className="w-full py-1  px-3 rounded-md outline-0 mb-3"
                placeholder="Apa yang ingin kamu sampaikan?.."
              />
              <div className="flex gap-x-3  ml-3">
                {attch &&
                  attch.map((item: any, index: number) => {
                    return (
                      <small key={index} className="cursor-pointer">
                        {parse(item?.icon)}
                      </small>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <CardPosting />
        <CardPosting />
      </main>
      <RightContent />
    </div>
  );
}
