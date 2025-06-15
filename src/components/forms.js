import React from 'react'
import { useState } from 'react'
const Forms = ({sendData,todos}) => {
    const [input,setInput]=useState('');
    

    const handleclick=(e)=>{
        e.preventDefault();
        if(input.trim()!==''){
            const news =[...todos,{text:input,completed:false}];
            sendData(news);
            setInput('');
            
        }
        else{
            return;
        }
    }
  return (

    <div>
      <form onSubmit={handleclick}>
        <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='enter your task' />
        <input type='submit' value="submit" />
      </form>
    </div>
  )
}

export default Forms
