import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import Payments from './pages/Finances/Payments';
import Revenue from './pages/Finances/Revenue';
import Sales from './pages/Finances/Sales';
import Reports from './pages/Reports';




function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>} />
        <Route exact path="/dashboard" element={<Dashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>} />
        <Route path ='/users' element={<Users  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}/>
        <Route path ='/finance/payment' element={<Payments  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}/>
        <Route path ='/finance/revenue' element={<Revenue  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}/>
        <Route path ='/finance/sales' element={<Sales sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}/>
        <Route path ='/reports' element={<Reports sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}/>
      </Routes>
    </>
  );
}

export default App;
