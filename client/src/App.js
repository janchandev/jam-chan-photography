// import logo from './images/jamestraphotography_FINALblueorange_1.png';
// import './App.css';
// import './normalize.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Home, About, Gallery, StockPhotos, Contact } from './pages'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
