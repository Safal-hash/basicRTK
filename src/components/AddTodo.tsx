import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoslice'
const AddTodo = () => {

    const [input,setInput] = useState<string>("")
    const dispatch = useDispatch()
    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <>
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12 '>
    <div className='flex gap-3'>

    
    <input name="task"  className='bg-gray-800 rounded border border-gray-700 text-base outline-none py-1 px-3' value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button type='submit' className=' bg-green-400 text-sm text-black'>
        Add Tasks!
    </button>
    </div>
    </form>
    </>
  )
}

export default AddTodo