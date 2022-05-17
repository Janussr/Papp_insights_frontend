import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import CreateReport from './components/CreateReport';
import Reports from './components/Reports';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='createreport' element={<CreateReport/>} />
        <Route path='report/:id' element={<Reports/>}/>
      </Routes>
    </div >
  );
}

export default App;
