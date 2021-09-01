import React,{useState} from 'react'

export default function HandleForm() {
    const [name,setName] = useState("");
    const [interest,setInterest] = useState("");
    const [Inc,setInc] = useState(false);
    const handleData=(e)=>{
        e.preventDefault();
        console.warn("all data",name,interest,Inc)
    }
    return (
        <div>
          <h1>Hello World</h1>
          <form onSubmit={handleData}>
             <input type="text" placeholder="Enter Name"
              onChange={(e)=>setName(e.target.value)}/><br/>
             <select onChange={(e)=>setInterest(e.target.value)}>
                 <option>Marvel</option>
                 <option>DC</option>
                 </select>          
                 <br/><br/>    
                 <input type="checkbox"
                   onChange={(e)=>setInc(e.target.value)}
                 /><span>Agree with terms and conditions</span><br/><br/>
                 <button type="submit">Submit</button>
              </form>  
        </div>
    )
}
