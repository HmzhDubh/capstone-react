import logo from './Logo.png';
function Header() {

  return (
    <header>
      <img src={logo}></img>
      <nav>
        <ul>

          <li>
            <a>Home</a>
          </li>

          <li>

            <a>About</a>
          </li>
          <li>

            <a>Menu</a>
          </li>
          <li>

            <a>Resevations</a>
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