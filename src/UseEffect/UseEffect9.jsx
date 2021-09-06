import React,{useState,useEffect} from 'react'



//React useEffect: The componentWillUpdate hook
export default function UseEffect9() {
    const [counter,setCounter] = useState(0)
  useEffect(()=>{
      setCounter(c=>c+1)
  },[])
    return (
        <div style={{textAlign: 'center'}}>
              <h1>Counter: {counter}</h1>

        </div>
    )
}
