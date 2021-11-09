import useSWR from "swr"
import { Page } from "../models"

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
