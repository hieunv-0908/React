import React,{useState} from 'react'
import InputTodo from './InputTodo'
import TitleTodo from './TitleTodo'
import ListTodo from './ListTodo'
export default function Todo() {
    const [inputTodo, setInputTodo] = useState('');
  return (
    <div>
        <TitleTodo></TitleTodo>
        <InputTodo ></InputTodo>
        <ListTodo></ListTodo>
    </div>
  )
}
