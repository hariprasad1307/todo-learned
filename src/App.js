import React from 'react'
import {useState} from 'react'
import Forms from './components/forms';
import ListTodo from './components/listTodo';

const App = () => {
  const [todo,setTodo]=useState([]);
  
  const fixTodo=(data)=>{
    setTodo(data);
    console.log(todo)
    
  }
  return (
    <div>
      <h1>WELCOME TO TODO LIST</h1>
      <Forms sendData={fixTodo} todos={todo} />
      <ListTodo sendData={fixTodo} todos={todo} />
    </div>
  )
}

export default App
