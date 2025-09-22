import { combineReducers, createStore } from "redux";
import { studentReducer } from "./reducer";

const rootReducer = combineReducers(
    {
        student:studentReducer,
    }
)

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof store.getState>