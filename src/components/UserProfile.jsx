import React from "react";
import { BiLogOut } from "react-icons/bi";
import avatar from "../image/avatar.jpg";

function UserProfile({ logout }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const { name, email, image } = user;

  return (
    <div
      className='absolute shadow-xl top-14 pt-2 
      rounded-md bg-white md:w-40 sm:w-40 md:h-40 sm:h-40 w-96 right-10 h-40
      sm:right-1 md:-right-28
    flex flex-col space-y-1 items-center'>
      <div className='mx-auto  inline-block'>
      
          <img
            className='w-14 h-14 ring ring-purple-600 rounded-full'
            src={image ? image : avatar}
            alt=''
          />

      </div>
      <p className='text-center'>{name}</p>
      <p className='text-xs text-center'>{email}</p>
      <div
        onClick={logout}
        className=' absolute bottom-0 w-full text-center p-2 font-bold
      cursor-pointer hover:bg-gray-300 flex justify-center items-center gap-x-1 rounded-b-md bg-gray-200'>
        <BiLogOut /> log out
      </div>
    </div>
  );
}

export default UserProfile;
