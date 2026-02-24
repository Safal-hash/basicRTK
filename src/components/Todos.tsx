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
        <div >

    
        <li className='flex justify-between px-3 py-1 bg-black mt-2 items-center rounded-2xl ' key={todo.id}>
            <p className='text-gray-400 text-lg '>
                {todo.text}
            </p>
           
            <button className='bg-red-400 text-black' onClick={()=>{
                dispatch(removeTodo(todo.id))
            }}>
                Delete!
            </button>
        </li>
        </div>
    )
    )}
    </div>
  )
}

export default Todos