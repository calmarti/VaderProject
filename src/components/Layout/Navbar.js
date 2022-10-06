export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="hover-effect">
          <a href="#bio">Home</a>
          </li>
          <li className="hover-effect">
            <a href="#articulos">Bio</a>
          </li>
          <li className="hover-effect">
            <a href="#articulos">Artículos</a>
          </li>
          <li className="hover-effect">
            <a href="#libros">Libros</a>
          </li>
          <li className="hover-effect">
          <a href="#teatro">Teatro</a>
          </li>
          <li className="hover-effect">
          <a href="#teatro">Entrevistas</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
