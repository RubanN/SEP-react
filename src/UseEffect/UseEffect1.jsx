import React,{useState,useEffect} from 'react'


const serviceA ={
    subscribe: () => Promise.resolve('subscribed'),
    unsubscribe: () => Promise.resolve('unsubscribe')

}
export default function UseEffect1() {
    const [name,setName] = useState("ruban");
    const [age,setAge] = useState(28);
    const [renderCount,setRenderCount] = useState(0)
    useEffect(()=>{
        serviceA.subscribe().then(a=>{
            console.log(a);
                  // code after subscription

        });
        return()=>{
            serviceA.unsubscribe().then(a=>{
                // console.log(a);
        // clean up operations 

            })
        }
    },[])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <h1> Name : {name} </h1>
      <h1> Age : {age} </h1>
      <p> Render Count : {renderCount} </p> 
        </div>
    )
}
