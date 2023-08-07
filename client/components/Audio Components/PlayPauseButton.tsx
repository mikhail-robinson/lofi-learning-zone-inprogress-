import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'

interface PlayPauseButtonProps {
  isPlaying: boolean
  handleMusicPlaylist: () => void
}

function PlayPauseButton({
  isPlaying,
  handleMusicPlaylist,
}: PlayPauseButtonProps) {
  return (
    <button className="text-6xl" onClick={handleMusicPlaylist}>
      {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
    </button>
  )
}

export default PlayPauseButton
