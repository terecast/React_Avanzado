import './header.css'
import { useSongContext } from '@/hooks/UseSongContext'

const Header = () => {
  const { selectedSong } = useSongContext()

  return (
    <div className='header__container'>
      {
            selectedSong.title
              ? (
                <span>Now Playing: {selectedSong.title} - {selectedSong.artist}</span>
                )
              : <h2>Selecciona una cancion</h2>
        }
    </div>
  )
}

export default Header
