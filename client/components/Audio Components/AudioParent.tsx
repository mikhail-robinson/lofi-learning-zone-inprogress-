import { useState, useEffect, useRef } from 'react'
import YOUTUBE_API_KEY from '../config'
import YouTubePlayer from './YoutubePlayer'
import Loading from './Loading'
import PlayPauseButton from './PlayPauseButton'
import CurrentSong from './CurrentSong'

const YOUTUBE_API_URL =
  'https://www.googleapis.com/youtube/v3/videos?part=snippet'
// const LIVE_ATC_URL =
//   'https://www.liveatc.net/hlisten.php?mount=kpoc2_klax_app_east_feeder&icao=klax'

export interface Player {
  getPlaylist: () => string[]
  getPlaylistIndex: () => number
  pauseVideo: () => void
  playVideo: () => void
}

function getYoutubeApiUrl(videoId: string) {
  return `${YOUTUBE_API_URL}&id=${videoId}&key=${YOUTUBE_API_KEY}`
}

function AudioParent() {
  const [isPlaying, setIsPlaying] = useState(false) //indicates if the music is playing
  const [currentSong, setCurrentSong] = useState('') //stores the current song
  const [isLoading, setIsLoading] = useState(false) //inidicates if the app is loading or not
  const playerRef = useRef<Player | null>(null)
  // const atcAudioRef = useRef(new Audio(LIVE_ATC_URL))

  useEffect(() => {
    //fetch the song title whenever the isPlaying state changes
    if (isPlaying) {
      fetchSongTitle()
    }
  }, [isPlaying])

  async function fetchSongTitle() {
    //fetches the song title from the youtube API
    try {
      setIsLoading(true)
      const videoId =
        playerRef.current?.getPlaylist()[playerRef.current?.getPlaylistIndex()] //gets the index number of the current playlist as the videoid

      if (videoId) {
        const response = await fetch(getYoutubeApiUrl(videoId))
        const data = await response.json()

        if (data.items && data.items.length > 0) {
          const title = data.items[0].snippet.title
          setCurrentSong(title)
        }
      }

      setIsLoading(false)
    } catch (error) {
      console.log('Error fetching song information:', error)
      setIsLoading(false)
    }
  }

  function togglePlayPause() {
    //controls the pause/play functionality of the youtube player
    setIsPlaying((prevState) => !prevState) //ensures that the state is updated based on the most recent value
    setCurrentSong('')
    if (playerRef.current) {
      //checks if playerRef.current exists indicating the youtube player is ready
      if (isPlaying) {
        playerRef.current.pauseVideo()
        // atcAudioRef.current.pause()
      } else {
        playerRef.current.playVideo()
        // atcAudioRef.current.play()
      }
    }
  }

  const handlePlayerReady = (event: { target: Player | null }) => {
    // ensures that the component knows when the youtube player is ready to play the audio
    playerRef.current = event.target
  }

  return (
    <div className="bg-gray-900 shadow-lg rounded p-3 w-1/5 relative h-36">
      <YouTubePlayer onReady={handlePlayerReady} />
      <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-3/4 bg-black rounded bg-opacity-0 flex flex-col items-center justify-center">
        <Loading isLoading={isLoading} />
        <PlayPauseButton
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
        />
        <CurrentSong currentSong={currentSong} />
      </div>
    </div>
  )
}

export default AudioParent
