import React,{useState} from 'react'

export const EditTodoForm = (props) => {
  const {editTodo,task}=props;
 const [value,setValue] = useState(task?.task)
 const handleSubmit = e=> {
  e.preventDefault();
     editTodo(value,task.id);
     setValue("");
 }
    return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
          <input className='todo-input' 
        type='text' value={value}
        placeholder='Update Your Task' onChange={(e)=> setValue(e.target.value)}></input>
        
            <button input type ='submit' className='todo-btn'>Update Task</button>

        </form>
    </div>
  )
}