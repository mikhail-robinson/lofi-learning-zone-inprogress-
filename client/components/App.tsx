import { Route, Routes } from 'react-router-dom'
import AudioParent from './Audio Components/AudioParent'
import StudyBot from './Study Bot/StudyBot'

function App() {
  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">
          Study Zone
        </h1>
        <Routes>
          <Route path="/" element={<AudioParent />} />
        </Routes>
        <StudyBot />
      </div>
    </main>
  )
}

export default App
