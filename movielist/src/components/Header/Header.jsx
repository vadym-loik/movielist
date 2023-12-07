import './header.scss';
import logo from '../../assets/img/logo.png';
import Input from '../Input/Input';

const Header = () => {
  return (
    <>
      <nav className="container">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
      </nav>

      <div className="wrap container">
        <h1>MovieList</h1>
        <Input />
      </div>
    </>
  );
};

export default Header;
