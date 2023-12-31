import SongList from '@/components/songList/SongList'
import SongDetails from '@/components/songList/songDetails/SongDetails'
import { SongProvider } from '@/context/SongContext'
import Header from '@/components/Header/Header'
import './home.css'

const Home = () => {
  return (
    <SongProvider>
      <Header />
      <div className='home-container'>
        <div className='izquierdo'>
          <h2>Song List</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <SongDetails />
        </div>
      </div>
    </SongProvider>
  )
}

export default Home
