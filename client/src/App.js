// import logo from './images/jamestraphotography_FINALblueorange_1.png';
// import './App.css';
// import './normalize.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import StockPhotos from './pages/StockPhotos'
import Contact from './pages/Contact'
import Album from './pages/Album'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/stock-photos" element={<StockPhotos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/album/:albumid" element={<Album />} />
          <Route path="*" element={<h1 className="text-headBlue font-merriweather text-4xl text-center mt-10">Error 404: Page not found.</h1>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
