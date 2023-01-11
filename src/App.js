import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import Galeri from './pages/Galeri';
import Artikel from './pages/Artikel';
import Kontak from './pages/Kontak';
import Footer from './component/Footer';
import Post from './component/Post';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Beranda />} />
        <Route path='/tentang-kita' element={<Tentang />} />
        <Route path='/galeri' element={<Galeri />} />
        <Route path='/artikel' element={<Artikel />} />
        <Route path='/artikel/1' element={<Post />} />
        <Route path='/kontak' element={<Kontak />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
