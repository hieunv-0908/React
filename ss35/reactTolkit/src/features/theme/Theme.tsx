import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDIspatch, RootState } from '../../store/store'
import { changeTheme } from './themeSlice';

function Random() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useSelector((state: RootState) => state.theme.value)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch<AppDIspatch>();
    return (
        <div style={{backgroundColor:`${theme}`,width:'100vw',height:'100vh'}}>
            <button onClick={() => { dispatch(changeTheme()) }}>{theme}</button>
        </div>
    )
}

export default Random