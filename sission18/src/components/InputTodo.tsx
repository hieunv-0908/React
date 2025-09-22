import React from 'react'

interface propType{
    input:string,
    handle:(e:React.ChangeEvent<HTMLInputElement>);
}
export default function InputTodo(props:propType ) {
  return (
    <>
        <input type="text" />
        <button>Thêm</button>
    </>
  )
}
