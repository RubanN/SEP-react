import React,{useState} from 'react'

function initArray(){
    console.log("Initializing array");
    let array = [];
    for(let i=0;i<1000;i++){
        array.push(i)
    }
    return array;
}
export default function UseState1() {
           const [array,setArray] = useState(initArray())   
    return <p onClick={()=>setArray([...array,1])}>{array.length}</p>
}
// This UseState calls function every time it keeps on calling the function
// and incrementing the Initializing count values