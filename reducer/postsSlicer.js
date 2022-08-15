import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
//     const { data } = await axios.get('')
// })

const postsSlicer = createSlice({
    name:'posts',
    initialState,
    reducers:{

    }
})

export default postsSlicer.reducer