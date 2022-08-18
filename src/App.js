import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage';
import NavBar from './Components/Navbar/NavBar';
import ContactUsSection from './Components/ContactUsSection copy/ContactUsSection';
import CallForPaper from './Components/CallForPaper/CallForPaper';
import Committee from './Components/Committee/Committee';
import Keynote from './Components/Keynote/Keynote';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/call-for-paper' exact element={<CallForPaper />} />
        <Route path='/committee' exact element={<Committee />} />
        <Route path='/keynote' exact element={<Keynote />} />
      </Routes>
      <ContactUsSection />
    </div>
  );
}

export default App;
