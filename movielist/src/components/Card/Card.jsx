import './card.scss';
import star from '../../assets/img/star.png';

const Card = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-content">
          <div className="card-rating">
            <img src={star} className="card-star"></img>
            <p className="card-rating__text">7.7</p>
          </div>
          <a href="" className="card-image">
            <img
              src="https://image.tmdb.org/t/p/w500/uWcMgxO3p3qwVFUxsRz1HbTzGvT.jpg"
              alt=""
            />
          </a>
          <div className="card-info">
            <a href="" className="title">
              Rush
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
