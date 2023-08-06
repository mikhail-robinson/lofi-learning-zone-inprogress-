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
    <button onClick={handleMusicPlaylist}>
      {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
    </button>
  )
}

export default PlayPauseButton
