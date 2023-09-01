import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav-bar';
import NotFound from './pages/not-found';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
