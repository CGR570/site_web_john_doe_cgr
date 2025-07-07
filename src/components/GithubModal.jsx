import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function GithubModal({ show, handleClose }) {
  const [profil, setProfil] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then(res => res.json())
      .then(data => setProfil(data))
      .catch(err => console.error('Erreur GitHub :', err));
  }, []);

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body className="bg-dark text-white py-4">
        {profil ? (
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Colonne gauche : avatar */}
              <div className="col-md-4 text-center mb-4 mb-md-0">
                <img
                  src={profil.avatar_url}
                  alt="Avatar GitHub"
                  className="rounded-circle shadow border border-light"
                  style={{ width: '160px', height: '160px', objectFit: 'cover' }}
                />
              </div>

              {/* Colonne droite : infos */}
              <div className="col-md-8">
                <h5>
                  <a
                    href={profil.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-decoration-none fw-bold"
                  >
                    <i className="bi bi-person-lines-fill me-2"></i>
                    {profil.name}
                  </a>
                </h5>

                {/* Ligne vide avec icône lieu */}
                <div className="text-secondary mb-2">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                {/* Bio */}
                <p className="small text-light mb-4">
                  <i className="bi bi-chat-text-fill text-primary me-2"></i>
                  {profil.bio}
                </p>

                {/* Stats GitHub */}
                <div className="d-flex flex-column gap-2 small">
                  <div>
                    <i className="bi bi-box-fill text-primary me-2"></i>
                    <strong>Repositories :</strong> {profil.public_repos}
                  </div>
                  <div>
                    <i className="bi bi-people-fill text-primary me-2"></i>
                    <strong>Followers :</strong> {profil.followers}
                  </div>
                  <div>
                    <i className="bi bi-person-plus-fill text-primary me-2"></i>
                    <strong>Following :</strong> {profil.following}
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton Fermer aligné à droite */}
            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-light btn-sm" onClick={handleClose}>
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <p className="text-light text-center">Chargement du profil GitHub...</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default GithubModal;





