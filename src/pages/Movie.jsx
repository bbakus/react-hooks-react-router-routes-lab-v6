import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Movie() {
  const { id } = useParams()

  const movie ={
    id: id,
    title: title,
    time: time,
    genres: genres
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  )
}

export default Movie