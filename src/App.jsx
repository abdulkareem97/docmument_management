import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NewFaculty from './partials/admin/faculty/NewFaculty';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Dashboard >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newFaculty" element={<NewFaculty />} />
        </Routes>
      </Dashboard>
    </>
  );
}

export default App;
