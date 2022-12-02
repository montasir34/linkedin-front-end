import React from "react";
import big from "../image/logoBig.png";
import hero from "../image/heroImg.svg";
import stayUp from "../image/stayUp.png";
import connect from "../image/connectWith.svg";
import skill from "../image/learnSkill.svg";
import { useNavigate } from "react-router-dom";
import { FaRegCompass } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Landing() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  useEffect(()=>{
    if(user){
      return navigate('/home')
    }
  },[])
  const headerOption = (name, Icon) => {
    return (
      <div className='flex flex-col cursor-pointer group  justify-center items-center'>
        {Icon && (
          <Icon className='text-xl group-hover:text-black text-gray-500' />
        )}
        <p className='text-gray-600 group-hover:text-black'>{name}</p>
      </div>
    );
  };

  function heroOption(name) {
    return (
      <div
        className='flex w-full md:w-96 items-center cursor-pointer hover:shadow-xl border border-gray-200 
              rounded-lg justify-between p-4'>
        <h1 className=' text-xl'>{name}</h1>
        <MdArrowForwardIos className='text-gray-500' />
      </div>
    );
  }

  function topics(name, style) {
    return (
      <div
        className={`md:p-4 p-3 text-xs cursor-pointer hover:text-sky-800 
      hover:bg-sky-100 rounded-full font-[inter] text-gray-600
       font-bold  ${style} flex justify-center whitespace-nowrap 
       items-center border border-black`}>
        {name}
      </div>
    );
  }
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <div className='container flex mx-auto p-4 md:p-1 items-center'>
        <div className=' basis-1/2'>
          <img className='md:h-10 h-6 cursor-pointer' src={big} alt='' />
        </div>
        <div className='flex justify-end items-center basis-1/2  '>
          <div className='md:flex hidden mr-2  items-center gap-x-6 border-r-2 pr-6 border-gray-400'>
            {headerOption("Discover", FaRegCompass)}
            {headerOption("People", BsPeople)}
            {headerOption("Learning", RiMovieLine)}
            {headerOption("jobs", MdBusinessCenter)}{" "}
          </div>
        </div>
        <div className='flex items-center gap-x-6'>
          <Link
            to={"signUp"}
            className='whitespace-nowrap text-md md:text-lg
              text-gray-500 cursor-pointer hover:bg-gray-200
               md:p-4  p-2 rounded-full font-semibold'>
            Join Now
          </Link>
          <Link
            to={"signIn"}
            className='whitespace-nowrap p-3 px-4 md:px-6 hover:bg-sky-100 
            border-sky-700 text-sky-600 rounded-full border-2 '>
            Sign in
          </Link>
        </div>
      </div>

      {/* hero section */}

      <div className='container md:flex mt-9 p-4 md:p-0 mx-auto'>
        <div className=''>
          <h1 className='md:text-6xl text-3xl font-bold whitespace-nowrap text-rose-900/60 font-[Manrope]'>
            Welcome to your <br className='' /> professional community
          </h1>
          <div className='mt-14 w-full flex flex-col gap-2'>
            {heroOption("Search for a job")}
            {heroOption("Find a person you know")}
            {heroOption("Learn a new skill")}
          </div>
        </div>
        <div className='flex justify-center p-5 md:p-0 items-center '>
          <img className='md:h-auto h-56' src={hero} alt='' />
        </div>
      </div>
      {/* content */}
      <div className='px-3 md:px-0 bg-gray-100'>
        <div className='container mx-auto gap-2 grid md:grid-cols-7  w-full bg-gray-100'>
          <div className='col-span-3 pt-8 md:pt-14'>
            <h1 className='md:text-6xl text-3xl font-[Manrope]'>
              Explore topics you are interested in
            </h1>
          </div>
          <div className='col-span-4 p-8 -mt-10  md:p-14'>
            <h1 className='font-[Manrope] font-semibold text-gray-500'>
              CONTENT TOPICS
            </h1>
            <div className='grid gap-4 mt-8 md:mt-8 grid-cols-2 md:grid-cols-4'>
              {topics("See All Topics", "text-sky-600 border-sky-600")}
              {topics("Remote")}
              {topics("Work from home", "col-span-2")}
              {topics("retirement")}
              {topics("internship")}
              {topics("Freelancer")}
              {topics("Salary and compansition", "col-span-2")}
              {topics("Starting a jop")}
            </div>
          </div>
        </div>
      </div>

      <div className='px-3 md:px-0'>
        <div className='container mx-auto gap-2 m-5 grid md:grid-cols-7  w-full'>
          <div className='col-span-3 pt-8 md:pt-14'>
            <h1 className='md:text-6xl text-3xl font-[Manrope]'>
              Find the right job or internship for you
            </h1>
          </div>
          <div className='col-span-4 -mt-10 pt-8 md:pt-14'>
            <h1 className='font-[Manrope] font-semibold text-gray-500'>
              CONTENT TOPICS
            </h1>
            <div className='grid gap-4 mt-4 md:mt-8 grid-cols-4'>
              {topics("Engineering")}
              {topics("Business Development", "col-span-2")}
              {topics("Finance")}
              {topics("Administrative")}
              {topics("Retail Associate", "col-span-2")}
              {topics("Customer Service", "col-span-2")}
              {topics("Operations")}
              {topics("Information Technology", "col-span-2")}
              {topics("Marketing")}
              {topics("Human Resources", "col-span-2")}
            </div>
            <div className='mt-5 font-bold font-[inter] flex items-center text-gray-600'>
              <span>Show More</span>
              <MdKeyboardArrowDown className='text-2xl' />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-rose-50 px-3 md:px-0 pb-20'>
        <div className='container mx-auto gap-2  grid md:grid-cols-7 grid-cols-1 pt-8 w-full'>
          <div className='col-span-3 flex items-center pt-8 md:pt-14'>
            <h1 className='md:text-5xl  text-3xl text-rose-900 font-semibold font-[Manrope]'>
              Post your job for millions of people to see
            </h1>
          </div>
          <div className='col-span-4 flex items-center  md:pt-14'>
            <div className='grid gap-4 mt-8 px-8 grid-cols-1 md:grid-cols-4'>
              {topics("Post a jop", "text-sky-600 border-sky-600 px-7  p-6")}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-100 pb-10'>
        <div
          className='container mx-auto bg-slate-100 pt-8 md:pt-16 gap-x-14 
         relative flex flex-col-reverse md:flex-row justify-center items-center w-full'>
          <div className='md:w-1/2 px-3 md:px-0  flex flex-col mt-5 gap-y-10'>
            <h1 className='md:text-5xl text-2xl font-[inter] text-rose-900 font-semibold'>
              Stay up to date on <br /> your industry
            </h1>
            <p className='md:text-4xl text-2xl text-gray-500 font-[Manrope] '>
              From live videos, to stories, to newsletters and more, LinkedIn is
              full of ways to stay up to date on the latest discussions in your
              industry
            </p>
          </div>
          <img className='md:h-[500px] mt-6 h-[250px]' src={stayUp} alt='' />
          <div className='flex tems-center self-start md:right-32 top-4 right-10 md:top-3 absolute gap-x-6'>
            <div className='flex gap-2 items-center'>
              <MdArrowBackIos className='md:text-2xl text-xl cursor-pointer' />
              <span className='text-lg font-bold cursor-pointer'>Previous</span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='text-lg text-gray-500 font-bold cursor-pointer'>
                Next
              </span>
              <MdArrowForwardIos className='md:text-2xl text-xl text-gray-500 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container px-3 md:px-0 flex flex-col md:flex-row gap-y-8 md:gap-y-0 gap-x-14 p-2  md:pt-20 mx-auto'>
          <div className='flex flex-col gap-y-7 w-[400px]'>
            <img className=' h-56 -ml-12' src={connect} alt='' />
            <h1 className='font-[Manrope] text-5xl'>
              Connect with people who can help
            </h1>
            <div className='p-3 cursor-pointer hover:bg-gray-200 rounded-full border border-black w-56 text-center'>
              Find people you know
            </div>
          </div>
          <div className='flex flex-col gap-y-7 w-[400px]'>
            <img className=' h-56 -ml-12' src={skill} alt='' />
            <h1 className='font-[Manrope] text-5xl'>
              Learn the skills you need to succeed
            </h1>
            <div className='p-3 border cursor-pointer hover:bg-gray-200 border-gray-400 w-56 text-center'>
              Find people you know
            </div>
          </div>
        </div>
        <div>
          <div className='container px-3 md:px-0 pt-4 pb-20 md:pt-9 mx-auto'>
            <h1 className='md:text-6xl text-4xl font-[Manrope] text-gray-600'>
              Join your colleagues, classmates, and friends on LinkedIn.
            </h1>
            <button className=' rounded-full px-8 py-4 mt-10 bg-blue-700 font-[inter] text-white font-semibold '>
              Get started
            </button>
          </div>
          <div className='px-4 md:px-0 bg-gray-200'>
            <div className='container  pt-8 grid grid-cols-1 md:grid-cols-7 gap-x-10 mx-auto'>
              <div className='col-span-2'>
                <img className='h-6' src={big} alt='' />
              </div>
              <div className='col-span-1'>
                <h1 className='font-bold font-[inter]'>General</h1>
                <div className='font-[inter] text-gray-600 mt-4'>
                  <h1>Sign up</h1>
                  <h1>Help Center</h1>
                  <h1>About</h1>
                  <h1>Press</h1>
                  <h1>Blog</h1>
                  <h1>Careers</h1>
                  <h1>Developer</h1>
                </div>
              </div>
              <div className='col-span-1'>
                <h1 className='font-bold font-[inter]'>Browse LinkedIn</h1>
                <div className='font-[inter] text-gray-600 mt-4'>
                  <h1>Learning</h1>
                  <h1>jops</h1>
                  <h1>Salary</h1>
                  <h1>Mobile</h1>
                  <h1>Service</h1>
                  <h1>Products</h1>
                </div>
              </div>
              <div className='col-span-1'>
                <h1 className='font-bold font-[inter]'>Business Solutions</h1>
                <div className='font-[inter] text-gray-600 mt-4'>
                  <h1>Talent</h1>
                  <h1>Marketing</h1>
                  <h1>Sales</h1>
                  <h1>Learning</h1>
                </div>
              </div>
              <div className='col-span-2'>
                <h1 className='font-bold font-[inter]'>Directories</h1>
                <div className='font-[inter] text-gray-600 mt-4'>
                  <h1>Members</h1>
                  <h1>Jops</h1>
                  <h1>Companies</h1>
                  <h1>Featured</h1>
                  <h1>Learning</h1>
                  <h1>Posts</h1>
                  <h1>Articles</h1>
                  <h1>Schools</h1>
                  <h1>News</h1>
                  <h1>News Letters</h1>
                  <h1>Services</h1>
                  <h1>Products</h1>
                  <h1>Content Topics</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center text-lg font-semibold p-4  items-center'>
        Developed by Montaser :-)
      </div>
    </div>
  );
}

export default Landing;
