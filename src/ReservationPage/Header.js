import { Link } from 'react-router-dom';
import logo from '../Logo.png';
function Header() {

  return (
    <header>
      <img src={logo}></img>
      <nav>
        <ul>

          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>

            <Link to='/#about'>About</Link>
          </li>
          <li>

            <a>Menu</a>
          </li>
          <li>

            <Link to="/booking">Resevations</Link>
          </li>
          <li>

            <a>Login</a>
          </li>
        </ul>

      </nav>
    </header>
  )
}
export default Header;