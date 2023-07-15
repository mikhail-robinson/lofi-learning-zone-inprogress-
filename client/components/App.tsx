import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchFruits } from '../slices/fruits'
import PlayButton from './PlayButton'

function App() {
  const fruits = useAppSelector((state) => state.fruits)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="app">
        <h1>Cosy Zone</h1>
        <PlayButton />
      </div>
    </>
  )
}

export default App
