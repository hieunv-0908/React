import React,{useState,useEffect} from 'react'

export default function KeyTracker() {
    const [state,setState] = useState('');
    useEffect(()=>{
        const keyDown = (e:KeyboardEvent)=>{
            setState(e.key);
        }
        window.addEventListener("keydown",keyDown)
    return ()=>{
        window.removeEventListener("keydown",keyDown);
    }
    },[])
  return (
    <div>
        <span>{state}</span>
    </div>
  )
}
