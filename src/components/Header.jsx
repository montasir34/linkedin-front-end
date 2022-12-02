import { AiOutlineSearch } from "react-icons/ai";
import OptionHeader from "./OptionHeader";
import { AiTwotoneHome } from "react-icons/ai";
import { MdSupervisorAccount } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import avatarImg from "../image/avatar.jpg";
import small from "../image/logoSmall.png";
import Avatar from "./Avatar";
import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import { deleteUser } from "../features/userReducer";
function Header() {
   const [profile, setprofile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const {image} = user

 
  const handleSignOut = () => {
    localStorage.removeItem('user')
    dispatch(deleteUser())
    navigate("/");
  };
  return (
    <React.Fragment>
      <div
        className='p-4 md:p-2 z-10 h-14 flex gap-x-2 border-b justify-between sticky top-0
       border-gray-100 items-center bg-white'>
        <div className='md:flex hidden sm:hidden md:ml-14 md:basis-1/3   gap-4 '>
          <img
            onClick={() => navigate("/home")}
            className='h-8 w-8'
            src={small}
            alt=''
          />
          <div className='md:flex  h-full items-center p-1 rounded bg-blue-50'>
            <AiOutlineSearch className='text-xl' />
            <input
              type='text'
              className=' outline-none border-none bg-transparent'
            />
          </div>
        </div>

        <div className=' md:basis-1/3 w-full  justify-between flex  gap-x-2 items-center '>
          <div className='md:hidden items-center flex gap-x-2'>
            <img
              onClick={() => navigate("/home")}
              className='h-8 w-8 md:w-11'
              src={small}
              alt=''
            />
            <OptionHeader Icon={AiOutlineSearch} />
          </div>
          <OptionHeader
            styles='border-b-2 border-black'
            title='Home'
            Icon={AiTwotoneHome}
          />
          <OptionHeader title='Network' Icon={MdSupervisorAccount} />
          <OptionHeader title='Jobs' Icon={MdBusinessCenter} />
          <OptionHeader title='Messaging' Icon={BiMessageDetail} />
          <OptionHeader title='Notifications' Icon={IoMdNotifications} />
        </div>
        <div className=' h-12 relative'>
          <Avatar profile={setprofile} img={user?.image ? user?.image : avatarImg} name='montaser' />
          <div className='absolute text-xl bottom-0 right-0'>
            <IoMdArrowDropdown />
          </div>
          {profile && <UserProfile logout={handleSignOut} />}
        </div>
        <div className='basis-1/6 ml-4 pl-5 hidden md:flex sm:hidden flex-col justify-center border-l border-gray-300 mr-14'>
          <div className='flex'>
            <div className='flex items-center  p-1 flex-col justify-center '>
              <CgMenuGridR className='text-lg text-gray-800' />
              <h3 className='text-xs font-bold'>work</h3>
            </div>
            <div className='flex  p-1 flex-col items-center  justify-center ml-3 '>
              <h3 className='text-xs whitespace-nowrap font-bold'>
                try premuim for{" "}
              </h3>
              <h3 className='text-xs font-bold'>free</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
