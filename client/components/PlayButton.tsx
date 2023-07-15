import React from 'react'
import { useState } from 'react'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import YouTube from 'react-youtube'

function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = 'Pfr3SDHQS_c'

  function handleMusicPlaylist() {
    setIsPlaying((prevState) => !prevState)
  }

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      iv_load_policy: 3,
    },
  }

  return (
    <>
      {isPlaying ? (
        <>
          <YouTube videoId={videoId} opts={opts} />
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
