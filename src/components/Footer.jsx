function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Colonne 1 */}
          <div className="col-md-4 mb-4">
            <h5>John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-1">john.doe@gmail.com</p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3 gap-3">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-light fs-5 icon-link"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-light fs-5 icon-link"
              >
                <i className="bi bi-twitter"></i>

              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-light fs-5 icon-link"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
/>

            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-md-4 mb-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Accueil</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/realisations" className="text-light text-decoration-none">Portfolio</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Me contacter</a></li>
              <li><a href="/mentions" className="text-light text-decoration-none">Mentions légales</a></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-4 mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/realisations" className="text-light text-decoration-none">Fresh Food</a></li>
              <li><a href="/realisations" className="text-light text-decoration-none">Restaurant Akira</a></li>
              <li><a href="/realisations" className="text-light text-decoration-none">Espace bien-être</a></li>
              <li><a href="/realisations" className="text-light text-decoration-none">SEO</a></li>
              <li><a href="/realisations" className="text-light text-decoration-none">Création d’une API</a></li>
              <li><a href="/realisations" className="text-light text-decoration-none">Maquette d’un site</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



