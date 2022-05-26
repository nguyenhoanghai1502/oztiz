
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Agents from './pages/Agents/Agents';
import Contact from './pages/Contact/Contact';
import Features from './pages/Features/Features';
import Pages from './pages/Pages/Pages';
import Properties from './pages/Properties/Properties';
import Services from './pages/Services/Services';
import Navbar from './components/Navbar';
import routes from './components/routes/Routes';

function App() {
  return (
      <div className="app">
         <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/features" element={<Features/>}></Route>
            <Route path="/agents" element={<Agents/>}></Route>
            <Route path="/pages" element={<Pages/>}></Route>
            <Route path="/properties" element={<Properties/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
