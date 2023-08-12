import { useSongContext } from '@/hooks/UseSongContext'

const SongDetails = () => {
  const { selectedSong } = useSongContext()
  return (
    <>
      {selectedSong.title
        ? <div>
          <img src={selectedSong.img_url} alt={selectedSong.title} />
          <h2>{selectedSong.title}</h2>
          <p>{selectedSong.artist}</p>
          <p>{selectedSong.year}</p>
        </div>
        : <h1>Selececciona una cancion</h1>}

    </>
  )
}

export default SongDetails
