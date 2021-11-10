import React from "react"
import { Movies } from "../models"
import styles from "../styles/Card.module.css"

function CardDetails({ movie }: { movie: Movies|undefined }) {
  return (
    <div className={`${styles.movie_card} mt-2`}>
      <img className={styles.movie_img} src={`https://image.tmdb.org/t/p/w400/${movie?.poster_path}`} alt="" />
      <div className={styles.movie_body}>
        <div>
          <div className={`${styles.movie_title} mt-4 mb-1  `}>
            <h3>{movie?.title}</h3>
          </div>
          <div className="mt-4">
            <p className={styles.movie_overview}>{movie?.overview}</p>
          </div>
        </div>
        <div className={styles.movie_release}>
          <p>Released In : {movie?.release_date}</p>
        <p className={styles.movie_reting}>rating : {movie?.vote_average}</p>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
