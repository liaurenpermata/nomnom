import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: "",
    userRole:"",
    userToken: "",
    status:"signOut",
}

const usersSlicer = createSlice({
    name:'users',
    initialState,
    reducers:{
        signIn: (state, action) => {
            const { username, role ,token } = action.payload
            state.status = 'signIn'
            state.userName = username
            state.userRole = role
            state.userToken = token
        },
        printSignIn: (state) => {
            console.log(state.userName)
            console.log(state.userRole)
            console.log(state.userToken)
            console.log(state.status)
        }
    }
})

export const getUserName = (state) => state.users.userName;

export const { signIn, printSignIn } = usersSlicer.actions;

export default usersSlicer.reducer