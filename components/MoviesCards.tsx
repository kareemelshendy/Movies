import React from "react"
import { Movies } from "../models"

import Link from "next/link"

export const MoviesCards = ({ movie }: { movie: Movies }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 ">
      <Link href={`/movies/${movie.id}`}>
        <a className="card-link">
          <div className="card">
            <div className="card-img-top">
              <img  src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="Card image cap" />
            </div>
            {/* <Image className="card-img-top" src='https://image.tmdb.org/t/p/w400/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg' alt={movie.title} width="200px" height="200px" /> */}
            <div className="card-body">
              <h6 className="card-title">{movie.title}</h6>
              <p className="card-text"> rating {movie.vote_average}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
