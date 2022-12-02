import avatar from '../image/avatar.jpg';
import React from 'react';
import { useSelector } from 'react-redux';
function Sidebar() {

  const monte = (it) => {
    return (
      <div className="flex p-2 cursor-pointer hover:text-black text-gray-400">
        <h1>#</h1>
        <h1>{it}</h1>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="">
        <div>
          <div className="mx-auto min-w-[90%] w-[70%] mt-5 h-24 rounded-tl-xl rounded-tr-xl bg-Toon
            border-l-2 border-r-2 border-gray-300 bg-gradient-to-t from-purple-600/80
             to-pink-500/80">

          </div>
          <div className="min-w-[90%] w-[70%] mx-auto relative h-24 border-b-2 gap-2  bg-white 
          flex flex-col  items-center justify-center border-l-2 border-r-2 border-gray-300">
            <img
              className=" h-16 w-16 object-cover ring ring-white 
              rounded-full absolute -top-1/3 "
              src={avatar}
              alt=""
            />
            <h2 className="mt-7 font-bold">sss</h2>
            <p className="text-gray-400">dds</p>
          </div>
          <div className="min-w-[90%] w-[70%] mx-auto  font-bold h-24 flex flex-col
           justify-center bg-white  rounded-bl-lg rounded-br-lg  border-l-2 border-r-2
            border-gray-300">
            <div className="flex items-center p-1 justify-between">
              <h1 className="text-gray-400">who viwed you</h1>
              <span className="text-blue-400 text-md">2,500</span>
            </div>
            <div className="flex items-center p-1 justify-between">
              <h1 className="text-gray-400">views on post</h1>
              <span className="text-blue-400 text-md">3,500</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto min-w-[90%] w-[70%] sticky top-20   mt-10  bg-white rounded-xl">
        <h1 className="text-gray-900 p-3 text-lg">Recent </h1>
        {monte('Reactjs')}
        {monte('Nextjs')}
        {monte('Nodejs')}
        {monte('Graphql')}
        {monte('Typescript')}
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
