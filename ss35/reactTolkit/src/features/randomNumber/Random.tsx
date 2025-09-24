import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { randomArray } from './randomSlice'
import type { AppDIspatch, RootState } from '../../store/store'

function Random() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const arrRandom = useSelector((state: RootState) => state.random.value)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch<AppDIspatch>();
    return (
        <div>
            <span>list random: {`[${arrRandom}]`}</span>
            <button onClick={() => { dispatch(randomArray(5)) }}>random number</button>
        </div>
    )
}
export default Random