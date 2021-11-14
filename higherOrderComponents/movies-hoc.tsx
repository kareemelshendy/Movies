import { MoviesGrid } from "../components/MoviesGrid"
import { useMovies } from "../hooks"
import { Page } from "../models"

export const MoviesHOC = (props:any) => {
  const { movies, isLoading, isError } = useMovies(props.pageIndex, props.intialPage)

  return <MoviesGrid isLoading={isLoading} movies={movies?.results} />
}

export default MoviesHOC
