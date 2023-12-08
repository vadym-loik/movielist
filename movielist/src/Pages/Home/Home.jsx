import './home.scss';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import { useState, useEffect } from 'react';

const Home = () => {
  const [stateInCinema, setStateInCinema] = useState();
  const [statePopular, setStatePopular] = useState();

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1',
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setStateInCinema(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1',
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setStatePopular(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // console.log('my state', stateFilms);

  const renderInTheCinema = () => {
    return stateInCinema?.slice(0, 10).map((movie) => {
      return movie ? <Card {...movie} key={movie.id} /> : '';
    });
  };

  const renderPopular = () => {
    return statePopular?.slice(0, 10).map((movie) => {
      return movie ? <Card {...movie} key={movie.id} /> : '';
    });
  };

  return (
    <>
      <div className="container">
        <div className="wrap container">
          <h1>MovieList</h1>
        </div>
        <Input />
        <div className="in-cinema">
          <h2 className="home-heading">In the Cinema</h2>
          <div className="list-grid">{renderInTheCinema()}</div>
        </div>

        <div className="popular">
          <h2 className="home-heading">Popular movies</h2>
          <div className="list-grid">{renderPopular()}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
