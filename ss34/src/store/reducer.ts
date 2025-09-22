import type { Student } from "../utils/types"
import type { ActionType } from "./actionType"
const initState: Student[] = [
    {
        id: "1",
        name: "Nguyễn Văn A",
        age: 20,
        gender: "Nam",
        birthday: "2005-01-15",
        hometown: "Hà Nội",
        address: "123 Láng, Đống Đa, Hà Nội",
    },
    {
        id: "2",
        name: "Trần Thị B",
        age: 21,
        gender: "Nữ",
        birthday: "2004-03-22",
        hometown: "Hải Phòng",
        address: "56 Trần Phú, Ngô Quyền, Hải Phòng",
    },
    {
        id: "3",
        name: "Lê Văn C",
        age: 19,
        gender: "Nam",
        birthday: "2006-07-09",
        hometown: "Đà Nẵng",
        address: "12 Nguyễn Văn Linh, Đà Nẵng",
    },
    {
        id: "4",
        name: "Phạm Thị D",
        age: 22,
        gender: "Nữ",
        birthday: "2003-11-30",
        hometown: "TP. Hồ Chí Minh",
        address: "88 Lê Lợi, Quận 1, TP. Hồ Chí Minh",
    },
];


export function studentReducer(stateStudent = initState, action: ActionType) {
    switch (action.type) {
        case "ADD_STUDENT":
            return [...stateStudent, { ...action.payload }];
        case "DELETE_STUDENT":
            return [...stateStudent.filter(s => s.id !== action.payload)];
        case "SEARCH_STUDENT":
            if (typeof (action.payload) === "string") {
                return [...stateStudent.filter(s => s.name.includes(action.payload))]
            } else {
                return [...action.payload]
            }
        case "UPDATE_STUDENT":
            return stateStudent.map(s=>{
               return s.id == action.payload1 as string?{...s,...action.payload2}:s
            });
        default:
            return stateStudent;
    }
}