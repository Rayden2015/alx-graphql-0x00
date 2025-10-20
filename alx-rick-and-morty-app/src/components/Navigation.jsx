import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🛸</span>
          Rick & Morty
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className={isActive('/') && location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/characters" className={isActive('/characters') ? 'nav-link active' : 'nav-link'}>
              Characters
            </Link>
          </li>
          <li>
            <Link to="/episodes" className={isActive('/episodes') ? 'nav-link active' : 'nav-link'}>
              Episodes
            </Link>
          </li>
          <li>
            <Link to="/locations" className={isActive('/locations') ? 'nav-link active' : 'nav-link'}>
              Locations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

