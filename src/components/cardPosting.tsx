import { useState } from "react";
import { icon } from "../data/data";
import parse from "html-react-parser";
export default function CardPosting() {
  const [likeButton, setLikeButton] = useState<boolean>(false);
  return (
    <article className="bg-slate-50 py-2 px-3 mt-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-3">
          <img
            src="/images/image.jpg"
            alt="user image"
            className="w-12 h-12 rounded-full"
          />
          <div className="">
            <h6 className="font-bold">David James</h6>
            <small>12 april 5:45PM</small>
          </div>
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-64a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m0 144a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
            />
          </svg>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo esse
          dicta veritatis eaque fuga facilis nemo commodi libero amet maiores
          dignissimos, voluptate officiis id veniam nostrum saepe beatae
          perferendis aperiam.
        </p>
        <div className="mt-3 post-images">
          <img src="/images/movie.jpg" alt="post image" className="w-full" />
        </div>
        <hr />
        <div className="flex justify-around gap-5 border-y border-y-gray-300 py-3 mt-4 mb-3">
          <button
            onClick={() => setLikeButton(true)}
            className="flex items-center  gap-x-2 cursor-pointer"
          >
            {likeButton ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#f44336"
                  d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M19.285 12.645a3.8 3.8 0 0 0-5.416-5.332q-.288.288-.732.707l-.823.775l-.823-.775q-.445-.42-.733-.707a3.8 3.8 0 0 0-5.374 0c-1.468 1.469-1.485 3.844-.054 5.32l6.984 6.984l6.97-6.972zm-14.75-6.18a5 5 0 0 1 7.072 0q.273.274.707.682q.432-.408.707-.683a5 5 0 0 1 7.125 7.017l-7.125 7.126a1 1 0 0 1-1.414 0L4.48 13.48a5 5 0 0 1 .055-7.017z"
                />
              </svg>
            )}
            <small>120k Likes</small>
          </button>
          <button className="flex items-center  gap-x-2 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M7.09 2.75a4 4 0 0 0-4 4v6.208a4 4 0 0 0 4 4h.093v3.792a.5.5 0 0 0 .839.368l4.52-4.16h4.369a4 4 0 0 0 4-4V6.75a4 4 0 0 0-4-4z"
              />
            </svg>
            <small>20 comments</small>
          </button>
          <button className="flex items-center  gap-x-2 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M14.25 5.5a3.25 3.25 0 1 1 .833 2.173l-2.717 1.482l-3.04 1.737a3.25 3.25 0 0 1 .31 2.464l5.447 2.971a3.25 3.25 0 1 1-.719 1.316l-5.447-2.97a3.25 3.25 0 1 1-.652-4.902l3.37-1.926l2.729-1.489a3.3 3.3 0 0 1-.114-.856m3.25-1.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m-11 7a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m9.25 7.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0"
                clip-rule="evenodd"
              />
            </svg>
            <small>30 share</small>
          </button>
          <button className="flex items-center  gap-x-2 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 512 512"
            >
              <path
                fill="#000"
                d="M410.9 0H85.1C72.3 0 61.8 10.4 61.8 23.3V512L248 325.8L434.2 512V23.3c0-12.9-10.4-23.3-23.3-23.3"
              />
            </svg>
            <small>30 saved</small>
          </button>
        </div>
      </div>
      <div className="mt-4  flex items-center gap-x-4">
        <img
          src="/images/image.jpg"
          alt="user"
          className="w-10 h-10 rounded-full "
        />
        <form method="post" className="w-full relative">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-2 px-3 outline-0"
            placeholder="Tulis Pesan..."
          />
          <div className="absolute right-3 top-3 flex gap-x-3">
            {icon &&
              icon.map((item: any, index: number) => {
                return <small key={index}>{parse(item?.icon)}</small>;
              })}
          </div>
        </form>
      </div>
    </article>
  );
}
