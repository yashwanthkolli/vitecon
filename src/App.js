import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage';
import NavBar from './Components/Navbar/NavBar';
import ContactUsSection from './Components/ContactUsSection copy/ContactUsSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
      </Routes>
      <ContactUsSection />
    </div>
  );
}

export default App;
