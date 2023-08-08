import { Route, Routes } from 'react-router-dom'
import AudioParent from './Audio Components/AudioParent'
import StudyBot from './Study Bot/StudyBot'

function App() {
  return (
    <div className='bg-gif h-screen w-screen"'>
      <h1 className=" flex items-center justify-center text-6xl">Study Zone</h1>
      <Routes>
        <Route path="/" element={<AudioParent />} />
      </Routes>
      <StudyBot />
    </div>
  )
}

export default App
