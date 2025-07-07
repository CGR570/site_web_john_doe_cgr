import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import './index.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        import Realisations from <Route path="/galerie" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
