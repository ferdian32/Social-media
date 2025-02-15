import { IconsFriends } from "../../data/data";
import parse from "html-react-parser";
export default function LeftContent() {
  return (
    <aside className="fixed top-16 left-0 w-3/12 bg-slate-50 h-screen py-4 px-3">
      <h1 className="text-2xl font-bold capitalize">Friends</h1>
      <div className="mt-4">
        <button className="flex gap-x-3 items-center bg-gray-200 w-full rounded-md py-2 px-3 cursor-pointer">
          <div className="bg-rose-500 text-center rounded-full py-1 px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path fill="#fff" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
            </svg>
          </div>
          <small className="text-lg">Home</small>
        </button>
      </div>
      <div className="mt-4">
        {IconsFriends &&
          IconsFriends.map((item: any, index: number) => {
            return (
              <button
                className="flex gap-x-3 items-center w-full rounded-md py-2 px-3 cursor-pointer hover:bg-gray-200 mt-4"
                key={index}
              >
                {parse(item?.icon)}
                <small className="text-lg">{item?.text}</small>
              </button>
            );
          })}
      </div>
    </aside>
  );
}
