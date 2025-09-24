import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "../features/counter/couterSlice";
import randomSlice from "../features/randomNumber/randomSlice";
import themeSlice from "../features/theme/themeSlice";
export const store = configureStore(
    {
        reducer: {
         counter:counterReducer,
         random:randomSlice,    
         theme:themeSlice,  
        },
        devTools: true
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDIspatch = typeof store.dispatch