import useSWR from "swr"
import { Page } from "../models"

export const useMovies = (pageIndex: string, fallbackData: Page) => {
  const { data, error } = useSWR<Page>(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${pageIndex}`, { fallbackData })

  return {
    movies: data,
    isLoading: !data && !error,
    isError: error,
  }
}
