import { Route, Routes } from 'react-router-dom'
import AudioParent from './Audio Components/AudioParent'

function App() {
  return (
    <div>
      <h1>Cosy Zone</h1>
      <Routes>
        <Route path="/" element={<AudioParent />} />
      </Routes>
    </div>
  )
}

export default App
