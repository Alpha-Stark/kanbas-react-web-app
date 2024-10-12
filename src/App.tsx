import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* Change the below lab number for every assignments */}
          <Route path="/" element={<Navigate to="/Labs/Lab2" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
