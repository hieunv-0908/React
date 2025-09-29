import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "./types";
import axios from "axios"

interface BookState {
    books: Book[],
    status: "idle" | "loading" | "succeeded" | "failed",
    error: null | string,
}

const initialState: BookState = {
    books: [],
    status: "idle",
    error: null,
}

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async () => {
        const res = await axios.get("http://localhost:8080/Library");
        return res.data
    }
)

export const fetchDeleteBooks = createAsyncThunk(
    "books/fetchDeletesBooks",
    async (id: string) => {
        await axios.delete(`http://localhost:8080/Library/${id}`);
        return id
    }
)

export const fetchAddBooks = createAsyncThunk(
    "books/fetchAddBooks",
    async (book: Book) => {
        await axios.post(`http://localhost:8080/Library`, book);
        return book
    }
)

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchBooks.pending, (state) => {
            state.status = "loading"
        }).addCase(fetchBooks.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "Lỗi không xác định"
        }).addCase(fetchDeleteBooks.pending, (state) => {
            state.status = "loading"
        }).addCase(fetchDeleteBooks.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "Lỗi không xác định"
        }).addCase(fetchAddBooks.pending, (state) => {
            state.status = "loading"
        }).addCase(fetchAddBooks.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "Lỗi không xác định"
        })
            .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
                state.status = "succeeded";
                state.books = action.payload;
            }).addCase(fetchDeleteBooks.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = "succeeded";
                state.books = state.books.filter((b) => b.id !== action.payload);
            }).addCase(fetchAddBooks.fulfilled, (state, action: PayloadAction<Book>) => {
                state.status = "succeeded";
                state.books.push(action.payload);
            })
    }
})

export default bookSlice.reducer