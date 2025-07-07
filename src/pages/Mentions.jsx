import { Helmet } from 'react-helmet';


function Mentions() {
  return (
    <section className="container py-5">
      <Helmet>
  <meta name="robots" content="noindex" />
  <title>Mentions légales</title>
</Helmet>

      <h1 className="text-center fw-bold mb-4">Mentions légales</h1>

      <div className="accordion" id="accordionMentions">

        <div className="accordion-item">
  <h2 className="accordion-header" id="headingEditeur">
    <button
      className="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseEditeur"
      aria-expanded="true"
      aria-controls="collapseEditeur"
    >
      Éditeur du site
    </button>
  </h2>
  <div
    id="collapseEditeur"
    className="accordion-collapse collapse show"
    aria-labelledby="headingEditeur"
    data-bs-parent="#accordionMentions"
  >
    <div className="accordion-body bg-white text-dark rounded-3 p-4">
  <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>John Doe</h1>

  <ul className="list-unstyled mt-3">
    <li className="mb-2">
      <i className="bi bi-map me-2" style={{ color: '#000' }}></i>
      40 rue Laure Diebold
    </li>
    <li className="mb-2">
      <i className="bi bi-geo-alt me-2" style={{ color: '#000' }}></i>
      69009 Lyon, France
    </li>
    <li className="mb-2">
      <i className="bi bi-telephone me-2" style={{ color: '#000' }}></i>
      10 20 30 40 50
    </li>
    <li>
      <i className="bi bi-envelope me-2" style={{ color: '#000' }}></i>
      john.doe@gmail.com
    </li>
  </ul>
</div>
</div>
</div>
        {/* Hébergeur */}
        <div className="accordion-item">
  <h2 className="accordion-header" id="headingHebergeur">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseHebergeur"
      aria-expanded="false"
      aria-controls="collapseHebergeur"
    >
      Hébergeur
    </button>
  </h2>
  <div
    id="collapseHebergeur"
    className="accordion-collapse collapse"
    aria-labelledby="headingHebergeur"
    data-bs-parent="#accordionMentions"
  >
    <div className="accordion-body p-4">
      <h1
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily: "'Nunito Sans', sans-serif"
        }}
      >
        alwaysdata
      </h1>

      <p className="mb-2">91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>

      <p className="mb-0">
        <i className="bi bi-globe me-2" style={{ color: '#000' }}></i>
        <a
          href="https://www.alwaysdata.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#000',
            textDecoration: 'underline'
          }}
        >
          www.alwaysdata.com
        </a>
      </p>
    </div>
  </div>
</div>
      {/* Crédits */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingCredits">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseCredits"
      aria-expanded="false"
      aria-controls="collapseCredits"
    >
      Crédits
    </button>
  </h2>
  <div
    id="collapseCredits"
    className="accordion-collapse collapse"
    aria-labelledby="headingCredits"
    data-bs-parent="#accordionMentions"
  >
    <div className="accordion-body p-4">
      <h1
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily: "'Nunito Sans', sans-serif"
        }}
      >
        Crédits
      </h1>

      <p className="mb-2">
        Ce site a été réalisé par John Doe, étudiant au
        <a
          href="https://www.centre-europeen-formation.fr"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0d6efd', textDecoration: 'underline' }}
        >
          Centre Européen de Formation.
        </a>
      </p>

      <p className="mb-2" style={{ fontStyle: 'italic' }}>
        Les images utilisées sur ce site sont libres de droit et ont été obtenues sur le site de&nbsp;
        <a
          href="https://pixabay.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0d6efd', textDecoration: 'underline' }}
        >
          Pixabay
        </a>.
      </p>

      <p style={{ fontStyle: 'italic' }}>
        La favicon de ce site a été fournie par&nbsp;
        <a
          href="https://www.flaticon.com/free-icons/web"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0d6efd', textDecoration: 'underline' }}
        >
          John Doe Icons erstellt von Freepik - Flaticon
        </a>.
      </p>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}

export default Mentions;

