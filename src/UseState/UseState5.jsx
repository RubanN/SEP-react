import React,{useState,useEffect} from 'react'

export default function UseState5() {
    const [message,setMessage]=useState('Hi there, how are you')
    useEffect(()=>{
        console.log("Trigger use effect hook");
        setTimeout(()=>{
            setMessage('Im fine, thanks for asking')
        },1000)
    },[])
    
    return <h1>{message}</h1>
}
