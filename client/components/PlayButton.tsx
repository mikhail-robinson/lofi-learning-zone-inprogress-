import React, { useState, useEffect, useRef } from 'react'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import YouTube from 'react-youtube'
import YOUTUBE_API_KEY from './config'

const PLAYLIST_ID = 'PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo'
const YOUTUBE_API_URL =
  'https://www.googleapis.com/youtube/v3/videos?part=snippet'

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
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const playerRef = useRef<Player | null>(null)

  useEffect(() => {
    if (isPlaying) {
      fetchSongTitle()
    }
  }, [isPlaying])

  async function fetchSongTitle() {
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
    setIsPlaying((prevState) => !prevState)
    setCurrentSong('')
    if (playerRef.current) {
      isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo()
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
        opts={opts}
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
