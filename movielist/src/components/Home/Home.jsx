import './home.scss';
import Card from '../Card/Card';

const Main = () => {
  return (
    <div className="container">
      <h2 className="main-heading">In the Cinema</h2>

      <div className="list-grid">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
