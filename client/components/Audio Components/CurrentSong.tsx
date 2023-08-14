interface CurrentSongProps {
  currentSong: string
}

function CurrentSong({ currentSong }: CurrentSongProps) {
  return (
    currentSong && <p className="text-white">Current Song: {currentSong}</p>
  )
}

export default CurrentSong
