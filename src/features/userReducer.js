import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user'));

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: user ? user : null,
        userData: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        deleteUser: (state) => {
            state.user = null
            state.userData = null
        }   
    }
})

export default userSlice.reducer
export const { setUser,setUserData, deleteUser } = userSlice.actions