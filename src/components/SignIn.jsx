import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import big from "../image/logoBig.png";
import { ImEyeBlocked, ImEye } from "react-icons/im";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { setUser } from "../features/userReducer";
import { gql, useMutation } from "@apollo/client";

function SignIn() {
  const [togglePassword, settogglePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      return navigate("/home");
    }
  }, []);
  const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        id
        token
        name
        email
        image
      }
    }
  `;
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  function handleSignIn(e) {
    e.preventDefault();
    loginUser({ variables: { email, password } });
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.loginUser));
      localStorage.setItem("user", JSON.stringify(data.loginUser));
      navigate("/home");
    }
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    toast.error(error.message);
    error.message = null;
  }
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
        <div
          className='w-[350px] p-5  shadow-lg border-t border-gray-100
         shadow-gray-300 rounded-md bg-white'>
          <h1 className='text-3xl font-semibold'>Sign up</h1>
          <p className='text-gray-500'>
            Stay updated on your professional world
          </p>
          <form className='flex flex-col gap-y-4 mt-5 ' onSubmit={handleSignIn}>
            <input
              placeholder='Email'
              value={email}
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              className='w-full pl-3 outline-none rounded-md h-14
               border border-black'
              type='text'
            />
            <div className='relative'>
              <input
                placeholder='Password'
                type={togglePassword ? "password" : "text"}
                value={password}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                className='w-full pl-3 outline-none rounded-md h-14 border border-black '
              />
              <div
                onClick={() => settogglePassword((prev) => !prev)}
                className='absolute text-xl cursor-pointer top-1/3 right-3'>
                {togglePassword ? <ImEyeBlocked /> : <ImEye />}
              </div>
            </div>

            <h1 className='font-semibold text-blue-700 cursor-pointer '>
              Forgot password ?{" "}
            </h1>
            <button
              // disabled={isLoading}
              className='rounded-full hover:bg-blue-900 h-12 bg-blue-700
               text-white font-semibold'>
              Sign up
            </button>
          </form>
          <div className='flex items-center gap-x-2'>
            <hr className='text-gray-500 mt-2  w-1/2 h-1' />
            <h1>or</h1>
            <hr className='text-gray-500 mt-2  w-1/2 h-1' />
          </div>
          <button
            onClick={() => {
              navigate("/signUp");
            }}
            className='underline text-blue-600'>
            new to linkedin ?
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
