import React, { useContext, useEffect, useState } from 'react';
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
import SideBContext from './Contexts/SideBContext';
import DataContext from './Contexts/DataContext';
import UsersContext from './Contexts/UsersContext';
import UsersCounter, { UsersCountContext } from './Contexts/UsersCountContext';




function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <DataContext>
      <UsersContext>
      <UsersCounter>
      <SideBContext>
        <>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path ='/users' element={<Users  />}/>
            <Route path ='/finance/payment' element={<Payments  />}/>
            <Route path ='/finance/revenue' element={<Revenue  />}/>
            <Route path ='/finance/sales' element={<Sales />}/>
            <Route path ='/reports' element={<Reports />}/>
          </Routes>
        </>
      </SideBContext>
      </UsersCounter>
      </UsersContext>
    </DataContext>

  );
}

export default App;
