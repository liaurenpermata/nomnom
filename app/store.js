import { configureStore } from '@reduxjs/toolkit'
import usersSlicer from '../reducer/usersSlicer'

export const store = configureStore({
    reducer: {
        usersSlicer,
    }
})