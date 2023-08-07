import { Route, Routes } from 'react-router-dom'
import AudioParent from './Audio Components/AudioParent'

function App() {
  return (
    <>
      <h1>Cosy Zone</h1>
      <Routes>
        <Route path="/" element={<AudioParent />} />
      </Routes>
    </>
  )
}
console.log('app component rendered')

export default App
