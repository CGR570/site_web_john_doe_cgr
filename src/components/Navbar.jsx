import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">John Doe</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink to="/" className="nav-link">Accueil</NavLink></li>
            <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
            <li className="nav-item"><NavLink to="/galerie" className="nav-link">Réalisations</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            <li className="nav-item"><NavLink to="/mentions" className="nav-link">Mentions</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
