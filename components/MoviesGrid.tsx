import { Movie, Page } from "../models"
import { MoviesCards } from "./MoviesCards"

export const MoviesGrid = (props:any) => {
  if (props.isLoading) {
    return (
      <div className="conteiner">
        <div className="row">
          <h1> Loading....</h1>
        </div>
      </div>
    )
  }
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row text-center">
        {props.movies?.map((movie: Movie) => {
          return <MoviesCards key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  )
}
