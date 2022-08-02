import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
