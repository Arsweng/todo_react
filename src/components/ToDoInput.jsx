import React, { useState } from 'react'

export default function ToDoInput({ handAddTodos,todoValue,setTodoValue }) {
  return (
      <header>
          <input type="text" placeholder='Enter to do ....' value={todoValue} onChange={e=>setTodoValue(e.target.value)}/>
          <button onClick={()=>handAddTodos(todoValue)}>add</button>
    </header>
  )
}
