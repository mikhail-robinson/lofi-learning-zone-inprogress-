import React, { useState, useEffect, useRef } from 'react'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import YouTube from 'react-youtube'

// const youtubeAPIKey = process.env.REACT_APP_YOUTUBE_API_KEY

function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const playlistId = 'PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo' // Replace with the ID of your YouTube playlist
  const [currentSong, setCurrentSong] = useState('')
  const playerRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      fetchSongTitle()
    }
  }, [isPlaying])

  async function fetchSongTitle() {
    try {
      const videoId =
        playerRef.current.getPlaylist()[playerRef.current.getPlaylistIndex()]

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyD9BrjHAaK853mZhyQC66pnXcL9XUm-fns`,
      )
      const data = await response.json()
      console.log('THis is the API data', data)

      const title = data.items[0].snippet.title
      setCurrentSong(title)
    } catch (error) {
      console.log('Error fetching song information:', error)
    }
  }

  function handleMusicPlaylist() {
    setIsPlaying((prevState) => !prevState)
    setCurrentSong('')
  }

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      listType: 'playlist',
      list: playlistId,
      controls: 0,
      showinfo: 0,
      iv_load_policy: 3,
    },
  }

  return (
    <>
      {isPlaying ? (
        <>
          <YouTube
            opts={opts}
            className="youtube-player"
            onPlay={fetchSongTitle}
            onReady={(event) => (playerRef.current = event.target)}
          />
          <button onClick={handleMusicPlaylist}>
            <AiFillPauseCircle />
          </button>
        </>
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
