import Header from './Header'
import useNowPlayingMovies from './customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from './customHooks/usePopularMovies'
import useTopRatedMovies from './customHooks/useTopRatedMovies'
import useUpComingMovies from './customHooks/useUpComingMovies'

const BrowsePage = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default BrowsePage;