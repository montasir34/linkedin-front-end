import { BsCardImage, BsNodeMinusFill } from 'react-icons/bs';
import { MdSubscriptions } from 'react-icons/md';
import { MdOutlineEventNote } from 'react-icons/md';
import { MdCalendarViewDay } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gql, useMutation } from '@apollo/client';
import FormOption from './FormOption';
import Spinner from './Spinner'
import { storage } from '../firebase';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { toast } from 'react-toastify';

function Popup({ isPopup }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [progress, setprogress] = useState(0)
  const [isloading, setLoading] = useState(false);
  const [body, setbody] = useState('');
  const [image, setImage] = useState(null);
  const uploadImg = (e) => {
    const imgFile = e.target.files[0];
    setLoading(true);
    const storageRef = ref(
      storage,
      `images/post/${Date.now()}-${imgFile.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, imgFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setprogress(uploadProgress)
      },
      (error) => {
        toast.error('can not upload you img');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          setLoading(false);
        });
      }
    );
  };

  const deleteImg = () => {
    const deleteRef = ref(storage, image);
    deleteObject(deleteRef).then(() => {
      toast.success('image deleted');
      setImage('');
    });
  };

const ADD_POST = gql`
  mutation createPost($body: String!, $image: String) {
    createPost(body: $body, image: $image) {
     id
     body
    }
  }
`;
const [createPost, { data, loading, error }] = useMutation(ADD_POST);
 

   const onSubmit = (e) =>{
    e.preventDefault()
    createPost({variables: {body, image}})
    console.log(data)
    // isPopup(prev => !prev)
   } 
   

  return (
    <div
      className="fixed flex flex-col justify-between h-[90%]   top-10 rounded-lg p-2  md:left-[30%] z-50
    left-[5%] w-[90%] md:w-[40%] sm:w-[60%] sm:left-[20%]  bg-white">
      <div
        onClick={() => isPopup((prev) => !prev)}
        className="cursor-pointer text-2xl inline-block absolute right-5 top-5">
        <IoIosCloseCircleOutline />
      </div>
      <textarea
        name="body"
        className="w-full  relative outline-none mt-8 p-5 text-end h-[20%]"
        id=""
        onChange={(e) => setbody(e.target.value)}
        value={body}
        cols="30"
        rows="10"
        autoFocus></textarea>
      {image && (
        <div onClick={deleteImg} className="right-0 text-3xl rounded-full">
          <IoIosCloseCircleOutline />
        </div>
      )}
      <div
        className="h-[50%]  overflow-y-scroll
       overflow-x-hidden scrollbar-hide flex justify-center items-center">
        <img className="h-[80%]" src={image} alt="" />
        {loading && <Spinner progress={progress} />}
      </div>
      <div className="flex justify-between">
        <label className="flex">
          <input
            className="w-0 h-0"
            type="file"
            name="file"
            accept="image/*"
            onChange={uploadImg}
          />
          <FormOption
            Icon={BsCardImage}
            color="text-blue-400 text-2xl"
            title="photo"
          />
        </label>
        <FormOption
          Icon={MdSubscriptions}
          color="text-amber-400 text-2xl"
          title="video"
        />
        <FormOption
          Icon={MdOutlineEventNote}
          color="text-gray-400 text-2xl"
          title="event"
        />
       <button disabled={loading || !(body || image)} onClick={onSubmit} className='px-4 rounded-2xl text-white font-bold bg-blue-500'>POST</button>
      </div>
    </div>
  );
}

export default Popup;
