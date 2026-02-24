import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='text-2xl font-semibold'>
      Basic Redux <span className='text-red-400'>ToDo </span>App.
    </p>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
