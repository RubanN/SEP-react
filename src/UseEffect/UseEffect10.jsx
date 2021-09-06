import React,{useState,useEffect}from 'react'

export default function UseEffect10() {
    const [counter,setCounter] = useState(0);
    useEffect(()=>{
        const s = setInterval(()=>{
            setCounter(c=>c+1)
        },1000)
    },[])
    return (
        <div style={{textAlign: 'center'}}>
        <h1>Counter: {counter}</h1>
      </div>
    )
}
