import type { AppDIspatch, RootState } from '../../store/store'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrement, increment, reset } from './couterSlice'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDIspatch>();
  return (
    <div>
      <span>count: {count}</span>
      <button onClick={() => { dispatch(increment()) }}>Increment</button>
      <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
      <button onClick={() => { dispatch(reset()) }}>Reset</button>
    </div>
  )
}

export default Counter