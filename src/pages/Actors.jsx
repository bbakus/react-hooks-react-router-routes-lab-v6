import NavBar from '../components/NavBar'

function Actors() {

  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default Actors