import React,{useState,useEffect} from 'react'

export default function UseState4() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("");

    useEffect(()=>{
        setName(name+"ruban")
    },[])
    return (
        <div>
            <p>Hello {name}You clicked the button {count} times</p>
            <button onClick={()=>setCount(count+1)}>click</button>
        </div>
    )
}
