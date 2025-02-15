export default function Card() {
  return (
    <div className=" w-60 h-96">
      <img
        src="/images/psychiatra.jpg"
        alt="user image"
        className="w-full h-52 rounded-t-lg"
      />
      <div className=" bg-slate-50 px-3 py-2 shadow-md rounded-b-lg">
        <div className="username">
          <h6 className="font-bold">Chiki Cuba</h6>
        </div>
        <div className="mt-3">
          <button className="block bg-rose-500 text-slate-50 py-1 px-3 w-full mb-2 rounded-md cursor-pointer">
            Konfirmasi
          </button>
          <button className="block bg-gray-200 text-rose-500 py-1 px-3 w-full mb-2 rounded-md cursor-pointer">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
