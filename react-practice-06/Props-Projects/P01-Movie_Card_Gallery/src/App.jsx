import Header from './components/Header';
import MovieCard, {Greeting} from './components/MovieCard';
import movies from './data';

function App() {

  return (
    <>
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap" }}>

        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            image={movie.image}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
          />
        ))}

      </div>
      <Greeting name={"Raushan Bhai Patel"} />
    </>
  )
}

export default App
