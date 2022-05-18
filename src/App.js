import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import CreateReport from './components/CreateReport';
import Reports from './components/Reports';
import MyReport from './components/MyReport';
import { Helmet } from "react-helmet";

function App() {

  return (
    <div className="page">
      <Header />
      <Helmet>
        <style>{"body { background-color: #f6f8fe; }"}</style>
      </Helmet>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/createreport' element={<CreateReport />} />
        <Route path='report/:id' element={<MyReport />} />
      </Routes>
    </div >
  );
}

export default App;
