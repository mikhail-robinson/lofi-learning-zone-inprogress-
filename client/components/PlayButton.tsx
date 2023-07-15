import React from 'react'
import { useState } from 'react'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import YouTube from 'react-youtube'

function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const playlistId = 'PL0piECm5VoRHqftdO93lHC34WypyX9akH'

  function handleMusicPlaylist() {
    setIsPlaying((prevState) => !prevState)
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
          <YouTube opts={opts} />
          <button onClick={handleMusicPlaylist}>
            <AiFillPauseCircle />
          </button>
        </>
      ) : (
        <button onClick={handleMusicPlaylist}>
          <AiFillPlayCircle />
        </button>
      )}
    </>
  )
}

export default PlayButton
