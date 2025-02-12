import { Component } from "react";
import { Friends } from "../data/data";
class RightContent extends Component {
  constructor(props:any) {
    super(props);
  };
  render() {
    return (
      <section className="fixed right-0 bg-slate-50 w-3/12 h-screen px-3 py-5">
        <h1 className="font-semibold">Friends List</h1>
        <div className=" mt-4">
          {Friends?.length > 0 ? (
            Friends?.map((list:any,index:number) => {
              return (

              <div className="flex justify-between items-center mt-2" key={index}>

                <div className="flex gap-x-3 items-center  ">
                <div className="w-14 h-14">
                  <img src={list?.img} alt="user image" className="w-full h-full bg-cover rounded-full" />
                </div>
                <div>
                  <h6 className="font-bold">{list?.name}</h6>
                  <small>{list?.status === 'online' ? 'online' : '5 menit yang lalu'}</small>
                </div>
                </div>
                <div className={` h-4 w-4 rounded-full ${list?.status === 'online' ? 'bg-green-500 ' : 'bg-gray-500'}`}></div>
              </div>
              )
            })
          ) : (
            <h1>Tidak ada list pertemenan</h1>
          ) }
        </div>
      </section>
    )
  }
};

export default RightContent;