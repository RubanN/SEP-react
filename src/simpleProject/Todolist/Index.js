import React,{useState} from 'react'
import TodoForm from './TodoForm';
import Todos from './Todos';
import './App.css'

export default function Index() {
    const [todos,setTodos] = useState([
        {
            id:1,
            text:"Write a new blog post",
            isCompleted:false,
        },
        {
            id:2,
            text:"pick up laundry",
            isCompleted:false,
        },
        {
            id:3,
            text:"Die",

        }
    ])
    const addTodo =(todo)=>{
        console.log("todo---------->",todo);
        setTodos([...todos,{text:todo}])
    }
    const markComplete =(index)=>{
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    }
    const editTitle = (index,title)=>{
        const newTodos = [...todos];
        newTodos[index].text = title;
        setTodos(newTodos);
    }
    return (
        <div className="parent-container">
          <div className="container top-container">
              <div className="app">
                  <div className="todoform">
                  <TodoForm 
                    addTodo={addTodo}
                  />
                  <Todos
                   todos={todos} markComplete={markComplete}
                   editTitle={editTitle}
                  />
                  </div>
              </div>
          </div>
      </div>
    )
}
