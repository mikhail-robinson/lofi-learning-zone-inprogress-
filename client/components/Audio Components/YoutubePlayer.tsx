import YouTube from 'react-youtube'
import { Player } from './AudioParent'

const PLAYLIST_ID = 'PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo'

const playerVars = {
  autoplay: 0,
  listType: 'playlist',
  list: PLAYLIST_ID,
  controls: 0,
  showinfo: 0,
  iv_load_policy: 3,
}

interface YouTubePlayerProps {
  onReady: (event: { target: Player }) => void
}

function YouTubePlayer({ onReady }: YouTubePlayerProps) {
  const opts = {
    height: '0',
    width: '0',
    playerVars,
  }

  return <YouTube opts={opts} className="youtube-player" onReady={onReady} />
}

export default YouTubePlayer
