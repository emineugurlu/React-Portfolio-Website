import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About'; // About bileşenini eklediğinden emin ol
import Contact from './components/About/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} /> {/* About bileşeni burada olmalı */}
        <Route path="contact" element={<Contact />} /> 
      </Route>
    </Routes>
  );
}

export default App;
