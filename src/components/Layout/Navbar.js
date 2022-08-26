export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="animated-option">
          <a href="#bio">BIO</a>
          </li>
          <li className="animated-option">
            <a href="#articulos">ARTÍCULOS</a>
          </li>
          <li className="animated-option">
            <a href="#libros">LIBROS</a>
          </li>
          <li className="animated-option">
          <a href="#teatro">TEATRO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
