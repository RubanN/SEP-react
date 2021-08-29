import React,{useState,useEffect} from 'react'
//3. Understanding useEffect Hook
export default function UseEffect() {
    const [name,setName]= useState("Ruban");
    const [age,setAge] = useState(27);
    const [renderCount,setRenderCount]= useState(0);
    useEffect(()=>{
        setRenderCount(renderCount+1)
    },[]) //componentDidMount


    return (
        <>
          <input type="text" value={name} 
          onChange={e=>setName(e.target.value)}/>        
          <h1>Name:{name}</h1>
          <h1> Age : {age} </h1>
          <p> Render Count : {renderCount} </p>

        </>
    )
}
