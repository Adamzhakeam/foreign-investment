import React from "react";
import "./mainBody.css";

function MainBody() {
  return (
    <div className=" w-4/5 flex font-Finlandica">
      <div className=" w-1/2">
        <p className="text-3xl p-2">overall business</p>
        <p className="font-bold text-5xl mt-3 p-2"> $1,121.22</p>
        <div className="p-2 font-bold">
          <button className="bg-white w-20 mr-5 rounded-lg p-2 shadow-3xl">
            send
          </button>
          <button className="bg-white w-20 rounded-lg p-2 shadow-3xl">
            receive
          </button>
          <button className="bg-white w-20 ml-5 rounded-lg p-2 shadow-3xl">
            ...
          </button>
        </div>
      </div>

      <div className="shadow-5xl rounded-xl w-1/2 p-2 bg-[#003d2b]">
        <div className="flex">
          <div className="w-1/2">
            <p className="capitalize text-xl text-[#b6e7b4]">profit</p>
            <p className=" font-bold text-4xl mt-5 text-white"> $4737.9</p>
            <p className="text-[#b6e7b4] mt-2">12% over the years</p>
          </div>
          <div className="w-1/2">
            <p className="mt-2 capitalize text-[#b6e7b4]">shares</p>
            <p className="text-lg font-bold mt-2 text-white">$25560.80</p>
            <p className=" text-sm mt-2 text-[#b6e7b4]">10% over the years</p>
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
}

export default MainBody;
