import { createSlice } from "@reduxjs/toolkit";

interface CountState {
    value: number;
}

const initialState: CountState = { value: 0 }

export const counterSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 },
        reset: state => { state.value = 0 }
    }
});

export default counterSlice.reducer
export const { increment, decrement, reset } = counterSlice.actions
