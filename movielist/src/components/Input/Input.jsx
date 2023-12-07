import './input.scss';
import icon from '../../assets/img/Left Icon.png';

const Input = () => {
  return (
    <>
      <div className="input-group">
        <img src={icon} alt="loop icon" className="icon" />
        <input type="text" name="search" id="search" />
        <label htmlFor="search">Search movies</label>
      </div>
    </>
  );
};

export default Input;
