import Head from "next/head"
import { useMovies } from "../../hooks/index"
import { GetServerSideProps, GetServerSidePropsResult, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from "next"
import { Page, Parmas } from "../../models"
import { MoviesCards } from "../../components/MoviesCards"
import { useState } from "react"
import { Router, useRouter } from "next/router"

import Link from "next/link"
import MoviesHOC from "../../higherOrderComponents/movies-hoc"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${!query.page ? 1 : query.page}`)
  const data: Page = await res.json()
  return {
    props: {
      intialData: data,
    },
  }
}
const Movies = ({ intialData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const page: string = router.query?.page as string
  const [pageIndex, setPageIndex] = useState(+page || 1)

  return (
    <>
      <Head>
        <title>Movies</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Head>
      <div>
        <h2 className="text-center mt-3">Populer Movies</h2>
        <MoviesHOC pageIndex={page} intialPage={intialData} />
      </div>
      <div>
        <nav aria-label="Page navigation ">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${!pageIndex || +pageIndex === 1 ? "disabled" : ""} mr-2`}>
              <Link href={`/movies?page=${pageIndex ? +pageIndex - 1 : 1}`}>
                <a
                  onClick={() => {
                    setPageIndex(+pageIndex - 1)
                    window.scroll(0, 0)
                  }}
                  className="page-link"
                >
                  Previous
                </a>
              </Link>
            </li>
            <li className={`page-item ${pageIndex && +pageIndex === 500 ? "disabled" : ""}`}>
              <Link href={`/movies?page=${pageIndex ? +pageIndex + 1 : 2} `}>
                <a
                  onClick={() => {
                    setPageIndex(+pageIndex + 1)
                    window.scroll(0, 0)
                  }}
                  className="page-link"
                >
                  Next
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Movies
