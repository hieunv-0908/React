import type { Student } from '../utils/types'

type Add_Student = {
    type: "ADD_STUDENT",
    payload: Student,
}

type Delete_Student = {
    type: 'DELETE_STUDENT',
    payload: string,
}

type Search_Student = {
    type: "SEARCH_STUDENT",
    payload: string,
}

type Update_Student = {
    type: "UPDATE_STUDENT",
    payload1: string | number,
    payload2: Student
}

export type ActionType = Add_Student | Delete_Student | Search_Student | Update_Student;