import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JerryWifHat Bot</h1>
      <div className="card">
        <img src="assets/img/jerry256-trans.png" alt="logo" 
          onClick={() => setCount((count) => count + 1)}
          className='cursor-pointer'
        />
        <figure className="bg-slate-500">
          <h2 className="bg-slate-600">Earn {count}</h2>
        </figure>
      </div>
      <p className="read-the-docs">
        Powered by Tom and Jerry Company
      </p>
    </>
  )
}

export default App
