interface CurrentSongProps {
  currentSong: string
}

function CurrentSong({ currentSong }: CurrentSongProps) {
  return (
    // conditional render to ensure content is only shown if there is something to be shown
    currentSong && <p className="text-white">Current Song: {currentSong}</p>
  )
}

export default CurrentSong
