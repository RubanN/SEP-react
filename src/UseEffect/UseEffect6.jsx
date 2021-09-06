import React,{useState,useEffect} from 'react'

export default function UseEffect6() {
    const [count,setCount]=useState(0);

  useEffect(()=>{
      alert('UseEffect is for every count')
  },[count])
  console.log(count);
    return (
        <div>
            {count}
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}
