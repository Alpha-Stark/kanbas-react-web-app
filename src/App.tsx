import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import LandingIndex from './LandingIndex';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* Change the below lab number for every assignments */}
          {/* <Route path="/" element={<Navigate to="/Labs/Lab3" />} /> */}
          <Route path="/" element={<Navigate to="LandingIndex" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path='/LandingIndex' element={<LandingIndex />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
