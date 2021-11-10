import useSWR from "swr"
import { Movies, Page } from "../models"

export const useMovies = (url: string, fallbackData: Page) => {
  const { data, error } = useSWR<Page>(url, async () => {
    const res = await fetch(url)
    return res.json()
  })

  return {
    movies: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export const useMovie = (url: string) => {
  const { data, error } = useSWR<Movies>(url, async () => {
    const res = await fetch(url)
    return res.json()
  })

  return {
    movie: data,
    isLoading: !data && !error,
    isError: error,
  }
}
