import React,{useState,useEffect} from 'react'

export default function UseEffect5() {

    const [count,setCount] = useState(0)
     const   increment=()=>{setCount(count+1)}
    useEffect(()=>{
        console.log('render');
      document.title =`you clicked ${count} times`
    })
    return (
        <div>
            <button onClick={increment}>Clike</button>
        </div>
    )
}
