interface CurrentSongProps {
  currentSong: string
}

function CurrentSong({ currentSong }: CurrentSongProps) {
  return currentSong && <p>Current Song: {currentSong}</p>
}

export default CurrentSong
