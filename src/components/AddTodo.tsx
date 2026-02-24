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
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
    <input type="text" className='bg-gray-800 rounded border border-gray-700 text-base outline-none py-1 px-3' value={input} onChange={(e)=>setInput(e.target.value)}/>
    </form>
    </>
  )
}

export default AddTodo