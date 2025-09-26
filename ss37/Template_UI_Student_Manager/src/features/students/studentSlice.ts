import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Student } from "./types";

export const fetchStudents = createAsyncThunk(
    "students/fetchStudents",
    async () => {
        const res = await axios.get("http://localhost:8080/students");
        return res.data
    }
)

export const fetchDeleteStudent = createAsyncThunk(
    "students/fetchDeleteStudent",
    async (id: string) => {
        await axios.delete(`http://localhost:8080/students/${id}`)
        return id;
    }
)

export const fetchAddStudent = createAsyncThunk(
    "students/fetchAddStudent",
    async (student: Student) => {
        await axios.post(`http://localhost:8080/students`, student);
        return student
    }
)

interface studentState {
    students: Student[]
    status: "idle" | "pending" | "fulfilled" | "rejected"
    err: string | null
}

const initialState: studentState = {
    students: [],
    status: "idle",
    err: null,
}
const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchStudents.pending, state => {
            state.status = "pending"
        })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.students = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.status = "rejected";
                state.err = action.error.message ?? "err";
            }).addCase(fetchDeleteStudent.pending, (state) => {
                state.status = "pending"
            }).addCase(fetchDeleteStudent.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.students = state.students.filter(s => s.id !== action.payload)
            }).addCase(fetchAddStudent.pending, state => {
                state.status = "pending";
            }).addCase(fetchAddStudent.fulfilled,(state,action)=>{
                state.students.push(action.payload)
                state.status="fulfilled"
            })
    }
})

export default studentSlice.reducer

