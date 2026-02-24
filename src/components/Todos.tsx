import React from 'react'




import { useSelector,useDispatch } from 'react-redux'

import { removeTodo } from '../features/todo/todoslice'

const Todos = () => {
    
interface todoProp{
    id:string,
    text:string
}

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
  return (
    <div>
    {todos.map ((todo:todoProp)=>(
        <li key={todo.id}>
            {todo.text}
            <button onClick={()=>{
                dispatch(removeTodo(todo.id))
            }}>
                Remove this task!
            </button>
        </li>
    )
    )}
    </div>
  )
}

export default Todos