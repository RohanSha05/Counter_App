import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementer = () =>{
    const newCount = count + 1
    setCount(newCount)
  }
  const decrementer = () =>{
    const newCount = count - 1 
    setCount(newCount)
  }

  const reseter = () =>{
    setCount(0)
  }

  return (
    <>
      <div className="card bg-slate-600 text-white w-96 shadow-xl mx-auto my-auto">
  <figure className="px-8 pt-8">
    <h1 className='text-7xl'>{count}</h1>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl">Counter App</h2>
    <p>Simple State Management</p>
    <div className="card-actions">
      <button onClick={incrementer} className="btn btn-success">Increment</button>
      <button onClick={decrementer} className="btn btn-info">Decrement</button>
    </div>
  </div>
  <button onClick={reseter} className="btn btn-sm btn-warning">Reset</button>
</div>
    </>
  )
}

export default App
