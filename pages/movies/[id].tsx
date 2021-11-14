import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import CardDetails from "../../components/CardDetails"
import styles from "../../styles/Card.module.css"
import { useRouter } from "next/router"
import { useMovie } from "../../hooks"
import { Parmas } from "../../models/params"

// export const getStaticPaths = async () => {
//   const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=1")
//   const data: Page = await res.json()
//   const results = data.results
//   const paths = results.map((movie) => {
//     return {
//       params: { id: movie.id.toString() },
//     }
//   })
//   return {
//     paths,
//     fallback: true,
//   }
// // }
// export const getStaticProps: GetStaticProps = async (context) => {
//   const params = context.params as Parmas
//   const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US`)
//   const data: Movies = await res.json()

//   if (!data.id) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: {
//       movie: data,
//     },
//   }
// }

function MovieDetails() {
  const router = useRouter()
  const { id } = router.query
  const { movie, isLoading, isError } = useMovie(id as string)
  if (isError) {
    return <p>nofound</p>
  }
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
        <title>Movies|{movie?.title}</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Head>
      <div className="container-fluid">
        <div className="row mt-5 mb-2">
          <div className="col-md-12">
            <CardDetails movie={movie} />
            <div className={`${styles.movie_btn} mt-5`}>
              <Link href="/movies">
                <a className="btn btn-danger">Back to Movies</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetails
