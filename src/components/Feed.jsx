import { BsCardImage } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { MdCalendarViewDay } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import PostOption from "./PostOption";
import avatar from "../image/avatar.jpg";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { BiShare } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import FormOption from "./FormOption";
import React, { useState } from "react";
import Popup from "./Popup";
import PopupContainer from "./PopupContainer";
import Spinner from "./Spinner";

function Feed({loading}) {
  const [showComments, setShowComments] = useState(null);
  const [popup, setpopup] = useState(false);
  console.log(loading);
  const { userData , user} = useSelector((state) => state.user);
  function getAllFriendsPosts(userdata) {
    const { friends, posts } = userdata || {}
    const nestedChildsPosts = (friends || [])?.flatMap((child) => {
      return getAllFriendsPosts(child);
    });
    const childPosts = posts?.map((p) => ({ ...p }));
    return childPosts?.concat(nestedChildsPosts);
  }

  const allPosts = getAllFriendsPosts(userData);
  const POSTS = (allPosts || [])
    .sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
    .reverse();
    console.log(POSTS)
  function iLike(post) {
    if (post.likes.find((it) => it.id === user.id)) {
      return true;
    } else {
      return false;
    }
  }

  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  // const COMMENTS_SUBSCRIPTION = gql`
  //   subscription OnCommentAdded($postID: ID!) {
  //     commentAdded {
  //       id
  //       content
  //     }
  //   }
  // `;

  return (
    <div className=''>
      {popup && <Popup isPopup={setpopup} />}
      {popup && <PopupContainer isPopup={setpopup} />}
      <div className=' mx-auto md:w-full w-[90%]  p-3 mt-5 bg-white rounded-lg'>
        <div className='flex'>
          <img
            className='rounded-full h-12 w-12 object-cover'
            src={avatar}
            alt=''
          />
          <form
            onClick={() => setpopup((prev) => !prev)}
            className='flex border-2 w-full border-gray-400 rounded-full mx-4 p-2 items-center'>
            <MdModeEdit className='text-xl' />
          </form>
        </div>

        <div className='flex md:gap-x-8 gap-x-2 justify-center'>
          <FormOption
            Icon={BsCardImage}
            color='text-blue-400 text-2xl'
            title='photo'
          />
          <FormOption
            Icon={MdSubscriptions}
            color='text-amber-400 text-2xl'
            title='video'
          />
          <FormOption
            Icon={MdOutlineEventNote}
            color='text-gray-400 text-2xl'
            title='event'
          />
          <FormOption
            Icon={MdCalendarViewDay}
            color='text-green-40 text-2xl'
            title='write article'
          />
        </div>
      </div>
      {loading && <Spinner />}
      {POSTS &&
        POSTS.map((item) => (
          <div key={item.id}>
            <div className='rounded-md mx-auto md:w-full w-[90%] mt-5 p-2 bg-white '>
              <div className='flex'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src={item.user.image ? item.user.image : avatar}
                  alt=''
                />
                <div className='ml-2 '>
                  <h1 className='font-bold text-gray-700'>{item.user.name}</h1>
                  <p className='text-xs text-gray-500'>
                    {timeSince(item.createdAt)}
                  </p>
                </div>
              </div>
              <div>
                <p className='whitespace-pre-wrap'>{item.body}</p>
              </div>
              <div className='h-full pt-5 w-full'>
                {item.img && (
                  <img className='rounded-md' src={item.img} alt='' />
                )}
              </div>
              <div className='flex justify-between'>
                <h1 className='text-gray-400'>
                  <span className='text-gray-600'>{item.comments.length}</span>{" "}
                  comments
                </h1>
                <h1 className='text-gray-400'>
                  <span className='text-gray-600'>{item.likes.length}</span>{" "}
                  likes
                </h1>
              </div>
              <hr />
              <div
                className='flex items-center mt-2
           sm:gap-x-3 gap-x-2 md:gap-x-10 justify-center'>
                <div className='flex cursor-pointer p-2 hover:bg-gray-200 gap-x-2 items-center'>
                  {iLike(item) ? (
                    <AiTwotoneLike className='md:text-2xl text-blue-600 text-xl' />
                  ) : (
                    <AiOutlineLike className='md:text-2xl text-blue-600 text-xl' />
                  )}

                  <h4>like</h4>
                </div>
                <div
                  onClick={() =>
                    setShowComments(showComments != null ? null : item.id)
                  }>
                  <div className='flex cursor-pointer p-2 hover:bg-gray-200 gap-x-2 items-center'>
                    <FaRegCommentDots className='md:text-2xl text-xl' />
                    <h4>comment</h4>
                  </div>
                </div>
                <div className='flex cursor-pointer p-2 hover:bg-gray-200 gap-x-2 items-center'>
                  <BiShare className='md:text-2xl text-xl' />
                  <h4>share</h4>
                </div>
              </div>
              <AnimatePresence>
                {showComments === item.id && (
                  <motion.div
                    initial={{ height: 0, paddingBottom: 0, opacity: 0 }}
                    exit={{ height: 0, paddingBottom: 0, opacity: 0 }}
                    animate={{ height: 260, paddingBottom: 50, opacity: 1 }}
                    className=' w-full relative rounded-md px-2 bg-gray-200 h-[260px]'>
                    <div className='h-full scrollbar-hide overflow-y-scroll w-full '>
                      <div className='flex flex-col'>
                        {item.comments.length ? (
                          item.comments.map((it) => (
                            <div
                              key={it.id}
                              className='p-1 flex rounded-md bg-white mt-2 flex-col  w-full'>
                              <div className='flex gap-x-2'>
                                <img
                                  className='rounded-full h-10'
                                  src={it.user.image ? it.user.image : avatar}
                                  alt=''
                                />
                                <div className='flex flex-col'>
                                  <h1>{it.user.name}</h1>
                                  <p className='text-xs text-gray-500'>
                                    {timeSince(it.createdAt)}
                                  </p>
                                </div>
                              </div>
                              <div className='p-3'>{it.body}</div>
                            </div>
                          ))
                        ) : (
                          <div className='mx-auto '>
                            <h1 className='text-red-300 '>no comments</h1>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='w-full absolute rounded-b-md right-0 bottom-0 bg-gray-200 h-[18%]'>
                      <form className='flex gap-x-2 p-2 h-full items-stretch rounded-md'>
                        <input
                          autoFocus
                          className='w-full px-3 h-full outline-none border-gray-400 border rounded-full '
                          type='text'
                        />
                        <button className='rounded-2xl bg-white px-3 hover:bg-gray-100'>
                          send
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Feed;
