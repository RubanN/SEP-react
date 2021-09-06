import React,{useState,useEffect} from 'react'

export default function UseEffect3({name}) {
    const [count,setCount] = useState(0);
    const [effectCount,setEffectCount] = useState(0)
    const increment =()=>{
        setCount(count+1)
    }
    //componentDidMount
    useEffect(()=>{
         console.log('useEffect called');
         setEffectCount(effectCount+1)
        document.title = name+ count;
        },[count]) // it decide when call on count value
        console.log('outside of useEffect called');

    return (
        <div>
             <h1>Hello{name}</h1>
    Count:{count}
    <br/>
    Effect count:{effectCount}
    <button onClick={increment}>Increment</button>
        </div>
    )
}
