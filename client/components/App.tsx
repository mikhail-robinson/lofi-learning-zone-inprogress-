import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchFruits } from '../slices/fruits'
import Play from './Play'

function App() {
  const fruits = useAppSelector((state) => state.fruits)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="app">
        <h1>Cosy Zone</h1>
        <Play />
      </div>
    </>
  )
}

export default App
