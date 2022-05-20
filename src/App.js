import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import SideNav from './components/SideNav';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import CreateReport from './components/CreateReport';
import Reports from './components/Reports';
import MyReport from './components/MyReport';
import Overview from './components/Overview';
import Dashboard from './components/Dashboard';
import { Helmet } from "react-helmet";
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Header show={show} setShow={setShow} />
      <div className="App">
        <div className="NavContainer">
          {show && <SideNav />}
        </div>
        <div className="ContentContainer">
          <div className="Content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NoMatch />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='/createreport' element={<CreateReport />} />
              <Route path='report/:id' element={<MyReport />} />
              <Route path='overview' element={<Overview />} />
              <Route path='dashboard' element={<Dashboard />} />
            </Routes> </div>
        </div>
        <Helmet>
          <style>{"body {background: linear-gradient(90deg, rgba(237,160,31,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)}"}</style>
        </Helmet>
      </div >
    </div>
  );
}

export default App;
