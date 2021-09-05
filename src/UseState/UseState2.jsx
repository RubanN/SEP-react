import React,{useState} from 'react'

export default function UseState2() {
    const [arr,setArr] = useState(()=>{
        console.log('Initialiing Array');
        let arr=[];
        for(let i=0; i<arr.length; i++){
            arr.push(i)
        }
        return arr;
    })
    return <p onClick={()=>setArr([...arr,1])}>{arr.length}</p>
    
}
