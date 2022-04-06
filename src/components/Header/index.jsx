import './index.scss';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="/">
          <img className="image-logo" src={Logo} alt="logo" />
        </a>
      </nav>

      <p className="text-logo">Weather Box</p>
    </header>
  );
};

export default Header;
