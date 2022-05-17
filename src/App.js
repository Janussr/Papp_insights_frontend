import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import CreateReport from './components/CreateReport';
import Tester from './components/Tester';
import Reports from './components/Reports';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='createReport' element={<CreateReport/>} />
        <Route path='tester' element={<Tester/>} />
        <Route path='reports' element={<Reports/>} />
      </Routes>
    </div >
  );
}

export default App;
