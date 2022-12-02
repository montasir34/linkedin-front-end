import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsInfoLg } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import elon from '../image/elon musk.jpg';
import Toon from '../image/Toon.png';
import jeff from '../image/jeff.jpg';
import cena from '../image/cena.jpg';
import bruno from '../image/bruno.jpg';
import team from '../image/team.jpg';
import logo from '../image/logoBig.png';

function Widgets() {
  const content = (img, name, work) => {
    return (
      <div className="flex gap-x-2 mt-4">
        <img className="h-14 w-14 rounded-full" src={img} alt="" />
        <div>
          <h1 className="font-semibold ">{name}</h1>
          <p className="text-sm text-gray-500">{work}</p>
          <div className="flex justify-center mt-3 rounded-full w-28 border-gray-500 border p-1  items-center">
            <AiOutlinePlus />
            <h1>Follow</h1>
          </div>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className=" p-2 space-x-2 mx-auto w-[90%] rounded-xl mt-5 bg-white ">
        <div className="flex justify-between items-center  p-3">
          <h1 className="font-semibold text-lg">Add your feed</h1>
          <div className="bg-gray-500 rounded p-[2px]">
            <BsInfoLg className=" text-xs text-white" />
          </div>
        </div>
        <div>
          {content(Toon, 'montaser ahmed', 'software engineer')}
          {content(elon, 'Elon musk', ' tesla and spaceX founder')}
          {content(cena, 'john cena', 'wrestler')}
          {content(jeff, 'jeff bizos', 'amazon founder')}
          {content(bruno, 'bruno mars', 'singer')}
        </div>
        <div className="flex  items-center mt-4 cursor-pointer ">
          <h1 className="text-gray-400 hover:text-black">
            View all recommendations{' '}
          </h1>
          <HiArrowNarrowRight className="text-xl mt-1 text-gray-400 " />
        </div>
      </div>
      <div className=" w-[90%] mx-auto   sticky  p-2 mt-5    bg-white rounded-xl">
        <img className="w-full rounded-md" src={team} alt="" />
        <div className="grid grid-cols-3">
          <h1 className="cursor-pointer  hover:text-sky-600 hover:underline col-span-1">
            about
          </h1>
          <h1 className="cursor-pointer hover:text-sky-600 hover:underline col-span-2">
            accessible
          </h1>
          <h1 className="cursor-pointer hover:text-sky-600 hover:underline col-span-1">
            help center
          </h1>
          <h1 className="cursor-pointer hover:text-sky-600 hover:underline col-span-2">
            privacy and terms
          </h1>
          <h1 className="cursor-pointer hover:text-sky-600 hover:underline col-span-2">
            ad choises
          </h1>
          <h1 className="cursor-pointer hover:text-sky-600 hover:underline">
            advertising
          </h1>
          <h1 className="cursor-pointer hover:text-sky-600 hover:underline col-span-3">
            businees service
          </h1>
        </div>
        <div className="flex mt-5 justify-center gap-x-1 items-center ml-2">
          <img className="h-5 w-14" src={logo} alt="" />
          <h6 className="text-sm">linkedin corporation 2022</h6>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Widgets;
