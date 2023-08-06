import React, { useState, useEffect, useRef } from 'react'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import YouTube from 'react-youtube'
import YOUTUBE_API_KEY from './config'

const PLAYLIST_ID = 'PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo'
const YOUTUBE_API_URL =
  'https://www.googleapis.com/youtube/v3/videos?part=snippet'
// const LIVE_ATC_URL =
//   'https://www.liveatc.net/hlisten.php?mount=kpoc2_klax_app_east_feeder&icao=klax'

const playerVars = {
  autoplay: 0,
  listType: 'playlist',
  list: PLAYLIST_ID,
  controls: 0,
  showinfo: 0,
  iv_load_policy: 3,
}

interface Player {
  getPlaylist: () => string[]
  getPlaylistIndex: () => number
  pauseVideo: () => void
  playVideo: () => void
}

function getYoutubeApiUrl(videoId: string) {
  return `${YOUTUBE_API_URL}&id=${videoId}&key=${YOUTUBE_API_KEY}`
}

function PlayButton() {
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
        playerRef.current?.getPlaylist()[playerRef.current?.getPlaylistIndex()]

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

  function handleMusicPlaylist() {
    //controls the pause/play functionality of the youtube player
    setIsPlaying((prevState) => !prevState)
    setCurrentSong('')
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo()
        // atcAudioRef.current.pause()
      } else {
        playerRef.current.playVideo()
        // atcAudioRef.current.play()
      }
    }
  }

  const opts = {
    height: '0',
    width: '0',
    playerVars,
  }

  return (
    <>
      <YouTube
        opts={opts} //hides the video from Youtube
        className="youtube-player"
        onPlay={fetchSongTitle}
        onReady={(event) => {
          playerRef.current = event.target
        }}
      />
      {isLoading && <p>Loading...</p>}
      {isPlaying ? (
        <button onClick={handleMusicPlaylist}>
          <AiFillPauseCircle />
        </button>
      ) : (
        <button onClick={handleMusicPlaylist}>
          <AiFillPlayCircle />
        </button>
      )}
      {currentSong && <p>Current Song: {currentSong}</p>}
    </>
  )
}

export default PlayButton
