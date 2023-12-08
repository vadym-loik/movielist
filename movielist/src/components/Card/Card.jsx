/* eslint-disable react/prop-types */
import './card.scss';
import star from '../../assets/img/star.png';
import { NavLink } from 'react-router-dom';

const Card = ({ id, backdrop_path, original_title, vote_average }) => {
  const rating = Number(vote_average).toFixed(1);

  return (
    <>
      <div className="card-wrapper">
        <div className="card-content">
          <div className="card-rating">
            <img src={star} className="card-star"></img>
            <p className="card-rating__text">{rating}</p>
          </div>
          <NavLink to={'/movie/' + id} className="card-image">
            <img
              src={'https://image.tmdb.org/t/p/w500/' + backdrop_path}
              alt={original_title}
            />
          </NavLink>
          <div className="card-info">
            <a href="" className="title">
              {original_title}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
