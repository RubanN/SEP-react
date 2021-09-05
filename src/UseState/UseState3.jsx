import React,{useState} from 'react'

export default function UseState3() {
      const [firstName,setFirstName]=useState()
    return (
        <div>
            <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e)=>{
                setFirstName(e.target.value);
            }}
            />
            <p>First Name:{firstName}</p>
        </div>
    )
}
