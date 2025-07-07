import { Helmet } from 'react-helmet';

function Services() {
  return (
    <>
    <Helmet>
  <title>Services – John Doe</title>
  <meta
    name="description"
    content="Développement web, UX Design et SEO : découvrez les services proposés par John Doe, développeur web full stack à Lyon."
  />
</Helmet>

    <img src="/images/banner.jpg" alt="Bannière services" />
      {/* Titre */}
      <section className="container text-center my-5">
  <h1
    className="text-dark d-inline-block"
    style={{
      fontFamily: '"Nunito Sans", sans-serif',
      fontWeight: 600
    }}
  >
    Mon offre de services
    <span
      className="d-block mx-auto border-bottom border-3 border-primary mt-2"
      style={{ width: '100%' }}
    ></span>
  </h1>
  <p className="lead mt-3">Voici les prestations sur lesquelles je peux intervenir.</p>
</section>



      {/* Blocs de services */}
      <section className="container mb-5">
        <div className="row text-center">
          {/* UX Design */}
          <div className="col-md-4 mb-4">
            <div className="mb-2">
              <i className="bi bi-brush text-primary fs-1"></i>
            </div>
            <h4>UX Design</h4>
            <p>
              L'UX Design consiste à concevoir des produits en plaçant l'utilisateur au centre des préoccupations. Objectif : une expérience fluide et agréable.
            </p>
          </div>

          {/* Développement Web */}
          <div className="col-md-4 mb-4">
            <div className="mb-2">
              <i className="bi bi-code-slash text-primary fs-1"></i>
            </div>
            <h4>Développement web</h4>
            <p>
              Création de sites internet performants avec HTML, CSS, JavaScript, PHP ou des frameworks comme React, Bootstrap ou Angular.
            </p>
          </div>

          {/* Référencement */}
          <div className="col-md-4 mb-4">
            <div className="mb-2">
              <i className="bi bi-search text-primary fs-1"></i>
            </div>
           <h4>Référencement</h4>
            <p>
              Optimisation SEO pour améliorer le positionnement du site sur les moteurs de recherche et attirer plus de visiteurs qualifiés.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

