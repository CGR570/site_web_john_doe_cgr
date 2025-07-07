import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - John Doe</title>
        <meta
          name="description"
          content="Contactez John Doe, développeur web, via ce formulaire pour discuter d’un projet ou d’un entretien professionnel."
        />
      </Helmet>
    <section className="container py-5">
      <h1 className="text-center fw-bold mb-4">Contact</h1>

<p
  className="text-center mb-4"
  style={{
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: '1rem'
  }}
>
  Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
</p>


<div
  style={{
    width: '33%',
    height: '5px',
    backgroundColor: '#0d6efd',
    margin: '0 auto 2rem auto',
    borderRadius: '4px'
  }}
></div>

      <div className="row g-5">
        {/* Colonne gauche : Formulaire */}
<div className="col-md-6">
  <form>
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        id="nom"
        placeholder="Votre nom"
        required
      />
    </div>
    <div className="mb-3">
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Votre E-mail"
        required
      />
    </div>
    <div className="mb-3">
      <input
        type="tel"
        className="form-control"
        id="tel"
        placeholder="Votre téléphone"
        required
      />
    </div>
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        id="sujet"
        placeholder="Sujet"
        required
      />
    </div>
    <div className="mb-4">
      <textarea
        className="form-control"
        id="message"
        rows="5"
        placeholder="Votre message"
        required
      ></textarea>
    </div>
    <div className="text-center">
      <button type="submit" className="btn btn-primary btn-sm px-4">
        Envoyer
      </button>
    </div>
  </form>
</div>

        {/* Colonne droite : Coordonnées + carte */}
        <div className="col-md-6">
          <h5 className="fw-bold mb-3">Mes coordonnées</h5>
          <ul className="list-unstyled mb-4">
            <li><strong>Nom :</strong> John Doe</li>
            <li><strong>Adresse :</strong> 40 rue Laure Diebold, 69009 Lyon</li>
            <li><strong>Téléphone :</strong> 10 20 30 40 50</li>
            <li><strong>Email :</strong> john.doe@gmail.com</li>
          </ul>

          <div className="ratio ratio-4x3">
            <iframe
              src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
              title="Carte de localisation"
              allowFullScreen
              loading="lazy"
              style={{ borderRadius: '4px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;
