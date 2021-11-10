import Head from "next/head"
import { useMovies } from "../../hooks/index"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { Page } from "../../models"
import { MoviesCards } from "../../components/MoviesCards"
import { useState } from "react"

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=1")
  const data: Page = await res.json()

  return {
    props: {
      intialData: data,
    },
  }
}
const Movies = ({ intialData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [pageIndex, setPageIndex] = useState(1)
  const { movies, isLoading } = useMovies(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${pageIndex}`, intialData)
  // console.log(movies)
  if (isLoading) {
    return (
      <div className="conteiner">
        <div className="row">
          <h1> Loading....</h1>
        </div>
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>Movies</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Head>
      <div>
        <h2 className="text-center mt-3">Populer Movies</h2>
        <div className="container-fluid mt-5 mb-5">
          <div className="row text-center">
            {movies?.results.map((movie) => {
              return <MoviesCards key={movie.id} movie={movie} />
            })}
          </div>
        </div>
      </div>
      <div>
        <nav aria-label="Page navigation ">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${pageIndex === 1 ? "disabled" : ""} `}>
              <button
                onClick={() => {
                  setPageIndex(pageIndex - 1)
                  window.scroll(0, 0)
                }}
                className="page-link"
              >
                Previous
              </button>
            </li>
            {/* {movies?.results.map((item, index) => {
              return (
                <li key={item.id} className={`page-item ${pageIndex === index + 1 ? "active" : ""}`}>
                  <button
                    onClick={() => {
                      setPageIndex(index + 1)
                      window.scroll(0, 0)
                    }}
                    className="page-link"
                  >
                    {index + 1}
                  </button>
                </li>
              )
            })} */}
            <li className={`page-item `}>
              <button className="page-link">{pageIndex}</button>
            </li>
            <li className={`page-item ${pageIndex === 500 ? "disabled" : ""}`}>
              <button
                onClick={() => {
                  setPageIndex(pageIndex + 1)
                  window.scroll(0, 0)
                }}
                className="page-link"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Movies
