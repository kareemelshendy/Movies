import type {NextPage } from "next"
import Link from "next/link"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movies|Home</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Head>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2 mt-5">
            <Link href="/movies">
              <a className="btn btn-danger ">Populer Movies</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
