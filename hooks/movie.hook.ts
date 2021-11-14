import useSWR from "swr"
import { Movie } from "../models"
import { fetcher } from "../api/fetcher"

export const useMovie = (id: string) => {
    const { data, error } = useSWR<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US`)
    return {
      movie: data,
      isLoading: !data && !error,
      isError: error,
    }
  }
  