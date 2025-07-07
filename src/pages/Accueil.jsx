import { Helmet } from 'react-helmet';
import { useState } from 'react';
import GithubModal from '../components/GithubModal';

function Accueil() {
    const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Helmet>
    <title>Accueil - John Doe</title>
    <meta
      name="description"
      content="Bienvenue sur le site de John Doe, développeur web full stack formé au CEF. Création de sites modernes, performants et accessibles."
    />
  </Helmet>
      {/* Section Hero avec image de fond */}
      <header
        className="text-light text-center py-5"
        style={{
          background: "url('/images/hero-bg.jpg') center center / cover no-repeat",
          color: "white",
        }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold">
            Bonjour, je suis John Doe <br />
            Développeur web full stack
          </h1>
         <button onClick={() => setShowModal(true)} className="btn btn-danger mt-4">
  En savoir plus
        </button>
        </div>
      </header>

      {/* Section À propos + compétences */}
      <section id="apropos" className="container py-5">
        <div className="row align-items-start">
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold text-dark mb-3">À propos</h2>
            <hr className="border-3 border-primary opacity-100 w-100 mb-4" />

            <p>
              Développeur passionné, je conçois des sites modernes, performants et accessibles.
              J’accorde une importance particulière à l’expérience utilisateur et aux bonnes
              pratiques du web.
            </p>
            <p>
              Grâce à ma formation au CEF et à mes projets personnels, j’ai acquis des compétences
              en front-end et back-end.
            </p>
          </div>

          <div className="col-md-6 mb-4"><h2 className="fw-bold text-dark mb-4">Mes compétences</h2>
          <hr className="border-3 border-primary opacity-100 w-100 mb-4" />

            <div className="mb-3">
              <label>HTML5</label>
              <div className="progress">
              <div className="progress-bar bg-danger" style={{ width: '90%' }}>90%</div>

              </div>
            </div>
            <div className="mb-3">
              <label>CSS3</label>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: '80%' }}>80%</div>
              </div>
            </div>
            <div className="mb-3">
              <label>JavaScript</label>
              <div className="progress">
                <div className="progress-bar bg-warning text-dark" style={{ width: '70%' }}>70%</div>
              </div>
            </div>
            <div className="mb-3">
              <label>PHP</label>
              <div className="progress">
              <div className="progress-bar" style={{ width: '60%', backgroundColor: '#14532d' }}>60%</div>

              </div>
            </div>
            <div className="mb-3">
              <label>React</label>
              <div className="progress">
              <div className="progress-bar" style={{ width: '50%', backgroundColor: '#0d3a6d' }}>50%</div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <GithubModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default Accueil;


