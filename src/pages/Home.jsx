import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home