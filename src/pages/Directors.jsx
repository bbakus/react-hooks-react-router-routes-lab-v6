import NavBar from '../components/NavBar'

function Directors() {

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default Directors