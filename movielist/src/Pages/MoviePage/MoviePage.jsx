import './moviePage.scss';
import rating from '../../assets/img/star.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const [getMovie, setGetMovie] = useState([]);
  const { movieId } = useParams();
  const movieImg = getMovie?.poster_path;
  const ratingBottom = Number(getMovie.vote_average).toFixed(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGetMovie(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [movieId]);

  //   console.log(getMovie.backdrop_path);

  return (
    <div className="container">
      <div className="details-header">
        <div className="banner">
          <img
            src={'https://image.tmdb.org/t/p/w500/' + movieImg}
            alt={getMovie.original_title}
          />
        </div>
        <div className="header-title-container">
          <h1 className="title">{getMovie.original_title}</h1>
          <div className="bredcrumb-container">
            Genres:{' '}
            {getMovie?.genres?.map((item) => {
              return (
                <p className="genre-text" key={item.id}>
                  {item.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className="details-wrapper">
        <div className="details-container">
          <div className="tagline-container detail">
            <h2 className="tagline">Overview</h2>
          </div>
          <div className="description-container">
            <p className="lable">{getMovie.overview}</p>
          </div>
          <div className="rating detail">
            <img src={rating} alt="" />
            <p className="rating-text">{ratingBottom}</p>
          </div>

          <div className="dates detail">
            <p className="label">Release date:</p>
            <p className="large">{getMovie.release_date}</p>
          </div>
          <div className="run-time detail">
            <p className="label">Run time:</p>
            <p className="large">{getMovie.runtime} minutes</p>
          </div>
          <div className="original-language detail">
            <p className="label">Original language:</p>
            <p className="large">{getMovie.original_language}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
