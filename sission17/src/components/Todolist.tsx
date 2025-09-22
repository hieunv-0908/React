import React,{useRef, useState} from 'react'

export default function Todolist() {
    const [list,setList]= useState<string[]>([]);
    const inputRef = useRef(null);
    let temp:string = '';
    const handleList = (e:React.ChangeEvent<HTMLInputElement>)=>{  
        temp = e.target.value;
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setList([...list,temp]);
    }
  return (
    <div>
        <h2>Danh sách công việc</h2>
        <form action="#">
            <input type="text" ref={} onChange={handleList}/>
            <button>Thêm</button>
        </form>

    </div>
  )
}
