import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'

interface PlayPauseButtonProps {
  isPlaying: boolean
  togglePlayPause: () => void
}

function PlayPauseButton({ isPlaying, togglePlayPause }: PlayPauseButtonProps) {
  return (
    <button
      className="text-6xl text-white"
      onClick={togglePlayPause}
      aria-label={isPlaying ? 'Pause' : 'Play'}
    >
      {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
    </button>
  )
}

export default PlayPauseButton
