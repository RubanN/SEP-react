import React,{useState} from 'react'

export default function HideAndShow() {
    const [show,setShow] = useState(false)
    return (
        <div>
            {
                show ? <h1>Hello world</h1>:null
            }
           <button onClick={()=>setShow(true)}>Show</button>
           <button onClick={()=>setShow(false)}>Hide</button>           
        </div>
    )
}
