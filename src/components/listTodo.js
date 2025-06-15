import React from 'react'

const ListTodo = ({sendData,todos}) => {
    const toggleComplete=(index)=>{
        const newTasks=[...todos];
        newTasks[index].completed=!newTasks[index].completed;
        sendData(newTasks)
    }
    const deletetodo=(index)=>{
        const newTodo=todos.filter((_,i)=>i!==index);
        sendData(newTodo);
    }

  return (
    <div>
      <ul>
        {todos.map((tasks,index)=>(
            <li key={index}>
                <span onClick={()=>{toggleComplete(index)}} style={{textDecoration:tasks.completed?'line-through':'none'}}>
                    {tasks.text}</span>
                    <button onClick={()=>{deletetodo(index)}}>delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ListTodo;
