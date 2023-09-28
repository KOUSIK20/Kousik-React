import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
 const [value,setValue] = useState("")
 const handleSubmit = e=> {
  e.preventDefault();
     addTodo(value);
     setValue("");
 }
    return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
          <input className='todo-input' 
        type='text' value={value}
        placeholder='what is the today task ?' onChange={(e)=> setValue(e.target.value)}></input>
        
            <button input type ='submit' className='todo-btn'>Add Task</button>

        </form>
    </div>
  )
}