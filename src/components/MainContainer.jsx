import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Header from "./Header";
import Widgets from "./widgets";
import Spinner from "./Spinner"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { setUser, setUserData } from "../features/userReducer";

import React, { useState } from "react";
function MainContainer() { 
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [load, setLoad] = useState(false)

    useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  }, []);

  const dispatch = useDispatch();
  const [post, setPost] = useState(null);

  const GET_ME = gql`
    query getMe {
      getMe {
        id
        name
        email
        image
        posts {
          id
          body
          image
          createdAt
          user {
            id
            name
            image
          }
          comments {
            id
            body
            createdAt
            user {
              id
              name
              image
            }
          }
          likes {
            id
            name
            image
          }
        }
        friends {
          id
          name
          image
          posts {
            id
            body
            image
            createdAt
            user {
              id
              name
              image
            }
            comments {
              id
              body
              createdAt
              user {
                id
                name
                image
              }
            }
            likes {
              id
              name
              image
            }
          }
        }
        token
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ME);

  useEffect(() => {
    if (data) return setPost(data.getMe);
  }, [ data ]);

  useEffect(() => {
   setLoad(prev => !prev);
  }, [ loading ]);

  useEffect(()=>{
      dispatch(setUserData(post))
  }, [post])
  


  return (
    <div className='bg-gray-200'>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-12 sm:grid-cols-12'>
        <div className=' sm:col-span-4 col-span-1 md:col-span-3'>
          <Sidebar />
        </div>
        <div className='sm:col-span-8 col-span-1 md:col-span-6'>
          <Feed loading = {load} />
        </div>
        <div className='col-span-1 sm:col-span-4 md:col-span-3'>
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
