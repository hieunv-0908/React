import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface themeState {
    value: string
}

const initialState: themeState = {
    value: "white"
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state => {
            if (state.value === "dark") {
                state.value = "white"
            } else {
                state.value = "dark"
            }
        })
    }
})

export default themeSlice.reducer
export const { changeTheme } = themeSlice.actions