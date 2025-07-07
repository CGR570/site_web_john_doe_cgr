import { Helmet } from 'react-helmet';

function Realisations() {
  const projets = [
    {
      titre: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne.',
      tech: 'Site réalisé avec PHP & MySQL',
      image: '/images/fresh-food.jpg',
      lien: '#'
    },
    {
      titre: 'Restaurant Akira',
      description: 'Site vitrine pour un restaurant japonais moderne.',
      tech: 'Site réalisé avec WordPress',
      image: '/images/restaurant-japonais.jpg',
      lien: '#'
    },
    {
      titre: 'Espace Bien-Être',
      description: 'Site de soins et relaxation avec prise de rendez-vous.',
      tech: 'Site réalisé avec Laravel',
      image: '/images/espace-bien-etre.jpg',
      lien: '#'
    },
    {
      titre: 'SEO',
      description: "Amélioration du référencement d'un site e-commerce",
      tech: 'Utilisation des outils SEO',
      image: '/images/seo.jpg',
      lien: '#'
    },
    {
      titre: "Création d'une API",
      description: "Création d'une API RESTFULL publique.",
      tech: 'PHP + Symfony',
      image: '/images/coder.jpg',
      lien: '#'
    },
    {
      titre: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      tech: 'Réalisé avec Figma',
      image: '/images/screens.jpg',
      lien: '#'
    }
  ];

  return (
    <>
     <Helmet>
      <title>Réalisations – John Doe</title>
      <meta
        name="description"
        content="Découvrez une sélection de projets réalisés par John Doe, développeur web full stack. Sites vitrines, applications interactives et plus encore."
      />
    </Helmet>
    <section className="container-fluid px-0">
      {/* Bannière */}
      <img
        src="/images/banner.jpg"
        alt="Bannière"
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block'
        }}
      />

      {/* Titre + description + ligne décorative */}
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-2">Portfolio</h1>
        <p className="text-center text-muted mb-3">
          Voici quelques-unes de mes réalisations
        </p>
        <div
          style={{
            width: '33%',
            height: '4px',
            backgroundColor: '#0d6efd',
            margin: '0 auto 2rem',
            borderRadius: '4px'
          }}
        ></div>

        {/* Grille des projets */}
        <div className="row g-4">
          {projets.map((projet, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm text-center">
                <img
                  src={projet.image}
                  alt={`Aperçu du projet ${projet.titre}`}
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold">{projet.titre}</h5>
                  <p className="card-text">{projet.description}</p>

                  <a
                    href={projet.lien}
                    className="btn btn-sm btn-primary mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir le site
                  </a>

                  <div
                    className="mt-3 px-3 py-2"
                    style={{
                      backgroundColor: '#f5f5f5',
                      borderRadius: '4px',
                      fontSize: '0.875rem',
                      color: '#333'
                    }}
                  >
                    {projet.tech}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Realisations;
