import React,{useState} from 'react'

export default function UseStateObj() {
      const [state,setState]=useState({firstName:"",lastName:""})
    return (
        <div>
            <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={(e)=>{
                setState({...state, firstName: e.target.value});
            }}
            />
      
            <input 
            type="text"
            name='lastName'
            value={state.lastName}
            onChange={(e)=>{
                setState({...state, 'lastName': e.target.value});
            }}
            />
            <p>First Name:{state.firstName}</p>
            <p>Last Name:{state.lastName}</p>
        </div>
    )
}
