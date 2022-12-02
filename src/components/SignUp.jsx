import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiImageAdd } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import big from "../image/logoBig.png";
import React, { useState } from "react";
import { storage } from "../firebase";
import { ImEyeBlocked, ImEye } from "react-icons/im";
import { useEffect } from "react";
import { setUser } from "../features/userReducer";
import { gql, useMutation } from "@apollo/client";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

function SignUp() {
  const [togglePassword, settogglePassword] = useState(true);
  const [Loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    password: "",
    email: "",
    image: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, email, password, image } = form;
  console.log(image);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      return navigate("/home");
    }
  }, [navigate]);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  }
  const REGISTER_USER = gql`
    mutation registerUser(
      $name: String!
      $image: String!
      $email: String!
      $password: String!
    ) {
      registerUser(
        email: $email
        name: $name
        image: $image
        password: $password
      ) {
        id
        name
        email
        image
        token
      }
    }
  `;
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
  useEffect(() => {
    if (data) {
      dispatch(setUser(data.registerUser));
      localStorage.setItem("user", JSON.stringify(data.registerUser));
      navigate("/home");
    }
  }, [data]);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    toast.error(error.message);
    error.message = "";
  }
  function handleSignUp(e) {
    e.preventDefault();
    registerUser({
      variables: {
        name,
        email,
        password,
        image,
      },
    });
  }

  const uploadImg = (e) => {
    const imgFile = e.target.files[0];
    setLoading(true);
    const storageRef = ref(
      storage,
      `images/post/${Date.now()}-${imgFile.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, imgFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // setprogress(uploadProgress)
      },
      (error) => {
        toast.error("can not upload you img");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setForm((prev) => ({
            ...prev,
            image: downloadURL,
          }));
          setLoading(false);
        });
      }
    );
  };

  // const deleteImg = () => {
  //   setLoading(true)
  //   const deleteRef = ref(storage, img);
  //   deleteObject(deleteRef).then(() => {
  //     toast.success('image deleted');
  //     // setForm((prev) => ({
  //     //   ...prev,
  //     //   img: '',
  //     // }));
  //     setLoading(false)
  //   });
  // };

  return (
    <React.Fragment>
      <div>
        <div className='container p-5 mx-auto'>
          <img
            onClick={() => {
              navigate("/");
            }}
            className='h-11 '
            src={big}
            alt=''
          />
        </div>
      </div>
      <div className='flex pb-14 mt-20 justify-center'>
        <div className='w-[350px] p-5  shadow-lg border-t border-gray-100 shadow-gray-300 rounded-md bg-white'>
          <h1 className='text-3xl font-semibold'>Sign up</h1>
          <p className='text-gray-500'>
            Stay updated on your professional world
          </p>
          <label
            className={`flex items-center justify-center mx-auto w-20 h-20 rounded-full cursor-pointer ${
              Loading || form.img ? "bg-white" : "bg-gray-40"
            }0 m-10`}>
            {image && (
              <img
                loading='lazy'
                src={image}
                className='rounded-full h-20 w-20'
                alt=''
              />
            )}
            {!(image || Loading) && (
              <div className='w-20 h-20 flex justify-center items-center text-3xl rounded-full bg-gray-300 text-gray-500'>
                <BiImageAdd />
              </div>
            )}
            {/* {form.img && (
              <div
                onClick={deleteImg}
                className="right-0 text-3xl rounded-full">
                <IoIosCloseCircleOutline />
              </div>
            )} */}
            {Loading && <Spinner />}
            <input
              className='w-0 h-0'
              type='file'
              onChange={uploadImg}
              accept='image/*'
              name='img'
              id=''
            />
          </label>
          <form className='flex flex-col gap-y-4 mt-5 ' onSubmit={handleSignUp}>
            <input
              placeholder='name'
              value={form.name}
              name='name'
              onChange={handleChange}
              className='w-full pl-3 outline-none rounded-md h-14 border border-black'
              type='text'
            />

            <>
              <input
                placeholder='email'
                value={form.email}
                name='email'
                onChange={handleChange}
                className='w-full pl-3 outline-none rounded-md h-14 border border-black'
                type='text'
              />
              <div className='relative'>
                <input
                  placeholder='Password'
                  type={togglePassword ? "password" : "text"}
                  value={form.password}
                  name='password'
                  onChange={handleChange}
                  className='w-full pl-3 outline-none rounded-md h-14 border border-black '
                />
                <div
                  onClick={() => settogglePassword((prev) => !prev)}
                  className='absolute text-xl cursor-pointer top-1/3 right-3'>
                  {togglePassword ? <ImEyeBlocked /> : <ImEye />}
                </div>
              </div>
            </>
            <button
              disabled={Loading || !(form.name && form.email && form.password)}
              onClick={handleSignUp}
              className='rounded-full hover:bg-blue-900 h-12 bg-blue-700 text-white font-semibold'>
              Sign up
            </button>
          </form>

          <div className='flex items-center gap-x-2'>
            <hr className='text-gray-500 mt-2  w-1/2 h-1' />
            <h1>or</h1>
            <hr className='text-gray-500 mt-2  w-1/2 h-1' />
          </div>
          <div className=' space-y-4 tex'>
            <div className='rounded-full hover:bg-gray-200 hover:border-2 cursor-pointer h-12 border text-black gap-x-2 flex justify-center items-center   border-black  font-semibold'>
              <FcGoogle className='text-2xl' />
              <h1>Sign with Google</h1>
            </div>
            <div className='rounded-full hover:bg-gray-200 hover:border-2 cursor-pointer h-12 border text-black gap-x-2 flex justify-center items-center  border-black  font-semibold'>
              <BsApple className='text-2xl' />
              <h1>Sign with Apple</h1>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/signIn");
            }}
            className='underline text-blue-600'>
            already hava an acount?
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
