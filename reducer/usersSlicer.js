import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: []
}

const usersSlicer = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export default usersSlicer.reducer