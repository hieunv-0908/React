import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface randomState {
    value: number[]
}

const initialState: randomState = {
    value: [],
}

const randomSlice = createSlice({
    name: 'random',
    initialState,
    reducers: {
        randomArray: (state, action: PayloadAction<number>) => {
            const size = action.payload;
            state.value = Array.from({ length: size }, () => Math.floor(Math.random() * 101))
        }
    }
})

export default randomSlice.reducer
export const { randomArray } = randomSlice.actions