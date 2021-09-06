import React,{useState,useEffect} from 'react'
import UseEffect7 from "./UseEffect7"
export default function UseEffect8() {
    const [showWindowWidthSize,setShowWindowSize] = useState(true);

    return (
        <div style={{textAlign: 'center'}}>
          {showWindowWidthSize && <UseEffect7/> }
          <span>
              <button onClick={()=>setShowWindowSize(false)}>Magic Button</button>
          </span>
        </div>
    )
}
