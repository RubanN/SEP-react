import React,{useState} from 'react'

export default function TodoForm({addTodo}) {
  const [value,setValue] =useState('')

  const handleChange =(e)=>{ //to handle change in form input (when user is typing)
      setValue(e.target.value) //e.target gives the value of current value the user is typing
  }
  const handleSubmit =(e)=>{
      e.preventDefault()  //to prevent DOM from reloading the page
      if(!value){          //if user submits empty form, do nothing
        return;
        addTodo(value)
        setValue('')        //set the value to be empty again to get ready for next input
      }                     
  }
  return (
    <div className={"container"}>
    <div className="app-title text-center">Another ToDo App</div>
    <form onSubmit={handleSubmit} className={"form-group row todo-form"}>
        <input className={"form-control col-md-8 "} type={"text"} placeholder={"Add a ToDo"} value={value} onChange={handleChange}/>
        <input className={"form-control btn-primary col-md-4 submit-button"} type={"submit"} value={"Add"}/>
    </form>
</div>
    )
}
